import React from 'react'
import { Icon } from 'semantic-ui-react'
import CardWidget  from './CardWidget';
import './NavBar.css'

const NavBar = () => {
    
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    <CardWidget width='200px' height='200px' className="m-3" /><a className="navbar-brand m-3" >C-Design</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         
          <Icon link color='red' name='cart'/>
        </li>
        <li className="nav-item">
        <Icon link color='red' name='coffee'/>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
        
) 
    
  
  ;
    
  };
  
  export default NavBar;
  