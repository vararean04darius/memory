import { useState, useEffect } from 'react'
import './App.css'
import Scoreboard from './Scoreboard';
import Playground from './Playground';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsArray, setCardsArray] = useState([
    {name:'bombardino crocodilo', index: 1, url:'https://i.imgur.com/yMQjvSR.jpeg', checked: false}, 
    {name:'trippi troppi', index: 2, url:'https://i.imgur.com/Xk7rHYi.png', checked: false},
    {name:'tung tung tung sahur', index: 3, url:'https://i.imgur.com/AhAidlx.png', checked: false},
    {name:'tralalero tralala', index: 4, url:'https://i.imgur.com/cIaP2sq.png', checked: false},
    {name:'trulimero trulicina', index: 5, url:'https://i.imgur.com/fhUGvRa.png', checked: false},
    {name:'bombombini gusini', index: 6, url:'https://i.imgur.com/dzYqZw6.png', checked: false},
    {name:'brr brr patapim', index: 7, url:'https://i.imgur.com/nLFud8A.png', checked: false},
    {name:'bobritto bandito', index: 8, url:'https://i.imgur.com/S5lZJZz.png', checked: false},
    {name:'frigo camelo', index: 9, url:'https://i.imgur.com/NsCYmvJ.png', checked: false},
    {name:'chimpanzini bananini', index: 10, url:'https://i.imgur.com/Vs4Tzu0.png', checked: false},
    {name:'penguino cocosino', index: 11, url:'https://i.imgur.com/0Phg8LX.png', checked: false},
    {name:'lirili larila', index: 12, url:'https://i.imgur.com/u6itctI.png', checked: false},
  ]);

  function shuffleArray() {
    let currentIndex = cardsArray.length;
    while(currentIndex) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cardsArray[currentIndex], cardsArray[randomIndex]] = [cardsArray[randomIndex], cardsArray[currentIndex]]        
    }
    const newArray = [];
    cardsArray.map((item) => {
      newArray.push(item);
    })
    setCardsArray(newArray);
    console.log(cardsArray);
  }

  function resetCounter() {
    setCurrentScore(0);
    cardsArray.map((elem) => {
      elem.checked = false;
    })
  }

  function checkElement(obj) {
    if(obj.checked === false) {
      obj.checked = true;
      setCurrentScore(currentScore + 1);
    } else {
      if(currentScore > bestScore) {
        setBestScore(currentScore)
      }
      resetCounter();
    }
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
        checkElement={checkElement}
        cardsArray={cardsArray}
      />
    </div>
  )
}

export default App
