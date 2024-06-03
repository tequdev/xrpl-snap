import { Col, useTheme } from '@peersyst/react-components';
import { BaseAccountModalProps } from './BaseAccountModal.types';
import Modal from '../../../common/components/feedback/Modal/Modal';
import Card from '../../../common/components/surface/Card/Card';
import AccountChip from '../../components/display/AccountChip';
import QrCode from '../../../common/components/display/QrCode/QrCode';

function BaseAccountModal({ address, footer, ...rest }: BaseAccountModalProps) {
  const { spacing } = useTheme();
  return (
    <Modal alignTitle="center" {...rest}>
      <Col gap={spacing[6]}>
        <Card css={{ width: '100%' }}>
          <Col gap={spacing[4]} alignItems="center">
            <QrCode value={address} />
            <AccountChip address={address} variant="filled" />
          </Col>
        </Card>
        {footer}
      </Col>
    </Modal>
  );
}

export default BaseAccountModal;