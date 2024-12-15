import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import HouseOfHope from './pages/HouseOfHope';
import TarotGame from './pages/TarotGame';
import MoneyTracker from './pages/MoneyTracker';
import NotFound from './pages/NotFound';
import ProjectNav from './components/ProjectNav';

// Komponen untuk mengatur tampilan ProjectNav
const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <>
      {!isHomePage && <ProjectNav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/house-of-hope" element={<HouseOfHope />} />
        <Route path="/projects/tarot-game" element={<TarotGame />} />
        <Route path="/projects/money-tracker" element={<MoneyTracker />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;