import { useState } from "react";
 import enviarEmail from "../helpers/EmailSend";
 import AOS from 'aos';
import 'aos/dist/aos.css';
import DropdownButton from "./DropdownButton";
AOS.init();
const FormContact = () => {


  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

 

   const handleSubmit = (e) => {
     e.preventDefault();
     if ([name,email,message].includes('')) {
      alert('All fields are required');
      return;
    }
     enviarEmail({name,email,message});

     setName(''); 
     setEmail('');
     setMessage('');
  
   alert('Email sent successfully')
   };

  return (
   <>
   <div className='lg:hidden md:hidden sm:block text-center '>
      <DropdownButton/>
      </div>
    <div className="py-32 justify-center items-center" >
      <p className="text-emerald-300 text-3xl font-bold underline text-center mb-8"data-aos='fade-right'>Let's do amazing things together!</p>
      <p className="text-white text-2xl font-semibold text-center"data-aos='fade-right'>Got a question or proposal, or just want to say hello? Go ahead.</p>
    </div>
    

    <div className="justify-center flex mb-16"data-aos='fade-right'>
    <form className=" lg:w-2/4 mb-1 md:w-4/5 sm:w-full p-6 " onSubmit={handleSubmit} >
      <div className="flex gap-4">
    <div className="mb-5 w-full ">
            <label htmlFor="name"
            className="lg:font-bold text-white uppercase lg:text-lg md:text-lg sm:text-lg text-xs font-semibold"
            >Name:</label>
            <input 
            id="name"
            name="user_name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 mt-2 placeholder-white border-2 rounded-md bg-black text-white placeholder:text-xs lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-lg "
            value={name}
            onChange={e=>setName(e.target.value)}
            
            />
        </div>
        <div className="mb-5 w-full ">
            <label htmlFor="Email"
            className="lg:font-bold text-white uppercase lg:text-lg md:text-lg sm:text-lg text-xs font-semibold"
            >Email address:</label>
            <input 
            id="subject"
            name="user_email"
            type="text"
            placeholder="Enter your mail address"
            className="w-full p-2 mt-2 placeholder-white border-2 rounded-md bg-black text-white placeholder:text-xs lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-lg"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
        </div>
        </div>
        <div className="mb-5 w-full ">
            <label htmlFor="message"
            className="lg:font-bold text-white uppercase lg:text-lg md:text-lg sm:text-lg text-xs font-semibold"
            >message:</label>
            <textarea 
            id="message"
            name="message"
            type="text"
            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            className="w-full p-2 mt-2 placeholder-white border-2 rounded-md bg-black text-white resize-none h-20 lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-lg placeholder:text-xs"
            value={message}
            onChange={e=>setMessage(e.target.value)}
            />
        </div>

        <input type="submit"
        value='Send'
        className="w-full p-3 text-xl font-bold text-black uppercase transition-colors rounded-md shadow-sm cursor-pointer bg-emerald-300 hover:bg-emerald-600 text-center" ></input>
    </form>
    </div>
   </>
  )
}
export default FormContact
