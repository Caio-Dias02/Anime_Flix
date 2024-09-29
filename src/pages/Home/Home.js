import React, { useEffect, useState } from 'react';
import api from '../../services/Api';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadAnimes() {
      const response = await api.get("top/anime?filter=bypopularity")


      setAnimes(response.data.data.slice(0, 20));
      setLoading(false);
      //console.log(response.data.data.slice(0, 10));
    }

    loadAnimes();
  }, []);

  if (loading) {
    return (
      <div className='loading'>
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='lista-animes'>
        {animes.map((anime) => {
          return (
            <article key={anime.mal_id}>
              <strong>{anime.title}</strong>
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
              <Link to={`/anime/${anime.mal_id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )

}

export default Home