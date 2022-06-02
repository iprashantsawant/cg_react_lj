import logo from './logo.svg';
import './App.css';
import LayeredImage from "react-layered-image";
import lottieJson from './imgs/1_counting.json';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
function App() {

  return (
    <div className="App">
      
      <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: "2000px", height:  "100%" }}
    />
      <a href='https://google.com'> <img src="imgs/logo.png" style={{height:"60px", position:"absolute", zIndex:"100",top:"430px",left:"120px"}}/></a>
      <a href='https://google.com'> <img src="imgs/logo.png" style={{height:"60px", position:"absolute", zIndex:"100",top:"370px",left:"290px"}}/> </a>
      <a href='https://google.com'> <img src="imgs/logo.png" style={{height:"60px", position:"absolute", zIndex:"100",top:"330px",left:"420px"}}/> </a>

    </div>
  );
}

export default App;
