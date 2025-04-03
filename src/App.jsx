import { useState } from 'react'
import './App.css'
import Scoreboard from './Scoreboard';
import Playground from './Playground';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsArray, setCardsArray] = useState([1, 2, 3, 4, 5, 6]);

  function shuffleArray() {
    let currentIndex = cardsArray.length;
    while(currentIndex) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cardsArray[currentIndex], cardsArray[randomIndex]] = [cardsArray[randomIndex], cardsArray[currentIndex]]        
    }
    console.log(cardsArray);
    const newArray = [];
    cardsArray.map((item) => {
      newArray.push(item);
    })
    setCardsArray(newArray);

    // console.log("s-a intamplat shuffle si cardsArray arata asa")
    // console.log(cardsArray);
  }

  return (
    <div id='container'>
      <div id='title-and-scoreboard'>
        <h1>Memory card game</h1>
        <Scoreboard
          currentScore={currentScore}
          bestScore={bestScore}
        />
      </div>
      <Playground
        setCurrentScore={setCurrentScore}
        setBestScore={setBestScore}
        shuffleArray={shuffleArray}
        cardsArray={cardsArray}
      />
    </div>
  )
}

export default App
