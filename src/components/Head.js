import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App';
import '../static/styles/Head.css';

const Head = () => {

  return(
    <div className="header-main">
      <div className="header-name">
        <h2 className="h-name"><Link to='/'>Jorge Barba</Link></h2>
        <div className="header-desc">Developer</div>
      </div>
    </div>
  )
}

export default Head;