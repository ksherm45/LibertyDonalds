import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Pods from './components/Pods';
import Audio from './components/Audio';
import Video from './components/Video';
import Library from './components/Library';
import Homepage from './components/Homepage';


function App() {
  return (
    <div>
    <Navbar/>

    <Routes>
    <Route path="/Homepage" element={<Homepage/>} />
    <Route path="/Audio" element={<Audio/>} />
    <Route path="/Video" element={<Video/>} />
    <Route path="/Pods" element={<Pods/>} />
    <Route path="/Library" element={<Library/> } />


    </Routes>

    </div>
  );
}

export default App;
