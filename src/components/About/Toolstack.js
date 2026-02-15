import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import firefox from "../../Assets/TechIcons/Firefox.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">macOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={firefox} alt="Firefox" className="tech-icon-images" />
        <div className="tech-icons-text">Firefox</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={intelliJ} alt="intelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ IDEA</div>
      </Col>
    </Row>
  );
}

export default Toolstack;