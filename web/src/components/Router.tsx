import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import Memory from './pages/Memory';

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
        <Route
          element={<Memory />}
          path="/memory"
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
