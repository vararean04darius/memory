import { useState, useEffect } from 'react'
import './App.css'
import Scoreboard from './Scoreboard';
import Playground from './Playground';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsArray, setCardsArray] = useState([
    {name:'bombardino crocodilo', index: 1, url:'', checked: false}, 
    {name:'trippi troppi', index: 2, url:'', checked: false},
    {name:'tung tung tung sahur', index: 3, url:'', checked: false},
    {name:'tralalero tralala', index: 4, url:'', checked: false},
    {name:'trulimero trulicina', index: 5, url:'', checked: false},
    {name:'bombombini gusini', index: 6, url:'', checked: false},
    {name:'brr brr patapim', index: 7, url:'', checked: false},
    {name:'bobritto bandito', index: 8, url:'', checked: false},
    {name:'frigo camelo', index: 9, url:'', checked: false},
    {name:'chimpanzini bananini', index: 10, url:'', checked: false},
    {name:'penguino cocosino', index: 11, url:'', checked: false},
    {name:'lirili larila', index: 12, url:'', checked: false},
  ]);

  useEffect(() => {
    fetch("https://api.imgur.com/3/image/AhAidlx")
      .then(response => {
        if(!response.ok) {
          throw new Error('Response was not ok, imgur might be down');
        }
        return response.json();
      })
      .then(result => console.log(result))
      .catch(error => console.log('Error:', error));

  }, [])

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
