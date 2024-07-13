import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          {/* Diğer sayfalar için buraya route'lar ekleyebilirsiniz */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
