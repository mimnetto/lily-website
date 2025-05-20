import GreenDesk from "./GreenDesk";
import IntroDesk from "./IntroDesk";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DesktopView() {
  return (
    <Container>
      <Row>
        <Col>
          <IntroDesk />
        </Col>
        <Col sm={8}>
        <GreenDesk/>
        </Col>
      </Row>
    </Container>
  );
}

export default DesktopView;