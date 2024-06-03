import { Token } from 'common/models/token';
import Amount from 'common/utils/Amount';

export type TransactionCardProps = {
  account: string;
  timestamp: number;
  amount: Amount;
  token: Token;
  direction: 'out' | 'in';
  loading?: boolean;
};