import { supabaseAdmin } from './supabase-admin';

const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;

  return { from, to };
};

export const getTableRowsAdmin = async (
  table: string,
  page: number,
  size: number,
  filters: any,
  sort: any
) => {
  const { from, to } = getPagination(page, size);

  // Promise all
  // handle error

  let query = supabaseAdmin.from(table).select('*').range(from, to);

  if (filters.length > 0) {
    // apply dynamic filters
    for (const filter of filters) {
      query = query.filter(filter.col, filter.rule, filter.value);
    }
  }
  if (Object.keys(sort).length > 0) {
    query = query.order(sort.col, {
      ascending: sort.asc
    });
  }

  try {
    // the first call returns the total number of potential rows in the table
    const [resCount, resRows] = await Promise.all([
      supabaseAdmin.from(table).select('*', { count: 'exact', head: true }),
      query
    ]);

    return [resCount.count, resRows.data, from, to];
  } catch (error) {
    console.log(error);
  }
};
