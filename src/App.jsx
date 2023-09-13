import { useState } from 'react'
import rimuru1 from '/acto1.jpeg'
import rimuru2 from './assets/acto2-recortado.png';
import './index.css'
import PropTypes from 'prop-types';


export default function App() {
  
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

function manejandoClick() {
  setCount(count+1);
}
function manejandoClick2() {
  setCount2(count2+1);
}
  return (
    <>
      <div id='dashboard'>
       <div id="mainText">
       <h1>dashboard</h1>
       </div>
       <div id="main_img">
          <img src={rimuru1} className="logo react" alt="React logo" />
       </div>
      </div>
      <div className="box">
      <h2>DESCARGAS</h2>
      <span>{count2}</span>
      </div>
      <div className="box">
      <h2>USUARIOS</h2>
      <span>{count}</span>

      </div>
      <div className="buttonsContainer">

      <LoginButton count={count} onClick={manejandoClick}/>
      <DownloadButton count={count2} onClick={manejandoClick2}/>
     
      </div>

    </>
  )
}
function LoginButton({count,onClick}) {
  return(
    <div onClick={onClick} className="login box buttons">LOG IN
    <br/>
      {count} 
    </div>
  )
}
LoginButton.propTypes={

    count: {
      type: PropTypes.number,
      required: true
    },
    onClick:{
      type:PropTypes.func,
      required:true
    }
}
// MyResult.propTypes={
//   count:propTypes.string.isRequired
// }
function DownloadButton({count,onClick}) {
  return(
    <div onClick={onClick} className="downloadButton box buttons">
        DOWNLOAD <br/> {count}
        <br/>
        <img src={rimuru2} alt="rimuru2" />
      </div>
  )
}
DownloadButton.propTypes={
  count: Number.isRequired,
  onClick:Function.isRequired
}


