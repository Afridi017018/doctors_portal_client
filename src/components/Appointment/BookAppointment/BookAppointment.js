import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: '564df8be57hj469hg53',
        id:1,
        subject:'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },

    {
        _id: '564df8be57hj469hg54',
        id:2,
        subject:'Cosmetic Dentistry',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },

    {
        _id: '564df8be57hj469hg55',
        id:3,
        subject:'Teeth Cleaning',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },

    {
        _id: '564df8be57hj469hg56',
        id:4,
        subject:'Cavity Protection',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },

    {
        _id: '564df8be57hj469hg57',
        id:5,
        subject:'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },

    {
        _id: '564df8be57hj469hg58',
        id:6,
        subject:'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h1 className='text-center text-brand mb-5'>Available Appointments on {date.toDateString()}</h1>
            <div className="row">
                {
                    bookingData.map(booking=> <BookingCard key={booking.id} booking={booking} date={date}></BookingCard> )
                }
            </div>
        </section>
    );
};

export default BookAppointment;