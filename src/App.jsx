import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from './redux/actions/restaurantAction';
import { getCart } from './redux/actions/basketAction';

const App = () => {
  // dispatch kurulumunu yap
  const dispatch = useDispatch();

  // sayfa yuklendiğinde thunk fonk ile api ye istek at gelen verileri reducera ilet
  useEffect(() => {
    // Restaurant verilerini alan fonk.
    dispatch(getRestaurants());
     // Cart verilerini alan fonk.
     dispatch(getCart());
  }, []);

  


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/restaurant/:id' element={<Detail/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
