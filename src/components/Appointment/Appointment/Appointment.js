import React, { useState } from 'react';
import Footer from '../../Home/Shared/Footer/Footer';
import Navbar from '../../Home/Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {

const [selectedDate , seSelectedDate] = useState(new Date())

    const handleChange =date=>{
        seSelectedDate(date)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleChange={handleChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;