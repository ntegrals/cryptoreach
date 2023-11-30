import { Database } from '@/types_db';

type Price = Database['public']['Tables']['prices']['Row'];

export const getInfoFromPriceId = (priceId: string) => {
  switch (priceId) {
    case 'price_1Nn3iLCATBqgl1FspYw7JOgF':
      return {
        plan: 'Platinum - 10m Credits',
        credits: 10_000_000,
        available_credits: 10000000
      };

    case 'price_1O5dWmCATBqgl1FsbLsMA3JK':
      return { plan: 'Starter - 2k', credits: 2_000, available_credits: 2000 };
    case 'price_1O5dXTCATBqgl1Fs9hRCWmrC':
      return {
        plan: 'Starter - 2k',
        credits: 24_000,
        available_credits: 24000
      };

    case 'price_1O5daWCATBqgl1Fsv2aP5Mho':
      return { plan: 'Starter - 4k', credits: 4_000, available_credits: 4000 };
    case 'price_1O5ddzCATBqgl1FsJKDNXY4A':
      return {
        plan: 'Starter - 4k',
        credits: 48_000,
        available_credits: 48000
      };

    case 'price_1Nlxd6CATBqgl1FsUdmlXKIQ':
      return {
        plan: 'Explorer - 10k',
        credits: 10_000,
        available_credits: 10000
      };
    case 'price_1Nlxd6CATBqgl1FsRHAzz3Xr':
      return {
        plan: 'Explorer - 10k',
        credits: 120_000,
        available_credits: 120000
      };

    case 'price_1NlxdECATBqgl1Fs2NYUumiJ':
      return {
        plan: 'Explorer - 15k',
        credits: 15_000,
        available_credits: 15000
      };
    case 'price_1NlxdECATBqgl1Fsi81s1Smg':
      return {
        plan: 'Explorer - 15k',
        credits: 180_000,
        available_credits: 180000
      };

    case 'price_1NlxdNCATBqgl1Fs79WAVwWC':
      return { plan: 'Pro - 25k', credits: 25_000, available_credits: 25000 };
    case 'price_1NlxdNCATBqgl1FshDA7mkFH':
      return { plan: 'Pro - 25k', credits: 300_000, available_credits: 300000 };

    case 'price_1NlxdTCATBqgl1FssB4WZmjE':
      return { plan: 'Pro - 50k', credits: 50_000, available_credits: 50000 };
    case 'price_1NlxdTCATBqgl1FsCJN8T5G3':
      return { plan: 'Pro - 50k', credits: 600_000, available_credits: 600000 };

    // default:
    //   return { plan: 'Basic', credits: 100 };
  }
};

export function formatNumber(num: string | number): string {
  // return empty string if the input is empty
  if (!num) {
    return '0';
  }
  // Convert to number if the input is a string
  const number = typeof num === 'string' ? parseFloat(num) : num;

  if (isNaN(number)) {
    return 'Invalid number';
  }

  // Format in the million range
  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1)}m`;
  }

  // Format in the thousand range
  if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1)}k`;
  }

  // Otherwise, return the number as a string
  return number.toString();
}

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
};

export const postData = async ({
  url,
  data
}: {
  url: string;
  data?: { price: Price };
}) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    console.log('Error in postData', { url, data, res });

    throw Error(res.statusText);
  }

  return res.json();
};

export const toDateTime = (secs: number) => {
  var t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};

// prepare the rows for export
export const prepareRows = (rows: any[]) => {
  try {
    // remove id
    let newRows = rows.map((row) => {
      const { id, img_url, ...rest } = row;
      console.log(rest);
      return rest;
    });

    // // replace the new line character from the location

    // let addedCols = [];

    // newRows = newRows.map((row) => {
    //   const { pinned_repos, ...rest } = row;
    //   const personalReposCols = [
    //     'personal_repo_1',
    //     'personal_repo_2',
    //     'personal_repo_3'
    //   ];
    //   let personalReposColsValues = {};

    //   for (const [i, col] of personalReposCols.entries()) {
    //     if (pinned_repos[i]) {
    //       // Ensure the repo exists at this index
    //       //@ts-ignore
    //       personalReposColsValues[`${col}_name`] = pinned_repos[i].repo_name;
    //       //@ts-ignore

    //       personalReposColsValues[`${col}_description`] =
    //         pinned_repos[i].repo_description;
    //     }
    //   }

    //   return { ...rest, ...personalReposColsValues };
    // });

    // transform the objects
    return newRows;
  } catch (error) {
    console.log('ERROR', error);
    return rows;
  }
};
