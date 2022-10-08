import React, { useState } from 'react';
import { useEffect } from 'react';
import Statistic from '../Statistic/Statistic';

const DashboardMainTotal = () => {
    const [allData , setAllData] = useState([])
    const [loading, setLoading] = useState(true);
    const [allPatients , setAllPatients] = useState([]);
    //console.log(allPatients)
    let count =0
    const [todaysAppCnt , setTodaysAppCnt] = useState(count)
   /// console.log(todaysAppCnt)

    const date = new Date()
  const formatedDate =date.getFullYear() + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0" + (date.getDate()-1)).slice(-2) 
   
    useEffect(()=>{
        fetch("http://localhost:5000/getAllData")
        .then(res=>res.json())
        .then(data=>{
          setAllData(data)
          
          function isEqual(value) {
            const valuee =value.slice(0,10)
           
             if(valuee===formatedDate){count++; setTodaysAppCnt(count)}
        
            
          }
          
          allData.map(num=> isEqual(num.date))

          ///const unique = new Set();
        //   const set = new Map();
          if(allData.length){
            let uniqueObjArray = [...new Map(allData.map((item) => [item.email,item])).values()];
            // for(const index of allData){
            //     unique.add({
            //         name: index.name
                   
                    
            //     })
            // }
            ///console.log(uniqueObjArray)
            setAllPatients(uniqueObjArray)
          }
          
          
          
        
        setLoading(false)

        })
    },[allData.length])

    if(loading)
    return

    return (
        <div className='d-flex'>
            <Statistic classToAdd="bg-danger" title="Pending Appointments" count="0"></Statistic>
            <Statistic classToAdd="bg-success" title="Today’s Appointments" count={todaysAppCnt}></Statistic>
            <Statistic classToAdd="bg-info" title="Total Appointments" count={allData.length}></Statistic>
            <Statistic classToAdd="bg-warning" title="Total  Patients" count={allPatients.length}></Statistic>
            
        </div>
    );
};

export default DashboardMainTotal;