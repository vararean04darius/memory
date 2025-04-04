import { useState, useEffect } from 'react'
import './App.css'
import Scoreboard from './Scoreboard';
import Playground from './Playground';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsArray, setCardsArray] = useState([]);

  // [
  //   {name:'crocodilo', index: 1, url:'', checked: false}, 
  //   {name:'bear', index: 2, url:'', checked: false},
  //   {name:'gorilla', index: 3, url:'', checked: false},
  //   {name:'shark', index: 4, url:'', checked: false},
  //   {name:'cat', index: 5, url:'', checked: false},
  //   {name:'goose', index: 6, url:'', checked: false},
  //   {name:'monkey', index: 7, url:'', checked: false},
  //   {name:'capybara', index: 8, url:'', checked: false},
  //   {name:'camel', index: 9, url:'', checked: false},
  //   {name:'chimpanzee', index: 10, url:'', checked: false},
  //   {name:'penguin', index: 11, url:'', checked: false},
  //   {name:'elephant', index: 12, url:'', checked: false},
  // ]

  useEffect(() => {

    const fetchGifs = async () => {
      try {
        const gifs = [
          { name: "crocodilo", id: "l1UGRup7CD99oosxKn" },
          { name: "bear", id: "IThjAlJnD9WNO" },
          { name: "gorilla", id: "iXOoi6i2l9PZvCN0zU" },
          { name: "shark", id: "ORWdUNzeK5FJWDiDW4" },
          { name: "cat", id: "mlvseq9yvZhba" },
          { name: "goose", id: "xT39CZ1aM1WB0dZwOY" },
          { name: "monkey", id: "AngoluFPb3F3G" },
          { name: "capybara", id: "j5w56MxUF6UxhJmarM" },
          { name: "camel", id: "Cxxc1wAHXrY8JLKzGE" },
          { name: "chimpanzee", id: "wn7kFBI4NiT2E" },
          { name: "penguin", id: "daeKl3P4SissU" },
          { name: "elephant", id: "YFCpPS5j8VSXmkKC89" }
        ];

        const apiKey = "1xoNxYi9PHoMU7TJVZiyBgsX8tpxYC2y";
        const baseUrl = "https://api.giphy.com/v1/gifs/";


        const requests = gifs.map(gif =>
          fetch(`${baseUrl}${gif.id}?api_key=${apiKey}&rating=g`)
            .then(res => res.json())
            .then(data => ({
              name: gif.name,
              url: data.data.images.original.url,
              checked: false
            }))
        );

        const results = await Promise.all(requests);
        const finalData = results.map((item, index) => ({
          ...item,
          index: index + 1
        }));

        setCardsArray(finalData);
      } catch (error) {
        console.error("Eroare la fetch:", error);
      }
    };

    fetchGifs();
  }, []);

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
