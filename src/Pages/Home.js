/** @format */

import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
import { apiGet } from '../misc/config';
import ShowGrid from '../Components/show/ShowGrid';
import ActorGrid from '../Components/actor/ActorGrid';

export default function Home() {
	const [input, setInput] = useState('');
	const [results, setResults] = useState([]);
	const [radioButton, setRadioButton] = useState('shows');

	const isShowChecked = radioButton === 'shows';

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	const onSearch = () => {
		apiGet(`/search/${radioButton}?q=${input}`).then((result) => {
			setResults(result);
		});

		// fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(res=>res.json()).then(result => {
		//     setResults(result);
		//     console.log(result);
		// })
	};

	const handleKeyDown = (event) => {
		if (event.keyCode === 13) {
			onSearch();
		}
	};

	const showResults = () => {
		if (results && results.length === 0) {
			return <div className='no-result'>No Results</div>;
		}
		if (results && results.length > 0) {
			return (
				<div>
					{results[0].show ? (
						<ShowGrid data={results} />
					) : (
						<ActorGrid data={results} />
					)}
				</div>
			);
		}

		return null;
	};

	const handleRadioChange = (event) => {
		setRadioButton(event.target.value);
	};

	return (
		<MainPageLayout>
			<div className='search-bar'>
				<input
					placeholder='Search'
					type='text'
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					value={input}
					className='search-input'
				/>

				<button
					type='button'
					className='search-button'
					onClick={onSearch}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='#fff'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='feather feather-search'>
						<circle cx='11' cy='11' r='8' />
						<line x1='21' y1='21' x2='16.65' y2='16.65' />
					</svg>
				</button>
			</div>
			<div className='checkbox'>
				<label
					htmlFor='shows'
					style={{
						fontWeight: isShowChecked ? 'bold' : 'normal',
						color: isShowChecked ? 'red' : 'black',
					}}
					className={`radio-label ${
						isShowChecked ? 'checked' : ''
					}`}>
					<input
						id='shows'
						checked={isShowChecked}
						type='radio'
						value='shows'
						onChange={handleRadioChange}
					/>
					Shows
				</label>
				<label
					htmlFor='actors'
					style={{
						fontWeight: !isShowChecked ? 'bold' : 'normal',
						color: !isShowChecked ? 'red' : 'black',
					}}
					className={`radio-label ${
						!isShowChecked ? 'checked' : ''
					}`}>
					<input
						id='actors'
						checked={!isShowChecked}
						type='radio'
						value='people'
						onChange={handleRadioChange}
					/>
					Actors
				</label>
			</div>

			{showResults()}
		</MainPageLayout>
	);
}
