import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Home />}
          path="/"
        />
        <Route
          element={<Create />}
          path="/create"
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
