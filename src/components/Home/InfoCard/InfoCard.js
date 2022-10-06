import React from 'react';

import {AiFillInfoCircle} from 'react-icons/ai';
import './InfoCard.css'

const InfoCard = ({information}) => {
    ///console.log(information)
    
    return (
        <div className='col-md-4 info-card'>
           <div className= {`d-flex justify-content-center info-container info-${information.background}`} >
           <div className='me-4'>
             <AiFillInfoCircle className='info-icon'/>
            </div>
            <div className='text-white'>
                <h6>{information.title}</h6>
                <small>{information.description}</small>
            </div>

           </div>
        </div>
    );
};

export default InfoCard;