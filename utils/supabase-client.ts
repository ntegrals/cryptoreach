import { createClient } from '@supabase/supabase-js';
import { nanoid } from 'nanoid';
import type { Database } from 'types_db';

// import { getPagination } from './helpers';

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);
const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;

  return { from, to };
};

export const getTableRowsClient = async (
  table: string,
  page: number,
  size: number,
  filters: any,
  sort: any
) => {
  const { from, to } = getPagination(page, size);

  // Promise all
  // handle error
  let query = supabase.from(table).select('*').range(from, to);
  let queryCount = supabase
    .from(table)
    .select('*', { count: 'exact', head: true })
    .range(from, to);

  if (filters.length > 0) {
    // apply dynamic filters
    for (const filter of filters) {
      // query = query.filter(filter.col, filter.rule, filter.value);
      if (filter.rule === 'cs') {
        query = query.filter(filter.col, filter.rule, '{' + filter.value + '}');
        queryCount = queryCount.filter(
          filter.col,
          filter.rule,
          '{' + filter.value + '}'
        );
      } else if (filter.rule === 'not.cs') {
        query = query.filter(filter.col, filter.rule, '{' + filter.value + '}');
        queryCount = queryCount.filter(
          filter.col,
          filter.rule,
          '{' + filter.value + '}'
        );
      } else if (filter.rule === 'ilike') {
        query = query.filter(filter.col, filter.rule, '%' + filter.value + '%');
        queryCount = queryCount.filter(
          filter.col,
          filter.rule,
          '%' + filter.value + '%'
        );
      } else if (filter.rule === 'not.ilike') {
        query = query.filter(filter.col, filter.rule, '%' + filter.value + '%');
        queryCount = queryCount.filter(
          filter.col,
          filter.rule,
          '%' + filter.value + '%'
        );
      } else {
        query = query.filter(filter.col, filter.rule, filter.value);
        queryCount = queryCount.filter(filter.col, filter.rule, filter.value);
      }
    }
  }
  // if (Object.keys(sort).length > 0) {
  if (sort.set !== false) {
    query = query.order(sort.col, {
      ascending: sort.asc
    });
    queryCount = queryCount.order(sort.col, {
      ascending: sort.asc
    });
  }

  try {
    // the first call returns the total number of potential rows in the table
    const [resCount, resRows] = await Promise.all([
      // supabase.from(table).select('*', { count: 'exact', head: true }),
      queryCount,
      // supabaseAdmin.from('people').select('*').range(from, to)
      query
    ]);

    return [resCount.count, resRows.data, from, to];
  } catch (error) {
    console.log('ERROR', error);
  }
};
export const getTableRowsClientAll = async (
  table: string,
  filters: any,
  sort: any
) => {
  // Promise all
  // handle error
  let query = supabase.from(table).select('*');

  if (filters.length > 0) {
    // apply dynamic filters
    for (const filter of filters) {
      // query = query.filter(filter.col, filter.rule, filter.value);
      if (filter.rule === 'cs') {
        query = query.filter(filter.col, filter.rule, '{' + filter.value + '}');
      } else if (filter.rule === 'not.cs') {
        query = query.filter(filter.col, filter.rule, '{' + filter.value + '}');
      } else if (filter.rule === 'ilike') {
        query = query.filter(filter.col, filter.rule, '%' + filter.value + '%');
      } else if (filter.rule === 'not.ilike') {
        query = query.filter(filter.col, filter.rule, '%' + filter.value + '%');
      } else {
        query = query.filter(filter.col, filter.rule, filter.value);
      }
    }
  }
  // if (Object.keys(sort).length > 0) {
  if (sort.set !== false) {
    query = query.order(sort.col, {
      ascending: sort.asc
    });
  }

  try {
    // the first call returns the total number of potential rows in the table
    const [resRows] = await Promise.all([
      // supabase.from(table).select('*', { count: 'exact', head: true }),
      // supabaseAdmin.from('people').select('*').range(from, to)
      query
    ]);

    return [resRows.data];
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const getTableRowsSelectionClient = async (
  table: string,
  selection: string[]
) => {
  if (selection.length <= 0) {
    return;
  }

  // Promise all
  // handle error
  let query = supabase.from(table).select('*').limit(500);

  let filterString = '';

  for (const item of selection) {
    filterString = filterString + 'id.eq.' + item + ',';
  }

  // remove last comma
  filterString = filterString.slice(0, -1);

  query = query.or(filterString);

  try {
    // the first call returns the total number of potential rows in the table
    const [resCount, resRows] = await Promise.all([
      supabase.from(table).select('*', { count: 'exact', head: true }),
      // supabaseAdmin.from('people').select('*').range(from, to)
      query
    ]);

    return [resCount.count, resRows.data];
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const getTableRowsClientAllInline = async (
  targetCol: string,
  targetName: string
) => {
  // Promise all
  // handle error

  // where starred contains e.g. "Significant-Gravitas/Auto-GPT"
  let query = supabase
    .from('people3')
    .select('*')
    .contains(targetCol, [targetName]);

  try {
    // the first call returns the total number of potential rows in the table
    const [resCount, resRows] = await Promise.all([
      supabase.from('people3').select('*', { count: 'exact', head: true }),
      // supabaseAdmin.from('people').select('*').range(from, to)
      query
    ]);

    return [resCount.count, resRows.data];
  } catch (error) {
    console.log('ERROR', error);
  }
};
