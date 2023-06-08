import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import { Container } from "react-bootstrap";
import ListaDeNoticias from "./components/ListaDeNoticias";
import Formulario from "./components/Formulario";
import { useState, useEffect } from "react";
function App() {
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    consultarAPI();
  }, []);
  const consultarAPI = async () => {
    try {
      // peticion get
      const respuestas = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_24026c2c114769105d06d38634b3a8d66f3d7&language=es");
      const dato = await respuestas.json();
      console.log(dato.results);
      setNoticias(dato.results);
    } catch (error) {}
  };
  return (
    <>
      <Titulo></Titulo>
      <hr />
      <Container className="">
        <Formulario></Formulario>
        <ListaDeNoticias noticias={noticias}></ListaDeNoticias>
      </Container>
    </>
  );
}

export default App;
