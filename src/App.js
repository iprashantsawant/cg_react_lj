import './App.css';
import Lottie from 'react-lottie-player';
import { useEffect, useState } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

function App() {
  const [animationData, setAnimationData] = useState();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
      let p=0;
      const intc=setInterval(()=>{
        p=p+10;
        setProgress(p);
        if(p==100)
          clearInterval(intc);
      },200)
     import('./imgs/1_counting.json').then((data)=>{
       setProgress(100);
       setAnimationData(data);
     });
  }, []);
  if (!animationData) 
  return <div style={{backgroundImage: "linear-gradient(to right, #9bd245 , #84ba39)",height:"100vh"}}>
            <Progress percent={progress}  style={{width:"80%",marginLeft:"10%",paddingTop:"22%"}} strokeWidth={7}/>
        </div>;
  else
  return (
    <div  style={{backgroundImage: "linear-gradient(to right, #9bd245 , #84ba39)",height:"100%"}}>
      
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
