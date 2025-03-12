import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegFilePdf } from "react-icons/fa6";
import { CiLinkedin, CiMail } from "react-icons/ci";

function LilyLinks() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2"><p className="Skill-Name"><CiLinkedin className="big-icon" /><br/><a className="Link-Text" href="https://www.linkedin.com/in/lily-damota-8488aa3b/" target="_blank" rel="noreferrer">Linkedin</a></p>
        </Col>
        <Col xs lg="2"><p className="Skill-Name"><FaRegFilePdf className="big-icon" /><br/><a className="Link-Text" href="#" target="_blank" rel="noreferrer">Portfolio</a></p>
        </Col>
        <Col xs lg="2"><p className="Skill-Name"><CiMail className="big-icon" /><br/>E-Mail</p>
        </Col>
      </Row>
    </Container>
  );
}

export default LilyLinks;