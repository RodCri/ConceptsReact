import './Square.css';
// eslint-disable-next-line react/prop-types
const Square = ({children, updateBoard, index, isSelected}) => {
  
  const className = `square ${isSelected ? 'is-selected' : 'not-selected'}`

  const handleClick = () =>{
    updateBoard(index)
  }
  return (
    <div className={className} onClick={handleClick}>
      <span className="square__content">
        {children}
      </span>
    </div>
  )
}

export default Square