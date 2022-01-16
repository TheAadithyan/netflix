import React, {useEffect, useState} from 'react';
import axios from '../../axios';
import Youtube from 'react-youtube'
import {API_KEY, imageUrl} from '../Constants/Constants';
import './RowPost.css';

function RowPost(props) {
  const [Movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response);
      setMovie(response.data.results);
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  return (
    <div className="row" >
      <h2>{props.title}</h2>
      <div className='posters'>
        {Movie.map((obj) => 
                <img className={props.isSmall ? "smallPoster" : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
              ) }
            </div>
            <Youtube videoId="2g811Eo7K8U" opts={opts} />
    </div>
  )
}

export default RowPost
