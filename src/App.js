import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import './App.css';
import logo from './assets/logo.png';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  const myClassName = 
myHistory[myHistory.length - 1] > otherHistory[otherHistory.length - 1] 
? 'Board App-board Board-winner' : 'Board App-board';
  const otherClassName = 
myHistory[myHistory.length - 1] < otherHistory[otherHistory.length - 1] 
? 'Board App-board Board-winner' : 'Board App-board';

  return (
    <div className="App">
      <div>
        <img className='App-logo' src={logo} alt='다이스사진'/>
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button className="App-button" color="blue" onClick={handleRollClick}>
            던지기
          </Button>
          <Button className="App-button" color="red" onClick={handleClearClick}>
            처음부터
          </Button>
        </div>
      </div>
      <div className="App-boards">
        <Board
          name="나"
          color="blue" 
          gameHistory={myHistory}
          className={myClassName}
        />
        <Board 
          name="상대" 
          color="red" 
          gameHistory={otherHistory}
          className={otherClassName}
        />
      </div>
    </div>
  );
}

export default App;
