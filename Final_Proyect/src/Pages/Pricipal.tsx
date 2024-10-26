import React from 'react';

interface NoticiaProps {
  imgSrc: string;
  titulo: string;
  resumen: string;
  link: string;
}

const Noticia: React.FC<NoticiaProps> = ({ imgSrc, titulo, resumen, link }) => (
  <div className="noticia-individual">
    <img src={imgSrc} className="imagen-noticia" alt={titulo} />
    <h4 className="titulo-noticia">{titulo}</h4>
    <p className="resumen-noticia">{resumen}</p>
    <a href={link} className="boton-noticia">Leer Más</a>
  </div>
);

const Header: React.FC = () => (
  <header className="flotador-izquierdo">
    <div className="flotador-izquierdo">
      <a href="http://localhost/curso_html_css/M13C1.html">
        <img src="logo.png" className="logo" alt="Logo" />
      </a>
    </div>
    <div className="flotador-derecho">
      <nav>
        <ul>
          <li><a href="#contacto" className="flotador-derecho">Contacto</a></li>
          <li><a href="#ubicacion" className="flotador-derecho">Ubicación</a></li>
          <li><a href="#noticias" className="flotador-derecho">Noticias</a></li>
          <li><a href="#inicio" className="flotador-derecho">Inicio</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const App: React.FC = () => (
  <div>
    <Header />
    <div>
      <img src="banner-principal.jpg" alt="Banner Principal" width="100%" className="borde-imagen" />
    </div>
    <div id="noticias">
      <div className="titulo-seccion">
        <h1>Infórmate con Noticias Destacadas</h1>
      </div>
      <div className="seccion-noticias">
        <Noticia 
          imgSrc="noticia1.jpg" 
          titulo="Cómo hacer la hamburguesa perfecta: nunca uses la espátula" 
          resumen="La hamburguesa es uno de los platos más socorridos, ya que son fáciles de hacer y que gusta a todo el mundo, sobre todo, a los más pequeños. Además, es un plato que se puede adaptar a todas las preferencias y con muchas posibilidades a la hora de elegir los ingredientes." 
          link="#" 
        />
        <Noticia 
          imgSrc="noticia2.jpg" 
          titulo="McDonald's empieza a comercializar una triple 'cheeseburger' en Reino Unido" 
          resumen="La cadena de alimentación McDonald's ha lanzado en 60 restaurantes del Reino Unido un nuevo producto: la triple cheeseburger. Si las ventas de este producto funcionan, McDonald's extendería su distribución por el resto de restaurantes de la cadena en Gran Bretaña." 
          link="#" 
        />
        <Noticia 
          imgSrc="noticia3.jpg" 
          titulo="Así es el 'gadget' portátil para cocinar pizzas caceras de forma tradicional" 
          resumen="La pizza es uno de esos bocados a los que pocos se resisten. Si bien es cierto que la piña es el único ingrediente que puede lograr que un auténtico amante de este manjar se niegue a darle un bocado, también lo es que, quien sabe apreciarlo bien, no se conforma con disfrutarlo prefabricado." 
          link="#" 
        />
        <Noticia 
          imgSrc="noticia4.jpg" 
          titulo="¿Es saludable comer pizza? Sí y no, te explicamos" 
          resumen="Dependiendo del tipo de corteza, la cantidad de queso y los ingredientes utilizados, la pizza puede clasificar en cualquier lugar desde nutricionalmente decente a un desastre de la dieta." 
          link="#" 
        />
        <Noticia 
          imgSrc="noticia5.jpg" 
          titulo="Una pizzería cobra un plus en el pedido si quieres que el repartidor 'te mire a los ojos y te diga que todo estará bien'" 
          resumen="¿Quién no ha tenido un día en el que parece que todo va mal? A veces hay que darse un tiempo para ver las cosas desde otra perspectiva o simplemente pedir una pizza para levantar el ánimo." 
          link="#" 
        />
        <Noticia 
          imgSrc="noticia6.jpg" 
          titulo="Nuevo campeón mundial de comer hot dogs; devoró 62 en 10 minutos" 
          resumen="Matthew ‘Megasapo’ Stonie devoró 62 perros calientes en 10 minutos durante el Concurso Internacional de Comer Hot Dogs de Nathan’s Famous este sábado en Nueva York y arrebató el cinturón amarillo mostaza y el título al campeón, quien comió 60." 
          link="#" 
        />
      </div>
    </div>
  </div>
);

export default App;

  