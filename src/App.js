import React, { useEffect, useState } from 'react';
import './App.css';

//import PageWrapper from './PageWrapper';
//<PageWrapper></PageWrapper>
//import peliculasJson from './peliculas.json';
//import Paginacion from './paginacion';

import Pelicula from './Pelicula';
function App() {

  const url = 'https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=3409';
  const [anime, setAnime] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();

    setAnime(responseJSON.data);
    console.log(responseJSON.data[0]);
  }
  useEffect(() => {
    fetchApi();
  }, [])
  return (
    <>
      {!anime ? 'Cargando...' : anime.map((animes, index) =>
        <div>
          
          <Pelicula descripcion={animes.attributes.description} img={animes.attributes.posterImage.small}
          titulo={animes.attributes.abbreviatedTitles} categoria={animes.type} date={animes.attributes.startDate}
          estado={animes.attributes.status}
          ></Pelicula>
        </div>
      )}
    </>

  );
}

export default App;
