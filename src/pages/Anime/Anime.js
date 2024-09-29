import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/Api';
import './anime-info.css';
import { toast } from 'react-toastify';

const Anime = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnimes() {
      await api.get(`/anime/${id}`).then((response) => {
        //console.log(response.data.data);
        setAnime(response.data.data);
        setLoading(false);
      }).catch(() => {
        console.log("ANIME NÃO ENCONTRADO!")
        navigate("/", {replace: true});
        return
      })
    }

    loadAnimes();

    return () => {
      console.log("COMPONENTE NAO EXISTE MAIS");
    }
  }, [navigate, id])

  function salvarAnime() {
    const minhaLista = localStorage.getItem("@animeflix");
  
    let animesSalvos = JSON.parse(minhaLista) || [];
  
    const hasAnime = animesSalvos.some((animesSalvo) => animesSalvo.mal_id === anime.mal_id);
  
    if (hasAnime) {
      toast.warn("Esse anime já está na sua lista!");
      return;
    }
  
    animesSalvos.push(anime);
  
    localStorage.setItem("@animeflix", JSON.stringify(animesSalvos));
    toast.success("Anime salvo com sucesso!");
  } 
  

  if (loading) {
    return (
      <div className='anime-info'>
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return (
    <div className='anime-info'>
      <h1>{anime.title}</h1>
      <img src={anime.trailer.images.maximum_image_url} alt={anime.title} />

      <h3>Sinopse</h3>
      <span>{anime.synopsis}</span>

      <strong>Avaliação: {anime.score} / 10</strong>

      <div className='area-buttons'>
        <button onClick={salvarAnime}>Salvar</button>
        <button>
          <a target='blank' rel="external" href={`https://youtube.com/results?search_query=${anime.title} Trailer`}>Trailer</a>
        </button>
      </div>
    </div>
  )
}

export default Anime