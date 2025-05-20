import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pdficon from "../assets/document-pdf.svg";
import linkedin from "../assets/linked-in.svg";
import maili from "../assets/mail.svg";
import Pdf from './Portfolio25.pdf';

function LilyLinks() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2"><p className="Skill-Name"><a className="Link-Text" href="https://www.linkedin.com/in/lily-damota-8488aa3b/" target="_blank" rel="noreferrer">
        <img className="icons"
        style={{ height: 60, width: 60 }} 
        src={linkedin} 
        alt="Linked In" /></a><br/>Linkedin</p>
        </Col>
        <Col xs lg="2"><p className="Skill-Name"><a className="Link-Text" href={Pdf} target="_blank" rel="noreferrer"><img 
        style={{ height: 60, width: 60 }} 
        src={pdficon} 
        alt="Portfolio" /></a><br/>Portfolio</p>
        </Col>
        <Col xs lg="2"><p className="Skill-Name"><a className="Link-Text" href="mailto:lilydamota@gmail.com"><img 
        style={{ height: 60, width: 60 }} 
        src={maili} 
        alt="Email Me!!" /></a><br/>Email</p>
        </Col>
      </Row>
    </Container>
  );
};

export default LilyLinks;