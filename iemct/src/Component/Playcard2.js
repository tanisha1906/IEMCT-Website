import React from 'react';
import Event1 from '../Images/Event1.jpeg';
import Event2 from '../Images/Event2.jpeg';
import Event4 from '../Images/Event4.jpeg';
import '../CSS/Playcard2.css';


const Playcard2=()=>{
return(
    <>
        <div className='firstSection'>
        <div className='eventcard1'>
                <img src={Event2} alt='Event1' className='Event1-img'></img>
                <div className='Event1-Content'>
                    <h3>EVENT 4</h3>
                    <p>Events happen in our daily life. Event will be held in every country, either formal or informal event. Usually event held for celebrating something, for example, birthday celebration, wedding celebration, and other ceremony. </p>
                    <div className='btn'>
                        <p>Read more...</p>
                    </div>
                </div>
            </div>
            <div className='eventcard2'>
                <img src={Event4} alt='Event2' className='Event2-img'></img>
                <div className='Event2-Content'>
                    <h3>EVENT 5</h3>
                    <p>Events happen in our daily life. Event will be held in every country, either formal or informal event. Usually event held for celebrating something, for example, birthday celebration, wedding celebration, and other ceremony. </p>
                    <div className='btn'>
                        <p>Read more...</p>
                    </div>
                </div>
            </div>
            <div className='eventcard3'>
                <img src={Event1} alt='Event3' className='Event3-img'></img>
                <div className='Event3-Content'>
                    <h3>EVENT 6</h3>
                    <p>Events happen in our daily life. Event will be held in every country, either formal or informal event. Usually event held for celebrating something, for example, birthday celebration, wedding celebration, and other ceremony. </p>
                    <div className='btn'>
                        <p>Read more...</p>
                    </div>
                </div>
            </div>
            <div className='eventcard4'>
                <img src={Event4} alt='Event2' className='Event4-img'></img>
                <div className='Event2-Content'>
                    <h3>EVENT 7</h3>
                    <p>Events happen in our daily life. Event will be held in every country, either formal or informal event. Usually event held for celebrating something, for example, birthday celebration, wedding celebration, and other ceremony. </p>
                    <div className='btn'>
                        <p>Read more...</p>
                    </div>
                </div>
            </div>
            <div className='eventcard5'>
                <img src={Event2} alt='Event3' className='Event5-img'></img>
                <div className='Event3-Content'>
                    <h3>EVENT 8</h3>
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
export default Playcard2;