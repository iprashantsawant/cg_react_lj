import './App.css';
import Lottie from 'react-lottie-player';
import { useEffect, useState } from 'react';
function App() {
  const [animationData, setAnimationData] = useState();
  useEffect(() => {
     import('./imgs/1_counting.json').then(setAnimationData);
  }, []);
  if (!animationData) return <div style={{"background-image": "linear-gradient(to right, #9bd245 , #84ba39)",height:"100vh"}}>&nbsp;</div>;
  return (
    <div className="App">
      
      <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: "2000px", height:  "100%" }}
    />
      <a href='https://google.com'> <img src="imgs/logo.png" alt='action bubble 1' style={{height:"60px", position:"absolute", zIndex:"100",top:"430px",left:"120px"}}/></a>
      <a href='https://google.com'> <img src="imgs/logo.png" alt='action bubble 2' style={{height:"60px", position:"absolute", zIndex:"100",top:"370px",left:"290px"}}/> </a>
      <a href='https://google.com'> <img src="imgs/logo.png" alt='action bubble 3' style={{height:"60px", position:"absolute", zIndex:"100",top:"330px",left:"420px"}}/> </a>

    </div>
  );
}

export default App;
