import React from "react";
import { Container, Form, Row,Col } from "react-bootstrap";

const Formulario = () => {
  return (
    <div className=" border rounded p-4">
        <Row >
        <Col>
        <h3>Buscar por categoria:</h3>
        </Col>
        <Col>
        <Form.Select aria-label="Default select example">
        <option>Opciones</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
        </Col>
      </Row>
    </div>
  );
};

export default Formulario;
