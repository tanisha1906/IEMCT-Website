import React from 'react';
import Event1 from '../Images/Event1.jpeg';
import Event2 from '../Images/Event2.jpeg';
import '../CSS/Playcard1.css';


const Playcard1=()=>{
return(
    <>
        <div className='firstSection'>
            <div className='contentBox1'>
            <h1>YEAR SNAP SHOTS</h1>
            </div>
            
            <div className='eventCard1'>
                <img src={Event2} alt='Event1' className='Event1-img'></img>
                <div className='Event1-Content'>
                    <h3>EVENT 1</h3>
                    <p>Events happen in our daily life. Event will be held in every country, either formal or informal event. Usually event held for celebrating something, for example, birthday celebration, wedding celebration, and other ceremony. </p>
                    <div className='btn'>
                        <p>Read more...</p>
                    </div>          
                </div>
            </div>
            <div className='eventCard2'>
                <img src={Event1} alt='Event2' className='Event2-img'></img>
                <div className='Event2-Content'>
                    <h3>EVENT 2</h3>
                    <p>Events happen in our daily life. Event will be held in every country, either formal or informal event. Usually event held for celebrating something, for example, birthday celebration, wedding celebration, and other ceremony. </p>
                    <div className='btn'>
                        <p>Read more...</p>
                    </div> 
                </div>
            </div>
            <div className='eventCard3'>
                <img src={Event2} alt='Event3' className='Event3-img'></img>
                <div className='Event3-Content'>
                    <h3>EVENT 3</h3>
                    <p>Events happen in our daily life. Event will be held in every country, either formal or informal event. Usually event held for celebrating something, for example, birthday celebration, wedding celebration, and other ceremony. </p>
                    <div className='btn'>
                        <p>Read more...</p>
                    </div> 
                </div>
            </div>
            
            
        </div>
    
    
    </>
)
}
export default Playcard1;