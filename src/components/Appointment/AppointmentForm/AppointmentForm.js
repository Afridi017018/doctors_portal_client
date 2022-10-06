import React from 'react';

import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
};

Modal.setAppElement('#root');



const AppointmentForm = ({modalIsOpen,closeModal,appointmentOn,date}) => {
   const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = data =>{ 
       console.log(data)
        data.service = appointmentOn
        data.date = date
        data.created = new Date()
      //  const {name}= data.target
     
      //   console.log(data.target.input);
      fetch('http://localhost:5000/addAppointment',{
        method : 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(data)
      })
       .then(res=>res.json())
       .then(success=>{
        if(success){
        closeModal();
       
        alert(`Hello ${success.name}! Your appointment created successfully!`)
      }

       })
        ///data.preventDefault();
      }
    
    

    return (
        <div>
        
        <Modal 
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
          <h2 className='text-brand text-center'>{appointmentOn}</h2>
          <p className='text-center'><small className='text-secondary'>on {date.toDateString()}</small></p>

          <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
       
      {/* include validation with required or other standard HTML validation rules */}
      <input className='w-100' type="text" placeholder="Name" {...register("name", { required: true })} />
      {/* errors will return when field validation fails  */}
      <br />
      {errors.name && <span style={{color : "red"}}>This field is required</span>}
      <br />
      <input className='w-100' type="text" placeholder="Address" {...register("address", { required: true })} />
      {/* errors will return when field validation fails  */}
      <br />
      {errors.address && <span style={{color : "red"}}>This field is required</span>}
      <br />

      <input className='w-100' type="text" placeholder="Phone" {...register("phone", { required: true })} />
      {/* errors will return when field validation fails  */}
      <br />
      {errors.phone && <span style={{color : "red"}}>This field is required</span>}

      <br />
      <input className='w-100' type="email" placeholder="Email" {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      <br />
      {errors.email && <span style={{color : "red"}}>This field is required</span>}
      
      <br />

      <div className="col-auto my-1">
 
      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"  defaultValue={''} {...register("gender", { required: true })}>
        <option value="" disabled>Gender...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Others">Others</option>
      </select>
      <br />
      {errors.gender && <span style={{color : "red"}}>This field is required</span>}

    </div>
    <br />


<div className='text-center'><input className='btn-brand' type="submit" /></div>

      
    </form>

        </Modal>
      </div>
    );
};

export default AppointmentForm;