import { TokenCardProps } from './TokenCard.types';
import { TokenCardRoot } from './TokenCard.styles';
import { Col, Skeleton, Typography } from '@peersyst/react-components';
import { useGetTokenIcon } from './hooks/useGetTokenIcon';
import { useTheme } from 'styled-components';
import clsx from 'clsx';
import Balance from 'ui/common/components/display/Balance/Balance';

export function TokenCard({
  className,
  token,
  balance,
  loading = false,
}: TokenCardProps): JSX.Element {
  const tokenIcon = useGetTokenIcon(token);
  const { spacing } = useTheme();

  return (
    <TokenCardRoot className={clsx('Token', className)} gap={spacing[5]}>
      <Skeleton
        shape="circular"
        loading={loading}
        css={{ width: '2.5rem', height: '2.5rem' }}
      >
        {tokenIcon}
      </Skeleton>
      <Col gap={spacing[1]} justifyContent="center">
        <Skeleton loading={loading}>
          <Typography variant={'body1'} fontWeight="500">
            {token.currency}
          </Typography>
        </Skeleton>
        <Balance
          balance={balance}
          currency={token.currency}
          variant="body2"
          fontWeight={400}
          loading={loading}
          light
        />
      </Col>
    </TokenCardRoot>
  );
}

export default TokenCard;