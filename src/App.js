import './App.css';
import React, { useEffect } from 'react';
import AlbumFeature from './features/Album';
import { Route, Routes, Link, NavLink, Navigate } from 'react-router-dom';
import Home from './features/Home';
import NotFound from './components/NotFound';
import UrlParams from './features/UrlParams';
import productApi from './api/productApi';
import CounterFeature from './features/Counter';
import AllTest from './features/AllTest';

function App() {
  useEffect(()=>{
    const fetchProducts = async()=>{
      const params = {
        _limit:10
      }
      const productList = await productApi.getAll(params)
      console.log(productList);
    }
    fetchProducts();
  },[])
  return (
    <div className="App">
      <p><Link to="/todos">Todo</Link></p>
      <p><Link to="/album">Album</Link></p>
      <p><NavLink to="/album" activeclasname="active-album">Album co class Active</NavLink></p>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/" element={<AlbumFeature />} />
        <Route path="/all" element={<AllTest />} />
        <Route path="/album" element={<AlbumFeature />} />
        <Route path="url-params" element={<UrlParams />} />
        {/* <Route path="/404" element={<div>Choose the correct path</div>} />
        <Route path="*" element={<Navigate replace to="/404" />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/counter" element={<CounterFeature/>}/>
      </Routes>
    </div >

  );
}

export default App;
