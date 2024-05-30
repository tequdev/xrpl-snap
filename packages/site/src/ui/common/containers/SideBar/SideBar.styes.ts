import { Col } from '@peersyst/react-components';
import styled from 'styled-components';

export const SideBarRoot = styled(Col)(({ theme }) => ({
  height: '43rem',
  borderRight: `1px solid ${theme.palette.grey[200]}`,
}));

export const SideBarAccountRoot = styled(Col)(({ theme }) => ({
  padding: theme.spacing[8],
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  height: '9.25rem',
  justifyContent: 'space-between',
}));

export const SideBarAccountContent = styled(Col)(() => ({
  overflowY: 'auto',
  height: '33.75rem',
}));