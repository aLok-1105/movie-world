/** @format */

import React from 'react';

export default function Seasons({ seasons }) {
	// console.log(seasons);
	return (
		<div>
			<h4>Seasons in total: {seasons.length}</h4>
			{seasons.map((item, index) => {
				return (
					
                        <div  key={index}>
                        Season: {index+1}<br></br>
						No. of episods: {item.episodeOrder} Aired: <span>{item.premiereDate} to {item.endDate}</span>
                        <br></br>
                        <br></br>
                        </div>
                        
					
				);
			})}
		</div>
	);
}
