import React from 'react';
import "./Css//background.css";
import {NAVBAR} from './Component/NAVBAR';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Browser ,Routes ,Route,}  from 'react-router-dom';
import { Home } from './Pages/Home';
import {Contact} from "./Pages/Contact";
import { About } from '../src/Pages/About';

export function App() {
  return(
<>
    <Browser>
    <NAVBAR/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route  path="/Contact" element={<Contact/>}/>
    <Route  path="/About" element={<About/>}/>
    </Routes>
    </Browser>



                                  {/* BACKGROUND */}
<div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>

{/* https://github.com/piyushgarg-dev?tab=repositories */}


</>
);
}



