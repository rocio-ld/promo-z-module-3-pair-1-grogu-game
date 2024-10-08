//importar imagenes
import { useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Board from './Board';
import Container from './Container';
import Dice from './Dice';
import Form from './Form';
import GameStatus from './GameStatus';
import { useEffect } from 'react';
import Footer from './Footer';
import Navlink from './Navlink';
import { Route } from 'react-router-dom';




function App() {
//constantes 
const [box,setbox] = useState (0);
const [cookie,setCookie] = useState (['🍪','🍪','🍪']);
const [egg,setEgg] = useState (['🥚','🥚','🥚']);
const [frog,setFrog] = useState (['🐸','🐸','🐸']);
const [status, setStatus]= useState('En curso');
const [name, setName]= useState ('');


const rollDice=()=>{
  let numberRandom = Math.floor(Math.random()*4)+1;
  console.log(numberRandom);
  if(numberRandom===4){
    setbox(box +1)
    setStatus("Grogu ha avanzado una casilla")
  }else if(numberRandom===1){
      setCookie(cookie.slice(1))
      setStatus("Se ha descargado una galleta")
    }else if(numberRandom===2){
      setEgg(egg.slice(1))
      setStatus("Se ha descargado un huevo")
    }else if(numberRandom===3){
      setFrog(frog.slice(1))
      setStatus("Se ha descargado una rana ")
    }
  }
 
 useEffect(() => {
  if (box === 6) {
    setStatus('¡¡Grogu se ha comido el cargamento!! Has perdido');
   }else {
    setStatus('Ganaste, Mando completa la misión');
  }
}, [box]);
  return (
    <div className="page">
      <Header/>

      <Routes>
       < Route path=""></Route>
      </Routes>
      <main className="page">
      <Board box={box} />
      
        <section>
        <Dice rollDice={rollDice}/>
          <GameStatus status={status} name={name}/>
        </section>
      <Container item={cookie}/>
      <Container item={egg}/>
      <Container item={frog}/>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
      <Footer/>
      <Form setName={setName} name={name}/>
     </div>   
  )
}
  export default App;



