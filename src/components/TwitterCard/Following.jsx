import { useState } from 'react';
import './Following.css';
// eslint-disable-next-line react/prop-types
export const Following = ({name, username = "unknow", initialFollowing}) => {

  const [following, setFollowing] = useState(initialFollowing);
  const textBtn = following ? 'Not To Follow' : 'Following';
  const buttonClassName = following 
    ? 'following-cta is-following' 
    : 'following-cta'

  const handleFollowing = ()=>{
    setFollowing(!following);
  }

  return (
    <div className="card__user">
      <section className="user__info">
        <img src={`https://unavatar.io/${username}`} alt="" className='avatar'/>
        <div className="info">
          <strong className="info__name">
            {name}
          </strong>
          <span className="info__userName">
          @{username}
          </span>
        </div>
      </section>
      <section className="user__following">
        <button className={buttonClassName} onClick={handleFollowing}>
          <span className='follow-text'>{textBtn}</span>
          <span className='stopFollow-text'>Dejar d seguir</span>
        </button>
      </section>
    </div>
  )
}