import react from 'react';
import Sidebar from './Sidebar';
import '../static/styles/Main.css';
import image1 from '../static/imgs/mota.jpeg';
import image2 from '../static/imgs/cv.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
  return(
    <main>
      <Sidebar/>
      <div className="content">
        <div className="quote">Always looking for beeing better.</div>
        <hr/>
        <div className="cards-main">
          <div className="card">
            <img src={image1} alt='mota'/>
            <p><Link to='/about'>About</Link></p>
          </div>
          <div className="card">
            <img src={image2} alt='mota'/>
            <p><Link to='/cv'>CV</Link></p>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Main;