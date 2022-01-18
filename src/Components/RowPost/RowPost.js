import React, {useEffect, useState} from 'react';
import axios from '../../axios';
import Youtube from 'react-youtube'
import {API_KEY, imageUrl} from '../Constants/Constants';
import './RowPost.css';

function RowPost(props) {
  const [Movie, setMovie] = useState([])
  const [urlId, setUrlId] = useState('')
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
  const handleClick = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length!==0) {
        setUrlId(response.data.results[0])        
      }else{
        console.log('Array Empty')
      }
    })
  }


  return (
    <div className="row" >
      <h2>{props.title}</h2>
      <div className='posters'>
        {Movie.map((obj) => 
                <img onClick={() => handleClick(obj.id)}className={props.isSmall ? "smallPoster" : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
              ) }
            </div>
            { urlId && <Youtube videoId={urlId} opts={opts} />}
    </div>
  )
}

export default RowPost
