import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components!
import "./components/NavBar";
import NavBar from "./components/NavBar";
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';
import Cart from "./components/Cart";


class App extends Component {
  render() {
    return (
      <Router>

      <div className="App">
        <NavBar />
        
        <Header title='Bievenidos a C-Design' subtitle='Elegí el cuaderno a tu medida!'/>
       
         {/* <ItemList /> 
        <ItemDetailContainer /> */}
        
      <Switch>
          
      <Route exact path="/">
            <h2>Item List</h2>
            <ItemList  />
          </Route>
          <Route path="/category/:categoryId">
            <h2>Item List</h2>
            <ItemList  />
          </Route>
          <Route path="/item/:ItemId">
                <h2>Item Detail</h2>
            <ItemDetailContainer></ItemDetailContainer>
          </Route>
          <Route path='/Cart' component={Cart} />
        </Switch>  
      </div>
      </Router>
    );
  }
} 

export default App;