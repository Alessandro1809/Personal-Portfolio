import foto from '../assets/portfolio.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import DropdownButton from './DropdownButton';
AOS.init();
const PersonalInfo = () => {
  return (
    <>
      <div className='lg:hidden md:hidden sm:block text-center '>
      <DropdownButton/>
      </div>
      <div className='grid grid-flow-col gap-2 md:gap-4 lg:gap-96' >
        <h1 className=" text-white text-3xl font-bold lg:ml-20 md:ml-20 sm:ml-20 lg:mt-80 md:mt-80 sm:mt-80 mt-20 ml-2 mb-10"data-aos='fade-right'>Alessandro Díaz</h1>
        <img src={foto} alt="presentation image" className='w-80 h-auto rounded-full border-4 mt-40 sm:block md:block lg:block hidden'data-aos='fade-right'/>
      </div>

      <img src={foto} alt="presentation image" className='w-72 px-4 h-auto rounded-full sm:hidden md:hidden lg:hidden p-3'data-aos='fade-right'/>

        <div className="lg:ml-20 md:ml-20 sm:ml-20 ml-2">
            <p className="text-2xl font-bold text-white" data-aos='fade-up'>I'm dedicated to Frontend development specialized in
                <span className="text-2xl font-bold text-emerald-400"> React </span> 
                and the  
                <span className="text-2xl font-bold text-cyan-400"> MERN</span> stack
            </p>
        </div>

        <div className="py-12 lg:px-20 md:px-20 sm:px-20 px-2 ml-2 mr-2" data-aos='fade-up'>
          <p className="text-lg font-semibold text-white">Hi i'm  a frontend <span className="text-xl font-bold text-emerald-400"> React </span> developer. I have experience and skills in the development of dynamic and attractive user interfaces.
          A solid command of <span className="text-xl font-bold text-rose-400"> HTTML </span>, <span className="text-xl font-bold text-cyan-600"> CSS </span> and <span className="text-xl font-bold text-yellow-200"> JavaScript </span>, and the <span className="text-xl font-bold text-emerald-400"> React </span> library are the key to creating dynamic and user friendly interfaces. Do you want that in your app? Go ahead contact me!</p>
        </div>

        <div className="grid lg:grid-flow-col lg:justify-center text-justify gap-4 md:grid-flow-row md:justify-center h-auto w-auto" data-aos='fade-right'>
       
          <div className="py-6 px-2 ml-2 mr-2 bg-gray-500 rounded-xl lg:w-96 lg:h-80 md:w-96 md:h-80 sm:w-96 sm:h-80  h-auto border-4 border-b-emerald-600 border-l-emerald-500 border-r-emerald-400 border-t-emerald-300"data-aos='zoom-in-right'>
            <p className="lg:text-3xl md:text-3xl sm:text-3xl text-xl font-bold text-emerald-400 text-center">DESIGN</p>
            <p className="text-black lg:text-xl md:text-xl sm:text-xl font-semibold py-2">I'm probably not a common interface designer, I like to work in the modern and dynamic that the <span className="lg:text-xl md:text-xl sm:text-xl font-bold text-cyan-400"> MERN</span> stack offers with my own or very original designs, always ready for challenges.</p>
          </div>
        
          <div className="py-6 px-2 ml-2 mr-2 bg-gray-500 rounded-xl lg:w-96 lg:h-80 md:w-96 md:h-80 sm:w-96 sm:h-80  h-auto mb-10 border-4 border-b-emerald-600 border-l-emerald-500 border-r-emerald-400 border-t-emerald-300"data-aos='zoom-in-right'>
            <p className="tlg:text-3xl md:text-3xl sm:text-3xl text-xl  font-bold text-emerald-400 text-center">ENGINEERING</p>
            <p className="text-black lg:text-xl md:text-xl sm:text-xl font-semibold py-2">I'm building <span className="lg:text-xl md:text-xl sm:text-xl font-bold text-yellow-200"> JavaScript </span> applications integrated with <span className="lg:text-xl md:text-xl sm:text-xl font-bold text-green-400"> Mongo DB </span>, <span className="lg:text-xl md:text-xl sm:text-xl font-bold text-yellow-400"> Express </span> and  <span className="text-xl font-bold text-green-500"> Node js </span> for the backend, and <span className="lg:text-xl md:text-xl sm:text-xl font-bold text-emerald-400"> React </span>  + <span className="lg:text-xl md:text-xl sm:text-xl font-bold text-cyan-200"> TailwindCSS</span>, I'm equipped with just the right tools and bring resilient solutions with <span className="lg:text-xl md:text-xl sm:text-xl font-bold text-cyan-400"> MERN</span> stack</p>
          </div>
        </div>

            <div className='flex justify-center mt-10'data-aos='fade-right'>
              <div className="h-auto w-3/4 rounded-md bg-gradient-to-r  from-purple-500 via-cyan-500 to-green-500 p-1">
                <div className="flex h-full w-full items-center justify-center bg-black back">
                <div className="justify-center items-center text-center ">
                <p className='text-white text-xl p-4'>As Alejandro Taboada Sánchez from ATS programming once said: <span className='text-yellow-200 text-xl'>"If you can imagine it, you can program it"</span>, let's make the unimaginable happen</p>
                </div>
                </div>
              </div>
            </div>

            
        
    </>
  )
}

export default PersonalInfo;