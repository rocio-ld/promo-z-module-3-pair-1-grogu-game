//importar imagenes
import { useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Board from './Board';



function App() {
//constantes 
const [box,setbox] = useState (0);
const [cookie,setCookie] = useState (['🍪','🍪','🍪']);
const [egg,setEgg] = useState (['🥚','🥚','🥚']);
const [frog,setFrog] = useState (['🐸','🐸','🐸']);
const [status, setStatus]= useState('En curso');

const rollDice=()=>{
  let numberRandom = Math.floor(Math.random()*4)+1;
  console.log(numberRandom);
  if(numberRandom===4){
    setbox(box +1)}
    else if(numberRandom===1){
      setCookie(cookie.slice(1))
    }else if(numberRandom===2){
      setEgg(egg.slice(1))
    }else if(numberRandom===3){
      setFrog(frog.slice(1))
    }
  }

  return (
  <div className="page">
    <Header/>
    <main className="page">
     <Board />
     
      <section>
        <button className="dice" onClick={rollDice}>Lanzar Dado</button>
        <div className="game-status">{status}</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
        
    </div>
  )
}

export default App;



