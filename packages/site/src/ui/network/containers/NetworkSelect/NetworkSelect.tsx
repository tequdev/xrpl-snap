import { Select } from '@peersyst/react-components';
import clsx from 'clsx';
import useGetNetworkSelectOptions from './hooks/useGetNetworkSelectOptions';
import useGetActiveNetwork from 'ui/network/query/useGetActiveNetwork';
import { useTranslate } from 'ui/locale';

export interface NetworkSelectProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

function NetworkSelect({ className, children, ...rest }: NetworkSelectProps) {
  const translate = useTranslate();
  const options = useGetNetworkSelectOptions();
  const { data: activeNetwork } = useGetActiveNetwork();

  return (
    <Select
      defaultValue={activeNetwork?.chainId}
      placeholder={translate('selectYourNetwork')}
      options={options}
      className={clsx('NetworkSelect', className)}
      {...rest}
    />
  );
}

export default NetworkSelect;
