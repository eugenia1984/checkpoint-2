import React from "react";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const Home = () => {
  return(
    <>
      <Container className="main">
        <Alert variant="success" className="my-5">
        <Alert.Heading>
          <h2 className="my-4">Bienvenidos al CheckPoint #2</h2>
        </Alert.Heading>
        <h3  className="my-2">Consigna:</h3>
        <p className="mb-3">Migrar el sitio construido en el checkpoint #1 en HTML, CSS y JS a ReactJS.</p>
        <hr />
        <h4>Aclaraciones:</h4>
        <p className="mb-3">Todos los elementos de la UI deben estar componetizados. Esto implica que solo tendremos un HTML y todas las páginas de nuestro sitio deben estar en componentes funcionales de React.</p>
        <p className="mb-3">Los estilos del sitio pueden variar de una entrega a otra, se puede implementar alguna librería/framework de CSS en caso de que no hayan utilizado y no necesariamente deben verse igual desde la UI, sino que debe cumplir con los mismos requisitos.</p>
        <p className="mb-3">El producto debe estar ruteado con React Router Dom v6. Además, no debe generar recarga del sitio en ningún momento, por lo que debe tener el comportamiento de una SPA (Single Page Application).</p>
        <p className="mb-3"> Se deben realizar los mismos pedidos a las APIs y se debe controlar por medio de los hooks que hemos trabajado.</p>
        <p className="mb-3">En la sección de Rick & Morty, se debe generar una vista detallada de cada personaje (Sigue vigente la opción de NO paginar y utilizar solo los primeros 20 resultados).</p>
        <p className="mb-3">La fecha de entrega está pactada para el día Lunes 12 de septiembre a las 23.59h (para que tengan todo el día para trabajar). La entrega se realizará a través de Classroom.</p>
        <p className="mb-3">Como plus de esta entrega, habrá que generar un archivo Readme.md para documentar todo lo que se trabajó en el checkpoint #2, desde que empezamos a trabajar con React. Vamos a comentar sobre la migración del sitio (por lo que deberían comentar de qué se trató el Checkpoint #1), tienen que figurar las dependencias que están utilizando en el proyecto y debe figurar la secuencia de pasos para poder clonar el repositorio y hacerlo funcionar de forma local.</p>
      </Alert>
      </Container> 
    </>
  );
};

export { Home };