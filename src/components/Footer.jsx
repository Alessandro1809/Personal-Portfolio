import { Link } from "react-router-dom";
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Footer = () => {
  return (
    <>
    <footer className="p-2 bg-black lg:p-14 md:p-14 sm:p-14">
      <div className="grid gap-12 lg:flex md:flex sm:flex">
        <div className="flex-row">
         <Link to='Contact'> <p className="font-semibold text-white lg:text-xl md:text-xl sm:text-xl hover:text-red-500">Contact me</p></Link>
         <Link to='https://mail.google.com/mail/u/0/#inbox'><p className="font-semibold text-white lg:text-lg md:text-lg sm:text-lg hover:text-emerald-400">Email: alessandrodevdg@gmail.com</p></Link>
         <p className="font-semibold text-white lg:text-lg md:text-lg sm:text-lg hover:text-emerald-400">Phone: +506 87439888</p>
         </div>

        <div>
        <p className="mb-2 font-semibold text-center text-white lg:text-lg md:text-lg sm:text-lg ">Follow and find me in:</p>
        
        <div className="flex gap-6">
          <Link to='https://instagram.com/this._is_.ale?igshid=ZDc4ODBmNjlmNQ=='><img src={instagram} alt="IG"/> <p className="text-2xl text-center text-white lg:text-lg md:text-lg">IG</p></Link>
         <Link to='https://www.linkedin.com/in/alessandro-diaz'> <img src={linkedin} alt="IN" /> <p className="text-2xl text-center text-white lg:text-lg md:text-lg">IN</p></Link>
          <Link to='https://github.com/Alessandro1809'><img src={github} alt="GH"/><p className="text-xl text-center text-white lg:text-lg md:text-lg">GH</p></Link>
          </div>
        </div>
      </div>
     
    </footer>
    </>
  )
}

export default Footer;