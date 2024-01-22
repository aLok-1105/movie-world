/** @format */

import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';
import ShowMainData from '../Components/show/ShowMainData';
import Details from '../Components/show/Details';
import Seasons from '../Components/show/Seasons';
import Cast from '../Components/show/Cast';
import BookinForm from '../Components/BookinForm';
import { Button } from '@mui/material';

const reducer = (prevState, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS': {
			return { isLoading: false, error: null, show: action.show };
		}

		case 'FETCH_FAILED': {
			return { ...prevState, isLoading: false, error: action.error };
		}
		default:
			return prevState;
	}
};

const initialState = {
	show: null,
	isLoading: true,
	error: null,
};


export default function Show() {

	

	const { id } = useParams();

	const [{ show, isLoading, error }, dispatch] = useReducer(
		reducer,
		initialState
	);

	// const [show, setShow] = useState(null);
	// const [isLoading, setIsLoading] = useState(true);
	// const [error, setError] = useState(null);

	useEffect(() => {
		let isMounted = true;

		apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
			.then((results) => {
				if (isMounted) {
					dispatch({ type: 'FETCH_SUCCESS', show: results });

					// setShow(results);
					// setIsLoading(false);
				}
			})
			.catch((err) => {
				if (isMounted) {
					dispatch({
						type: 'FETCH_FAILURE',
						error: err.message,
					});
				}
			});

		return () => {
			isMounted = false;
		};
	}, [id]);


	const [form, setForm] = useState(false);

	// console.log((form));
	// const Form = ()=>{
	// 	return (
	// 		<>
	// 			<BookingForm/>
	// 		</>
	// 	)
	// }
	
	

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error is: {error}</div>;
	}
	return (
		<div style={{padding: '10px'}}>
			<ShowMainData
				img={show.image}
				name={show.name}
				rating={show.rating}
				summary={show.summary}
				tags={show.genres}
			/>
			<div>
				<button className = 'book-ticket-button'  onClick = {()=>setForm((true))}>Book Ticket</button>
				{form && <BookinForm movieName = {show.name} form = {setForm}/>}
			</div>
			<div>
				<h2>Details</h2>
				<Details status={show.status} network={show.network} premiered={show.premiered} />
			</div>
			<div>
				<h2>Seasons</h2>
				<Seasons seasons={show._embedded.seasons} />
			</div>
			<div>
				<h2>Cast</h2>
				<Cast cast={show._embedded.cast} />
			</div>
		</div>
	);
}
