import propTypes from 'prop-types';
import { useState } from 'react';
import './Target.css';

// eslint-disable-next-line react/prop-types
export const Target = ({name, userId, description, contratado}) => {

  const [active, setActive] = useState(contratado);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className='card'>
      <div className="card__info">
        <h1 className='info__name'>{name}</h1>
        <p className='info__id'>{userId}</p>
      </div>
      <p className="card__description">{description}</p>
      <button 
        onClick={handleActive} 
        className={`info__btn ${active ? 'active' : 'disable'}`}>
        {active ? '❌': '✔'}
      </button>
      {/* {contratado && <h1>Verificado</h1>} */}
    </div>
  );
}


Target.propTypes = {
  name: propTypes.string.isRequired,
  userId: propTypes.number,
  description: propTypes.string
};

Target.defaultProps = {
  name: '@user',
  userId: 1,
  description: 'desc@user',
  contratado: true
};