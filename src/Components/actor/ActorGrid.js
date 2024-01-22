/** @format */

import React from 'react';
import ActorCard from './ActorCard';

import IMG_NOT_FOUND from '../../images/not-found-sm.jpg';

export default function ActorGrid({ data }) {

	return (
		<div className='flex-grid' >
			{data.map(({ person }) => {
				return(
					<div className='show-card'>
					<ActorCard
					className='card'
					key={person.id}
					id={person.id}
					name={person.name}
					gender={person.gender}
					img={
						person.image ? person.image.medium : IMG_NOT_FOUND
					}
					birth={person.birthday}
					country={person.country ? person.country.name : null}
				/>
				</div>
				)
			})}
		</div>
	);
}
