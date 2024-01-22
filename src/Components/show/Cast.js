import React from 'react'
import IMG_NOT_FOUND from '../../images/not-found-sm.jpg';

export default function Cast({cast}) {
    console.log(cast);
  return (
    <div  className='cast-main-cont'>
        {cast.map((item, index)=>{
            return (
                <div className='cast-sub-cont' key={index}>
                    <div className='cast-cont'>
                        <img className='cast' src={item.person.image? item.person.image.medium : IMG_NOT_FOUND} alt="Not Found" />
                    </div>
                    <div>
                    {item.character.name ? item.character.name : null}
                    </div>
                </div>
            )
        })}
    </div>
  )
}
