import react from 'react';
import { Link } from 'react-router-dom';
import '../static/styles/Sidebar.css';

const Sidebar = () => {
  return(
    <div className="sidebar">
      <div className="ul-cont">
        <ul className="side-ul">
          <li className="side-li"><Link to='/'>Home</Link></li>
          <li className="side-li"><Link to='/about'>About</Link></li>
          <li className="side-li"><Link to='/cv'>CV</Link></li>
        </ul>
      </div>
    </div>
  )

}

export default Sidebar;