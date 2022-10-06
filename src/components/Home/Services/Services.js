import React from 'react';

import fluoride from "../../../asset/images/fluoride.png"
import cavity from "../../../asset/images/cavity.png"
import whitening from "../../../asset/images/whitening.png"
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData =[
    {
        name:"Fluoride Treatment",
        img: fluoride
    },

    {
        name:"Cavity Filling",
        img: cavity
    },

    {
        name:"Teeth Whitening",
        img: whitening
    }
]

const Services = () => {
    return (
       <section>
       <div className='text-center'>
       <h5 style={{color:'#1CC7C1'}}>
            Our Services
        </h5>
        <h2>
            Services We Provide
        </h2>
       </div>

       <div className='d-flex justify-content-center'>
            <div className='w-75 row'>
            {
                serviceData.map((service,id)=> <ServiceDetail key={id} service={service}></ServiceDetail> )
                
            }
            </div>
        </div>

       </section>
    );
};

export default Services;