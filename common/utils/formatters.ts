interface Coin {
  name: string;
  symbol: string;
  price: string;
}

export const containsPrivacy = (str: any): boolean => str.includes('privacy');

export const pluckCoinNames = (coins: Coin[]) => coins.map(coin => coin.name);

export const formatToDollars = (value: number): string => {
  if (typeof value !== 'number') {
    return 'Invalid input';
  }

  return `${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
};

export const splitMoneyNumber = (moneyNumber: string): [string, string] => {
  // Split the number by the decimal point
  const parts = moneyNumber.toString().split('.');

  // The integer part is the first element of the array
  // The decimal part is the second element (if exists), or default to '0'
  const integerPart = parts[0];
  const decimalPart = parts[1] || '0';

  return [integerPart, decimalPart];
};
