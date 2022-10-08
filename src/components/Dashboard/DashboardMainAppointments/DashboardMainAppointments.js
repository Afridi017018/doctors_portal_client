import React, { useEffect, useState } from 'react';

const DashboardMainAppointments = () => {

    const [allData , setAllData] = useState([])
    let number=1

    useEffect(()=>{
        fetch("http://localhost:5000/getAllData")
        .then(res=>res.json())
        .then(data=>{
            setAllData(data)
            console.log(data)
        })
        
    },[allData.length])


    return (
        <div className='bg-white'>
           <table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Sr No.</th>
      <th scope="col">Date</th>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>

{
  
  allData.map(mp=> <tr >
    <th scope="row">{number++}</th>
    <td>{mp.date}</td>
    <td>{mp.name}</td>
    <td>{mp.phone}</td>
    <td></td>
    
  </tr>)
}


   
    
  </tbody>
</table>
        </div>
    );
};

export default DashboardMainAppointments;