import React from 'react';
import Header from '../Images/Head.webp';
import '../CSS/Home.css';

const Home=()=>{
return(
    <>
        <div className='mainSection'>
            <div className='contentBox'>
            <h1>A</h1>
            <h2>spectacular turn of events</h2>
            </div>
            <div className='imgContainer'>
            <img src={Header} alt='Header'/>
            </div>

        </div>
    
    
    </>
)
}
export default Home;
  
