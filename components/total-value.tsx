interface TotalValueProps {
  total: string | number;
  type: string;
}

export default function TotalValue({ total, type }: TotalValueProps) {
  const usd = type === 'usd';
  return (
    <div>
      {usd && '$'}
      {total}
    </div>
  );
}
