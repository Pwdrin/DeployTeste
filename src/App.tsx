import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import NotFound from './pages/NotFound';
import CrematoriumUnits from './pages/CrematoriumUnits';
import CrematoriumDetail from './pages/CrematoriumDetail';
import FuneralUnits from './pages/FuneralUnits';
import FuneralUnitDetail from './pages/FuneralUnitDetail';
import CemeteryUnits from './pages/CemiteryUnits';
import CemeteryUnitDetail from './pages/CemiteryDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="contato" element={<Contact />} />
        <Route path="servicos/:serviceId" element={<ServiceDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/crematorium-units" element={<CrematoriumUnits />} />
        <Route path="/crematorium-units/:id" element={<CrematoriumDetail />} />
        <Route path="/funeral-units" element={<FuneralUnits />} />
        <Route path="/funeral-units/:id" element={<FuneralUnitDetail />} />
        <Route path="/cemetery-units" element={<CemeteryUnits />} /> 
        <Route path="/cemetery-units/:id" element={<CemeteryUnitDetail />} /> 
      </Route>
    </Routes>
  );
}

export default App;