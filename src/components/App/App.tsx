import React from 'react';
import './App.css';
import {CatalogPage} from "../CatalogPage/CatalogPage";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <CatalogPage/>
      <Footer/>
    </div>
  );
}

export default App;
