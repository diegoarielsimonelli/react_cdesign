import React from 'react'
import { Icon } from 'semantic-ui-react'
import logo from './c.jpg';


const NavBar = () => {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <img src={logo} alt='logo c' width='200px' height='200px' /><a className="navbar-brand" href>C-Design</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
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
  