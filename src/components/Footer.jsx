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
    <footer className="bg-black p-14"data-aos='fade-right'>
      <div className="flex gap-12">
        <div className="flex-row">
         <Link to='Contact'> <p className="text-white text-xl font-semibold hover:text-red-500">Contact me</p></Link>
         <Link to='https://mail.google.com/mail/u/0/#inbox'><p className="text-white text-lg font-semibold hover:text-emerald-400">Email: alessandrodevdg@gmail.com</p></Link>
         <p className="text-white text-lg font-semibold hover:text-emerald-400">Phone: +506 87439888</p>
         </div>

        <div>
        <p className="text-white text-lg text-center font-semibold mb-2 ">Follow and find me in:</p>
        
        <div className="flex gap-6">
          <Link to='https://instagram.com/this._is_.ale?igshid=ZDc4ODBmNjlmNQ=='><img src={instagram} alt="IG"/> <p className="text-white text-center text-2xl lg:text-lg md:text-lg">IG</p></Link>
         <Link to='https://www.linkedin.com/in/alessandro-diaz'> <img src={linkedin} alt="IN" /> <p className="text-white text-center text-2xl lg:text-lg md:text-lg">IN</p></Link>
          <Link to='https://github.com/Alessandro1809'><img src={github} alt="GH"/><p className="text-white text-center text-xl lg:text-lg md:text-lg">GH</p></Link>
          </div>
      </div>
      </div>
     
    </footer>
    </>
  )
}

export default Footer;