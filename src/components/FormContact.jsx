import { useState } from "react";
 import enviarEmail from "../helpers/EmailSend";
 import AOS from 'aos';
import 'aos/dist/aos.css';
import DropdownButton from "./DropdownButton";
import cont from '../assets/ContactDemonpng.png'
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
   <div className="bg-black bg-[url('./assets/wave4.svg')] bg-no-repeat h-full bg-w-full">
   <div className='text-center lg:hidden md:hidden sm:block '>
      <DropdownButton/>
      </div>
    <div className="flex flex-col items-center justify-center pb-0 py-28" >
      <p className="mb-8 text-3xl font-bold text-center text-yellow-300 underline"data-aos='fade-right'>Let's do amazing things together!</p>
      <p className="mb-8 text-2xl font-semibold text-center text-white"data-aos='fade-right'>Got a question or proposal, or just want to say hello? Go ahead.</p>
    
     <img src={cont} className="h-auto w-96" />
     
            
    </div>
    

    <div className="flex justify-center mb-26"data-aos='fade-right'>
    <form className="p-6 mb-1 lg:w-2/4 md:w-4/5 sm:w-full" onSubmit={handleSubmit} >
      <div className="flex gap-4">
    <div className="w-full mb-5 ">
            <label htmlFor="name"
            className="text-xs font-semibold text-white uppercase lg:font-bold lg:text-lg md:text-lg sm:text-lg"
            >Name:</label>
            <input 
            id="name"
            name="user_name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 mt-2 text-white placeholder-white bg-black border-2 rounded-md placeholder:text-xs lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-lg "
            value={name}
            onChange={e=>setName(e.target.value)}
            
            />
        </div>
        <div className="w-full mb-5 ">
            <label htmlFor="Email"
            className="text-xs font-semibold text-white uppercase lg:font-bold lg:text-lg md:text-lg sm:text-lg"
            >Email address:</label>
            <input 
            id="subject"
            name="user_email"
            type="text"
            placeholder="Enter your mail address"
            className="w-full p-2 mt-2 text-white placeholder-white bg-black border-2 rounded-md placeholder:text-xs lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-lg"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
        </div>
        </div>
        <div className="w-full mb-5 ">
            <label htmlFor="message"
            className="text-xs font-semibold text-white uppercase lg:font-bold lg:text-lg md:text-lg sm:text-lg"
            >message:</label>
            <textarea 
            id="message"
            name="message"
            type="text"
            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            className="w-full h-20 p-2 mt-2 text-white placeholder-white bg-black border-2 rounded-md resize-none lg:placeholder:text-lg md:placeholder:text-lg sm:placeholder:text-lg placeholder:text-xs"
            value={message}
            onChange={e=>setMessage(e.target.value)}
            />
        </div>

        <input type="submit"
        value='Send'
        className="w-full p-3 text-xl font-bold text-center text-black uppercase transition-colors bg-red-400 rounded-md shadow-sm cursor-pointer hover:bg-red-600" ></input>
    </form>
    
    </div>
    </div>
   </>
  )
}
export default FormContact
