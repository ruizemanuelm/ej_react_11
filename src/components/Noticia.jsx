import React from 'react';
import { Button, Card } from 'react-bootstrap';
const Noticia = ({noti}) => {
    return (
        <article className=' col-lg-3 col-md-6 my-1 col-sm-12'>

              <Card className='h-100 m-2' >
            <Card.Img variant="top" src={noti.image_url} />
            <Card.Body className='h-100'>
              <Card.Title className=''> <b>{noti.title} </b> </Card.Title>
              <Card.Text className='text-truncate'>
            {noti.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center'>
            <Button href={noti.link}>ver noticia completa </Button>
        </Card.Footer>
              
          </Card>      

        </article>
    );
};

export default Noticia;