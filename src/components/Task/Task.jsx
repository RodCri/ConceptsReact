import './Task.css'
// eslint-disable-next-line react/prop-types
export const Task = ({complete, children}) => {
  
  const className = `item ${complete ? 'is-completed' : 'not-completed'}`
  const taskComplete = `${complete ? '🧡' : '💚'}`;
  return (
    <span className={className}>
        {children} <span className='icon'>{taskComplete}</span>
    </span>
  )
}
