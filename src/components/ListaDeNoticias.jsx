import React from 'react';
import { CardGroup,Card, Col, Row, Container } from 'react-bootstrap';
import Noticia from './Noticia';

const ListaDeNoticias = ({noticias}) => {
    return (
        <div className='border rounded'>
          
           <CardGroup className='col-12 border border-primary justify-content-around'>
{noticias.map((noticia, indice)=> <Noticia noti={noticia} key={indice}/>)}
           </CardGroup>
        </div>
    );
};

export default ListaDeNoticias;