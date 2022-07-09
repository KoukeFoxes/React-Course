import React from 'react';
import Dice from './Dice';

import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [DiceArray, setDiceArray] = React.useState(allNewDice());
  const [DiceElements, setDiceElements] = React.useState([]);
  const [win, isWin] = React.useState(false)

  React.useEffect(() => {
    console.log("useEffect...");
    setDiceElements(DiceArray.map(dice => <Dice 
      key={dice.key} 
      id={dice.id}
      value={dice.value} 
      isHeld={dice.isHeld} 
      isClicked={HoldDice}
    />));

    //check whether all the dice are same number and held
    console.log("win " + checkWin())
    
    // eslint-disable-next-line
  },[DiceArray])

  function checkWin(){
    let firstValue = DiceArray[0].value
    // DiceArray.forEach(dice => {
    //   console.log(dice.isHeld)
    //   if(!dice.isHeld || dice.value !== checkNum)
    //     win = false
    // })
    let win = DiceArray.every(dice => dice.value === firstValue && dice.isHeld)
    isWin(win)
    return win
  }

  function HoldDice(eventID) {
    if(!win){
      console.log(eventID + ' is held');
      setDiceArray(diceArr => (diceArr.map(dice => ({
        ...dice,
        isHeld: (eventID === dice.id) ? !dice.isHeld : dice.isHeld
      }))))
    }
  }

  function allNewDice(){
    let tempArray = [];
    for (let i = 0; i < 10; i++) {
      tempArray.push(
      {
        id: nanoid(),
        key: i,
        value: Math.round(Math.random() * 6),
        isHeld: false,
      });
    }
    return tempArray;
  }

  function rollDice(){

    console.log("Rolling dice...");
    if(!win){
      setDiceArray(diceArr => (diceArr.map(dice => ({
        ...dice,
        value: dice.isHeld ? dice.value : Math.round(Math.random() * 6)
      }))))
    }else{
      setDiceArray(allNewDice())
      isWin(false)
    }
    
  }

  return (
    <main className="App">
      <h2 className="Title">Tenzies</h2>
      <span className="Subtitle">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</span>
    <div className='DiceContainer'>
      {DiceElements}
    </div>
      <button className="RollButton" onClick={rollDice}>
        <span className='RollButtonText'>{win ? "New Game" : "Roll"}</span>
      </button>
      {win && <Confetti
        numberOfPieces={900}
        recycle={false}
        tweenDuration={30000}
      />}
    </main>
    
  );
}

export default App;
