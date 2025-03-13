import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegFilePdf } from "react-icons/fa6";
import { CiLinkedin, CiMail } from "react-icons/ci";
import Pdf from './Portfolio25.pdf';

function LilyLinks() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2"><p className="Skill-Name"><a className="Link-Text" href="https://www.linkedin.com/in/lily-damota-8488aa3b/" target="_blank" rel="noreferrer"><CiLinkedin className="big-icon" /><br/>Linkedin</a></p>
        </Col>
        <Col xs lg="2"><p className="Skill-Name"><a className="Link-Text" href={Pdf} target="_blank" rel="noreferrer"><FaRegFilePdf className="big-icon" /><br/>Portfolio</a></p>
        </Col>
        <Col xs lg="2"><p className="Skill-Name"><a className="Link-Text" href="mailto:someone@example.com"><CiMail className="big-icon" /><br/>Email</a></p>
        </Col>
      </Row>
    </Container>
  );
}

export default LilyLinks;