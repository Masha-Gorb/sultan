import React from 'react';
import './App.css';
import {CatalogPage} from "../CatalogPage/CatalogPage";
import { Routes, Route} from "react-router-dom";
import {ProductCardPage} from "../ProductCard/ProductCardPage";
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";
import {IntroPage} from "../IntroPage/IntroPage";
import {Layout} from "../Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IntroPage />}/>
          <Route path="catalog" element={<CatalogPage />}/>
          <Route path="catalog/:id" element={<ProductCardPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
