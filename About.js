import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/Images/img2.webp';
import Common from './Common';

const About=()=>{
  return(
     <>
        <Common
        name='Learn new and inovative things with'
        imgsrc={web}
        visit='/contact'
        btname='Contact Now'/>
     </>
);
}

export default About;