import React from 'react';
import InfoCard from '../InfoCard/InfoCard';


const infosData =[
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: '',
        background: 'primary'
    },

    {
        title: 'Visit Our Location',
        description: 'BROOKLYN NY 10003 USA',
        icon: '',
        background: 'dark'
    },

    {
        title: 'Call us now',
        description: '+1562783954',
        icon: '',
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='w-75 row'>
            {
                infosData.map((info,id)=> <InfoCard key={id} information ={info}></InfoCard> )
                
            }
            </div>
        </section>
    );
};

export default BusinessInfo;