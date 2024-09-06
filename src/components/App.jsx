//importar imagenes
import { useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Board from './Board';



function App() {
//constantes 
const [box,setbox] = useState (0);
const [cookie,setCookie] = useState (['🍪','🍪','🍪']);
const [egg,setegg] = useState (['🥚','🥚','🥚']);
const [frog,setfrog] = useState (['🐸','🐸','🐸']);
const [status, setStatus]= useState('En curso');

  
  return (
  <div className="page">
    <Header/>
    <main className="page">
     <Board />
     
      <section>
        <button className="dice">Lanzar Dado</button>
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



