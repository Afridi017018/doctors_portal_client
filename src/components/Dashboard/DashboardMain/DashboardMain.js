import React from 'react';
import DashboardMainTotal from '../Dashboard/DashboardMainTotal/DashboardMainTotal';
import Statistic from '../Dashboard/Statistic/Statistic';
import DashboardMainAppointments from '../DashboardMainAppointments/DashboardMainAppointments';
import Sidebar from '../Sidebar/Sidebar';

const DashboardMain = () => {
    return (
        <div className='row '>
            <div className="col-md-2 col-sm-2 ">
                <Sidebar></Sidebar>
                </div>
                
            
            <div className="col-md-10 col-sm-10 p-4 p" style={{backgroundColor: "#F0F0F0" , position: "absolute", right:0}} >
            
           <h5>Dashboard</h5>
            <DashboardMainTotal></DashboardMainTotal>
            {/* <Statistic></Statistic> */}
            <div className="text-center pt-5 pb-2">
                <h2>Recent Appointments</h2>
            </div>
            <DashboardMainAppointments></DashboardMainAppointments>

            </div>
            
        </div>
    );
};

export default DashboardMain;