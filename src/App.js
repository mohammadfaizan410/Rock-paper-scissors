import './App.css';
import Header from './components/header/header';
import Button from './components/button';
import RulesModal from './components/modals/rules-modal';
import React from 'react';
import Stage1 from './components/stage-1/stage-1';
import Stage2 from './components/stage-2/stage-2';
import { useState } from 'react';

function App() {

  const [rulesModal, setRulesModal] = useState(false);
  const [gameStage, setGameStage] = useState(1);
  const [myPick, setMyPick] = useState(null);
  const [compPick, setCompPick] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(JSON.parse(localStorage.getItem("score")) || 0);
  return (
    <div className="App">
      <Header score={score} />
      <Button text="Rules" action={() => setRulesModal(true)} />
      {gameStage === 1 && <div className="background-triangle-stage-1"></div>}
      {
        rulesModal &&
        <RulesModal closeAction={() => setRulesModal(false)} />
      }
      {
        gameStage === 1 && <Stage1 pickAction={(value) => {
          let randArray = ["rock", "paper", "scissor"];
            setMyPick(value);
            setGameStage(gameStage + 1);
            setTimeout(() => {
              const newCompPick =
                randArray[Math.floor(Math.random() * randArray.length)];
              setCompPick(newCompPick);
              checkResult(value, newCompPick);
            }, 2000);

        } } />
      }

      {
        gameStage === 2 && <Stage2  gameStage={gameStage} myPick={myPick} compPick={compPick} result={result} restart={() => {
          setGameStage(1)
          setMyPick(null)
          setCompPick(null)
          setResult(null)
        }} />
      }

    </div>
  );

  function checkResult(playerPick, compPickFromFunc) {
    let newScore = score; // Copy the current score
  
    if (playerPick === compPickFromFunc) {
      setResult("Draw");
    } else if (playerPick === "rock" && compPickFromFunc === "paper") {
      setResult("You Lose");
      if (newScore > 0) {
        newScore -= 1;
      }
    } else if (playerPick === "rock" && compPickFromFunc === "scissor") {
      setResult("You Win");
      newScore += 1;
    } else if (playerPick === "paper" && compPickFromFunc === "rock") {
      setResult("You Win");
      newScore += 1;
    } else if (playerPick === "paper" && compPickFromFunc === "scissor") {
      setResult("You Lose");
      if (newScore > 0) {
        newScore -= 1;
      }
    } else if (playerPick === "scissor" && compPickFromFunc === "rock") {
      setResult("You Lose");
      if (newScore > 0) {
        newScore -= 1;
      }
    } else if (playerPick === "scissor" && compPickFromFunc === "paper") {
      setResult("You Win");
      newScore += 1;
    }
    setScore(newScore);
    localStorage.setItem("score", newScore);
  }
};

export default App;
