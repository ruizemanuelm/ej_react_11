import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Noticia from './Noticia';

const ListaDeNoticias = ({noticias}) => {
    return (
        <div className='border rounded'>
          
           <CardGroup className='col-12 justify-content-around'>
{noticias.map((noticia, indice)=> <Noticia noti={noticia} key={indice}/>)}
           </CardGroup>
        </div>
    );
};

export default ListaDeNoticias;