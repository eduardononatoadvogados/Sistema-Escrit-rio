import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Clientes from './pages/Clientes.jsx';
import Processos from './pages/Processos.jsx';
import Documentos from './pages/Documentos.jsx';
import EnviarWhatsApp from './pages/EnviarWhatsApp.jsx';
function App(){
  return(
    <BrowserRouter>
      <div className='flex flex-col items-center'>
        <img src='/src/assets/logo.png' alt='Logo Escritório' className='h-20 my-4'/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/clientes' element={<Clientes/>}/>
          <Route path='/processos' element={<Processos/>}/>
          <Route path='/documentos' element={<Documentos/>}/>
          <Route path='/whatsapp' element={<EnviarWhatsApp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
