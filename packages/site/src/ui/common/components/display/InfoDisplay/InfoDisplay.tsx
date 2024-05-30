import { Col, Row, Typography } from '@peersyst/react-components';
import clsx from 'clsx';
import VerticalLine from '../VerticalLine/VerticalLine';

export interface InfoDisplayProps {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  content: string;
}

function InfoDisplay({ className, title, content, ...rest }: InfoDisplayProps) {
  return (
    <Row gap="1rem" className={clsx('InfoDisplay', className)} {...rest}>
      <VerticalLine />
      <Col gap="0.5">
        <Typography variant="body1" light>
          {title}
        </Typography>
        <Typography variant="body1" fontWeight="500">
          {content}
        </Typography>
      </Col>
    </Row>
  );
}

export default InfoDisplay;