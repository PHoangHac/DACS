import React from 'react';
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import '../components/styles.scss';

const Banner = () => {
  return (
    <div id='slider'>
    <figure>
        <img src={slider1} alt="slider" />
        <img src={slider2} alt="slider" />
        <img src={slider1} alt="slider" />
        <img src={slider2} alt="slider" />
        <img src={slider1} alt="slider" />
    </figure>
</div>
  )
}

export default Banner;