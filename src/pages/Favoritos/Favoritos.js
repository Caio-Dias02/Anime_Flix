import { useState } from 'react';
import './Favoritos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Favoritos = () => {
  const [animes, setAnimes] = useState([])

  useEffect(() => {

    const minhaLista = localStorage.getItem("@animeflix");
    setAnimes(JSON.parse(minhaLista) || []);
  }, [])

  function excluirAnime(id){
    let filtroAnimes = animes.filter((item) => {
      return (item.mal_id !== id)
    })

    setAnimes(filtroAnimes);
    localStorage.setItem("@animeflix", JSON.stringify(filtroAnimes));
    toast.success("Anime removido com sucesso!");
  }

  return (
    <div className='meus-animes'>
      <h1>Meus Animes</h1>

      {animes.length === 0 && <span>Você não pussui nenhum anime favorito :(</span>}
      <ul>
        {animes.map((item) => {
          return (
            <li key={item.mal_id}>
              <span>{item.title}</span>

              <div>
                <Link to={`/anime/${item.mal_id}`}>Ver detalhes</Link>
                <button onClick={() => excluirAnime(item.mal_id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
