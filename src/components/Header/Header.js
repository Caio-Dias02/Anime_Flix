import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <header>
        <Link className="logo" to="/" >Anime Flix</Link>
        <Link className="favoritos" to="/favoritos" >Meus Animes</Link>
    </header>
  )
}

export default Header