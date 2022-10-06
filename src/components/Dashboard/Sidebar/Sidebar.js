import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal,faCalendarPlus,faUsers,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {
    return (
        <div className='sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4' style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                <Link to="/" className='dec'><FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span></Link>
                </li>
                <li>
                <Link to="/" className='dec'><FontAwesomeIcon icon={faCalendarPlus} /> <span>Appointments</span></Link>
                </li>
                <li>
                <Link to="/" className='dec'><FontAwesomeIcon icon={faUsers} /> <span>Patients</span></Link>
                </li>
            </ul>

            <div>
                <Link to="/" className="dec"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>

        </div>
    );
};

export default Sidebar;