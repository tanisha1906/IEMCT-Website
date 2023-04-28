import React from 'react';
import Header from '../Images/Header.jpeg';
import '../CSS/Event1.css';

const Event1=()=>{
return(
    <>
        <div className='first-Section1'>
            <div className='content1'>
            <div className='Heading1'><h2>EVENT 1</h2></div>
            <p>Events happen in our daily life. Event will be held in every country, either formal or informal event. Usually event held for celebrating something, for example, birthday celebration, wedding celebration, and other ceremony. 

The two stories, “The Lesson” and “Everyday Use” involve main characters that hold differences and similarities. In both stories the main characters were well educated, African American woman. During Toni Cade Bambara’s story “The Lesson”, the main character Miss Moore used her education to help the children in her hometown.</p>
            </div>
            <div className='imgContainer'>
            <img src={Header} alt='Header'/>
            </div>

        </div>
    
    
    </>
)
}
export default Event1;