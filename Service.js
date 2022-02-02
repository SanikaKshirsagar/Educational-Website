import React from 'react';
import Card from './Card';


const Service=()=>{
  return(
    <>
      <div className='wrapper'>

        <Card
        img='https://mintbook.com/assetsNew/img/animated5.gif'
        title='Web Development'/>

        <Card
        img='https://lucsoninfotech.com/wp-content/uploads/2020/12/Mobile-app-development.gif'
        title='Android Development'/>

        <Card
        img='https://digitalcreativemind.com/wp-content/uploads/2021/06/Analytics_amp_Data_Science.gif'
        title='Data Science'/>

        <Card
        img='https://matlensilver.com/wp-content/uploads/2021/07/new.gif'
        title='Artificial intelligance'/>

        <Card
        img='https://i.pinimg.com/originals/a5/87/eb/a587eb698ff69dad5eff5935acc171e8.gif'
        title='Machine Learning'/>

        <Card
        img='https://devtechnosys.com/insights/wp-content/uploads/2020/09/software-development-gif.gif'
        title='Software Development'/>

        <Card
        img='https://i.pinimg.com/originals/00/6b/27/006b2787627b0b67bb91d9716d6e5058.gif'
        title='Digital Marketing'/>

        <Card
        img='http://ibazaar.net/image/cache/catalog/Robo3-Dobi-Pro-Intelligent-Humanoid-Voice-Control-Dance-Tell-Story-Multifunction-Smart-RC-Robot-US-V-1443098-7292-1000x1000.gif'
        title='Robotics'/>


      </div>
    </>
  );
}

export default Service;