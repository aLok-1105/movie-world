/** @format */

import React from 'react';
import ShowCard from './ShowCard';


import IMG_NOT_FOUND from '../../images/not-found-sm.jpg';
export default function ShowGrid({ data }) {
	// console.log(data);




	return (
		<div className='flex-grid'>
			{data.map(({ show }) => {
					return (
						
							<div key={show.id} className='show-card' >
						
						<ShowCard
						className='card'
						key={show.id}
						id={show.id}
						name={show.name}
						img={
							show.image
								? show.image.medium
								: IMG_NOT_FOUND
						}
						summary={show.summary ? show.summary : null}
					/>
					</div>

					)
			})}
		</div>
	);
};
