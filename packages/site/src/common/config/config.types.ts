import type { NetworkReserve } from 'common/models';

export type Config = {
  projectName: string;
  publicUrl: string;
  maxNumberDecimals: number;
  nativeToken: string;
  decimals: number;
  peersystUrl: string;
  snapOrigin: string;
  snapAboutUrl: string;
  fiatCurrency: string;
  coinPrice: {
    apiUrl: string;
    xrpId: string;
  };
  tokenMetadata: {
    apiUrl: string;
  };
  metamaskInstallationLink: string;
  refetchIntervals: {
    balance: number;
    transactions: number;
    coinPrice: number;
    isAccountActive: number;
  };
  mockedAddress: string;
  fiatDecimals: number;
  xrplNetwork: NetworkReserve;
  featureFlags: {
    enablePlayground: boolean;
  };
  reserveInfoLink: string;
};
