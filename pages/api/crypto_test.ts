export default function handler(req: any, res: any) {
  res.status(200).json({
    coins: [
      {
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 28422.06,
      },
      {
        name: 'Ethereum',
        symbol: 'ETH',
        price: 1582.66,
      },
      {
        name: 'Tether USDT',
        symbol: 'USDT',
        price: 1,
      },
      {
        name: 'BNB',
        symbol: 'BNB',
        price: 213.67,
      },
      {
        name: 'XRP',
        symbol: 'XRP',
        price: 0.4946,
      },
      {
        name: 'USDC',
        symbol: 'USDC',
        price: 1,
      },
      {
        name: 'Solana',
        symbol: 'SOL',
        price: 23.62,
      },
      {
        name: 'Cardano',
        symbol: 'ADA',
        price: 0.2518,
      },
      {
        name: 'Dogecoin',
        symbol: 'DOGE',
        price: 0.06,
      },
      {
        name: 'TRON',
        symbol: 'TRX',
        price: 0.08859,
      },
    ],
  });
}
