import React, { useEffect, useState } from 'react';
import {API_KEY, IMAGE_URL} from '../Constants/Constants'
import axios from '../../axios'
import math from 'math';

import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
      console.log(response.data.results[0])
      const responses = response.data.results[math.floor(math.random()*response.data.results.length)];
      setMovie(responses)
    })
  }, []) 
  

  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ''}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi neque nobis ipsa alias odio incidunt laboriosam tempore aliquid doloremque, reprehenderit culpa nam consectetur placeat dolorem, amet, similique rerum tempora esse.</h1>
      </div>

      <div className="fade_bottom">

      </div>

    </div>
  )
}

export default Banner
