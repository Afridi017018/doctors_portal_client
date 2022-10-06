import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>

<Routes>

<Route path="/" element={<Home />} />
<Route path="/appointment" element={<Appointment />} />
<Route path="/dashboard/appointment" element={<Dashboard />} />

</Routes>

    </BrowserRouter>
  );
}

export default App;
