import React, { useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';

import './Dashboard.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';

const Dashboard = () => {

    const [selectedDate , setSelectedDate] = useState(new Date())
    const [appointment,setAppointment] = useState([]);

    const handleChange =date=>{
        setSelectedDate(date)
    //    console.log(date)
       
    }
useEffect(()=>{
    fetch("http://localhost:5000/appointments",{
        method: "POST",
        headers:{"content-type" : "application/json"},
        body: JSON.stringify({selectedDate})
       })
       .then(res=>res.json())
       .then(data=>{
        setAppointment(data)
       })
},[selectedDate])

    return (
        <div className='row'>
            <div className="col-md-2 col-sm-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5 col-sm-5">
            <Calendar onChange={handleChange} value={new Date()} />
            </div>
            <div className="col-md-5 col-sm-5">
            <AppointmentsByDate appointments={appointment}></AppointmentsByDate>
            </div>
            
        </div>
    );
};

export default Dashboard;