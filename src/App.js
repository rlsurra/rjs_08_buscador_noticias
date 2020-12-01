import React, {Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [categoria,setCategoria] = useState('');
  const [noticias,setNoticias] = useState([]);

  useEffect( () => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=0590e0461f8c4a72bb5c9556ae796c5b`;
      const resultado = await fetch(url);
      const noticias = await resultado.json();
      setNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias"/>
      <div className="container white">
        <Formulario setCategoria={setCategoria}/>
        <ListadoNoticias noticias={noticias}/>
      </div>
    </Fragment>
  );
}

export default App;
