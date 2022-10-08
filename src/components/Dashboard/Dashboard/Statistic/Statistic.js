import React from 'react';


const Statistic = (props) => {
    
    
    

    return (
        <div className='col-md-3 pe-2 pt-3 pb-4'>
             
         <div className={"d-flex align-items-center rounded p-3  px-4 " + props.classToAdd}>
            <h1 className='w-25 me-4'>{props.count}</h1>
            <h4>{props.title}</h4>
         </div>
            
        </div>
    );
};

export default Statistic;