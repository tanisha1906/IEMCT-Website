import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import Playcard1 from './Component/Playcard1';
import Playcard2 from './Component/Playcard2';
import Event1 from './Component/Event1';
import Event2 from './Component/Event2';
import Event3 from './Component/Event3';
import Event4 from './Component/Event4';
import Upcoming from './Component/Upcoming';
import Division1 from './Component/Division1';
import Join from './Component/Join';
import Footer from './Component/Footer';
import Division2 from './Component/Division2';
const App=()=>{
  return(
    <>
    <Routes>
      <Route path="/" Component={Home}/>
    </Routes>
    <Division1/>
    <Playcard1/>
    <Playcard2/>
    <Event1/>
    <Event2/>
    <Event3/>
    <Event4/>
    <Upcoming/>
    <Join/>
    <Footer/>
    <Division2/>
    </>
  )
}
export default App;

