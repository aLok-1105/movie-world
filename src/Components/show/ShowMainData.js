/** @format */

import React from 'react';

export default function ShowMainData({ img, name, rating, summary, tags }) {

	return (
			<div className='main-data-cont' >
				<div className='main-img-cont'>
					<img className='main-img' src={img.medium} alt='show' />
				</div>
				<div>
					<h1>{name}</h1>
					{rating.average ? <p>Rating: {rating.average}</p>: ''}
					{/* <p> {rating.average? 'Rating': rating.average : ''} Rating: {rating.average}</p> */}
					<p dangerouslySetInnerHTML={{__html: summary}} />
					<p> {tags.map((item)=>(<span className='tags'>{item}</span>))} </p>
				</div>
			</div>

	);
}
