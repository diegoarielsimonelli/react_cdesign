import React, { Component } from "react";

// Components!
import "./components/NavBar";
import NavBar from "./components/NavBar";
import Header from './components/Header';
import Carrito from './components/Carrito';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header title='Bievenidos a C-Design' subtitle='Elegí el cuaderno a tu medida!'/>
        <Carrito stock={5}  />
      </div>
    );
  }
}

export default App;