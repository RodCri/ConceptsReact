import Square from "./Square"
import './Board.css';
import { useState } from "react";
import { TURNS } from "./Constants/constants";
import { checkWinnerFrom } from "./Utils/board";
import { WinnerModal } from "./WinnerModal";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  // null no hay ganador y false hay un empate
  const [winner, setWinner] = useState(null);
 
  const resetGame = () =>{
    // Seteamos los estados iniciales
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  const checkEndGame = (newBoard) =>{
    // Verificamos que se lleno el tablero
    return newBoard.every((square) => square!== null)
  }

  const updateBoard = (index) =>{
    //Verificamos si la posicio ya tiene algo
    if(board[index] || winner) return

    //Actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Calcular el nuevo turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      // Verificamos si exite empate
      setWinner(false);
    }
  }

  const flag = () =>{}

  return (
    <div className="container__tic">
      <h2 className="title_tic">Tic Tac Toe</h2>
      <div className="board">
        {
          board.map((square, index) =>{
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </div>
      <section className="turn">
        <Square isSelected={turn === TURNS.X} updateBoard={flag}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} updateBoard={flag}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame}/>
      <footer className="footer">
        <button onClick={resetGame} className="footer__reset">Empezar de nuevo</button>
      </footer>
    </div>
  )
}

export default Board