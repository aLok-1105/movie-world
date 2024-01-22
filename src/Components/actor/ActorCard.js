import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ActorCard({name, gender, img, birth, country}) {

    return (
    <div>
    <Card className='card' sx={{ width: 210, height: 467 }}>
				<CardMedia
					sx={{width:210, height: 295}}
					image={img}
					title={name}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
                    {name} {gender ? (`(${gender})`) : null}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
                    {country ? (`Comes from ${country}`) : "No Country known" }
					</Typography>
                    <Typography variant='body2' color='text.secondary'>
                    {birth ? `(Born on ${birth})` : null}
					</Typography>
				</CardContent>
				
			</Card>
        {/* <div>
            <img src={img} alt="actor" /> 
        </div>
        <h1>{name} {gender ? (`(${gender})`) : null}</h1>
        <p>{country ? (`Comes from ${country}`) : "No Country known" }</p>
        <p>{birth ? `(Born on ${birth})` : null}</p> */}
    </div>
  )
}
