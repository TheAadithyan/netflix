import React from 'react';
import './Banner.css'

function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
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
