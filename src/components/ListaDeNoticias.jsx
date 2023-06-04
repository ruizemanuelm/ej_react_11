import React from 'react';
import { Row,Col,Card } from 'react-bootstrap';
import Noticia from './Noticia';

const ListaDeNoticias = () => {
    return (
        <div className='border rounded'>
             <Row xs={1} md={2} className="g-4 p-3 ">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
        <Noticia></Noticia>
        </Col>
      ))}
    </Row>
        </div>
    );
};

export default ListaDeNoticias;