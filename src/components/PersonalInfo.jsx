import foto from '../assets/presentacion.jpeg'
import skull from '../assets/skull.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import DropdownButton from './DropdownButton';
AOS.init();
const PersonalInfo = () => {
  return (
    <>
      <div className=" bg-[url('./assets/wave4.svg')] bg-no-repeat h-full bg-w-screen bg-red-900">
      <div className='text-center lg:hidden md:hidden sm:block '>
      <DropdownButton/>
      </div>
   
      <div className='grid grid-flow-col gap-2 md:gap-4 lg:gap-96' >
       <h1 className="mt-20 mb-10 ml-2 text-4xl font-bold text-white lg:ml-20 md:ml-20 sm:ml-10 lg:mt-38 md:mt-80 sm:mt-80 lg:text-5xl"data-aos='fade-right'>Alessandro Díaz</h1> 
        <img src={foto} alt="presentation image" className='hidden h-auto mt-40 border-4 rounded-full w-72 sm:block md:block lg:block'data-aos='fade-right'/>
      </div>
      
      <img src={foto} alt="presentation image" className='h-auto p-3 px-4 rounded-full w-72 sm:hidden md:hidden lg:hidden'data-aos='fade-right'/>

        <div className="mb-4 ml-2 lg:ml-20 md:ml-20 sm:ml-20 sm:mb-20 sm:mt-10">
            <p className="text-3xl font-bold text-white" data-aos='fade-up'>I'm dedicated to Frontend development specialized in
                <span className="text-3xl font-bold text-violet-500"> React </span> 
                and the  
                <span className="text-3xl font-bold text-violet-500"> MERN</span> stack
            </p>
        </div>

        <div className="px-2 py-12 mb-16 ml-2 mr-2 border-4 border-white sm:border-white md:border-white bg-slate-900 lg:px-20 md:px-20 sm:px-4 sm:bg-slate-900 opacity-90 sm:p-2 sm:border-4 md:bg-slate-900 lg:bg-transparent lg:border-none" data-aos='fade-up'>
          <p className="text-lg font-semibold text-white">Hi i'm  a frontend <span className="text-xl font-bold text-violet-500"> React </span> developer. I have experience and skills in the development of dynamic and attractive user interfaces.
          A solid command of <span className="text-xl font-bold text-rose-500"> HTTML </span>, <span className="text-xl font-bold text-cyan-400"> CSS </span> and <span className="text-xl font-bold text-yellow-200"> JavaScript </span>, and the <span className="text-xl font-bold text-violet-500"> React </span> library are the key to creating dynamic and user friendly interfaces. Do you want that in your app? Go ahead contact me!</p>
        </div>

        <div className="grid w-auto h-auto gap-4 text-justify lg:grid-flow-col lg:justify-center md:grid-flow-row md:justify-center sm:justify-center" data-aos='fade-right'>
          <div className='container2' data-aos='zoom-in-right'>
          <div className="h-auto px-2 py-6 ml-2 mr-2 bg-red-500 border-4 backdrop-blur bg-white/50 rounded-xl lg:w-96 lg:h-80 md:w-96 md:h-80 sm:w-96 sm:h-80 border-b-red-600 border-l-red-500 border-r-red-400 border-t-red-300 "data-aos='zoom-in-right'>
            <p className="text-xl font-bold text-center text-red-900 lg:text-3xl md:text-3xl sm:text-3xl">DESIGN</p>
            <p className="py-2 font-semibold text-black lg:text-xl md:text-xl sm:text-xl">I'm probably not a common interface designer, I like to work in the modern and dynamic that the <span className="font-bold text-violet-900 lg:text-xl md:text-xl sm:text-xl"> MERN</span> stack offers with my own or very original designs, always ready for challenges.</p>
          </div>
          </div>
          <div className='container' data-aos='zoom-in-right'>
          <div className="h-auto px-2 py-6 mb-10 ml-2 mr-2 bg-red-500 border-4 rounded-xl lg:w-96 lg:h-80 md:w-96 md:h-80 sm:w-96 sm:h-80 border-b-red-600 border-l-red-500 border-r-red-400 border-t-red-300 backdrop-blur bg-white/50"data-aos='zoom-in-right'>
            <p className="text-xl font-bold text-center text-red-900 tlg:text-3xl md:text-3xl sm:text-3xl">ENGINEERING</p>
            <p className="py-2 font-semibold text-black lg:text-xl md:text-xl sm:text-xl">I'm building <span className="font-bold text-yellow-300 lg:text-xl md:text-xl sm:text-xl"> JavaScript </span> applications integrated with <span className="font-bold text-violet-900 lg:text-xl md:text-xl sm:text-xl"> MongoDB</span>, <span className="font-bold text-violet-900 lg:text-xl md:text-xl sm:text-xl"> Express </span> and  <span className="text-xl font-bold text-violet-900"> Node.js</span> for the backend, and <span className="font-bold text-violet-900 lg:text-xl md:text-xl sm:text-xl"> React </span>  + <span className="font-bold lg:text-xl md:text-xl sm:text-xl text-cyan-400"> TailwindCSS</span>, I'm equipped with just the right tools and bring resilient solutions with <span className="font-bold lg:text-xl md:text-xl sm:text-xl text-violet-900"> MERN</span> stack</p>
          </div>
          </div>
        </div>

            <div className='flex justify-center py-4 mt-10'data-aos='fade-right'>
              <div className="w-3/4 h-auto p-1 rounded-md bg-gradient-to-r from-red-400 via-violet-500 to-yellow-500">
                <div className="flex items-center justify-center w-full h-full bg-black back">
                <div className="items-center justify-center text-center ">
                <p className='p-4 text-xl text-white'>As Alejandro Taboada Sánchez from ATS programming once said: <span className='text-xl text-yellow-200'>"If you can imagine it, you can program it"</span>, let's make the unimaginable happen</p>
                </div>
                </div>
              </div>
            </div>

            </div>
            
    </>
  )
}

export default PersonalInfo;