import React, {useEffect, useState} from 'react';
import axios from '../../axios';
import {API_KEY, imageUrl} from '../Constants/Constants';
import './RowPost.css';

function RowPost(props) {
  const [Movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(`discover/movie?api_key=${API_KEY}&with_genres=28`).then((response) => {
      console.log(response);
      setMovie(response.data.results);
    })
  }, [])

  return (
    <div className="row" >
      <h2>{props.title}</h2>
      <div className='posters'>
        {Movie.map((obj) => 
                <img className={props.isSmall ? "smallPoster" : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
              ) }
            </div>
    </div>
  )
}

export default RowPost
