import GreenDesk from "./GreenDesk";
import IntroDesk from "./IntroDesk";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TabletView() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <IntroDesk />
        </Col>
        <Col sm={6}>
        <GreenDesk/>
        </Col>
      </Row>
    </Container>
  );
}

export default TabletView;