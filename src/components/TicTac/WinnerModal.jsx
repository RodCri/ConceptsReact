import './WinnerModal.css'
import Square from "./Square"
// eslint-disable-next-line react/prop-types
export function WinnerModal({winner, resetGame}){
  const winnertext = winner === false ? 'Empate' : 'Gano'

  if(winner === null) return null
  return(
    <section className="winner">
      <div className="winner__text">
        <h2 className="result">{winnertext}</h2>
        <header className="win">
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame} className="reset">Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}