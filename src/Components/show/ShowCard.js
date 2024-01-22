import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ShowCard({id, name , img, summary, onStarClick, isStarred}) {
    const shortSummary = summary?`${summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, '')}...` : 'No Description';
  return (

        <Card className='card' sx={{ width: 210 }}>
				<CardMedia
					sx={{width:210, height: 295}}
					image={img}
					title={name}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
                    {name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
                    {shortSummary}
					</Typography>
				</CardContent>
				<CardActions className='action-btn'>
					<Button className='btn-hov' size='small'><Link to={`/show/${id}`}>Read more</Link></Button>
					<Button className='btn-hov' size='small' onClick={onStarClick}><span className="fa fa-star " style={{color: isStarred ? '#fdfd3b': 'grey', fontSize: '20px'}} ></span> </Button>
				</CardActions>
			</Card>

        // {/* <div>            
        // <img src={img} alt="actor" />
        // </div>
        // <h1>{name}</h1>
        // <p>{shortSummary}</p>
        // <div>
        //     <Link to={`/sjow/${id}`}>Read more</Link>
        //     <button type='button'>Star me</button>
        // </div> */}
  )
}
