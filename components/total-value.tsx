import { fragmentMono400 } from '@/common/constants/fonts';
import { splitMoneyNumber } from '@/common/utils/formatters';

interface TotalValueProps {
  total: string;
  type: string;
}

export default function TotalValue({ total, type }: TotalValueProps) {
  const usd = type === 'usd';
  const [integerPart, decimalPart] = splitMoneyNumber(total);

  return (
    <div className={`total-value ${fragmentMono400}`}>
      <span className="integer">{usd && '$'}</span>
      <span className="integer">{integerPart}</span>.
      <span className="decimal">{decimalPart}</span>
    </div>
  );
}
