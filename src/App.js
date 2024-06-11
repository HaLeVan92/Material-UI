import React from 'react';
import SearchAppBar from './component/SearchAppBar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <SearchAppBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/book/:id" element={<DetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
 