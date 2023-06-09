import React from 'react';
import './App.css';

function App() {
  const [turn, setTurn] = React.useState("X");
  const [cells, setCells] = React.useState(Array.from({ length: 9 }).fill(""));
  const [winner, setWinner] = React.useState("");

  const checkForWinner = (sq) => {

    const allCells = {
      cross: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ],

      vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ],

      diagonal: [
        [0, 4, 8],
        [2, 4, 6]
      ]
    }

    for (var sides in allCells) {
      allCells[sides].forEach(item => {
        if (sq[item[0]] === "" && sq[item[1] === "" && sq[item[2]] === ""]) {

        } else if (sq[item[0]] === sq[item[1]] && sq[item[1]] === sq[item[2]]) {
          setWinner(sq[item[0]]);
        }
      })
    }
  };

  const restartGame = () => {
    setWinner(null);
    setCells(Array.from({ length: 9 }).fill(""));
  }

  const handleClick = (position) => {

    if (cells[position] !== "") {
      alert("already clicked");
      return
    }

    const squares = [...cells];

    if (turn === "X") {
      setTurn("O")
      squares[position] = "X"
    } else {
      setTurn("X");
      squares[position] = "O"
    }

    checkForWinner(squares);

    setCells(squares);
  };

  const Cells = ({ position }) => {
    return <div onClick={() => handleClick(position)} className="cells">{cells[position]}</div>
  }


  return (
    <div className="App">
      <section>
        <h2>Turn: {turn}</h2>
        {
          winner && (
            <div>
              <p>{winner} - is win!</p>
              <button onClick={restartGame}>Restart</button>
            </div>
          )
        }
        <div className='cells_inline'>
          {Array.from({ length: 9 }).map((el, i) => <Cells key={i} position={i} />)}
        </div>
      </section>
    </div>
  );
}

export default App;