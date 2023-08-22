import iconojs from '../assets/js.png'
import iconotailwind from '../assets/icons8-tailwind-css-100.png'
import iconoBoot from '../assets/Bootstrap.png'
import iconoHtml from '../assets/HTML.png'
import iconoReact from '../assets/react.svg'
import iconoNode from '../assets/nodejslogo.png'
import iconoExpress from '../assets/express.png'
import iconoMongo from '../assets/mongodb.svg'
import iconoJava from '../assets/java.svg'
import iconoSql from '../assets/sql.svg'
import iconoC from '../assets/C.svg'
import iconoCSS from '../assets/CSS.svg'
import DropdownButton from './DropdownButton'
import AOS from 'aos';

AOS.init();
const MyExperience = () => {
  return (
    <>
     <div className="bg-black bg-[url('./assets/wave2.svg')] bg-no-repeat h-full bg-w-full">
        <div className='text-center lg:hidden md:hidden sm:block '>
        <DropdownButton/>
        </div>
        <div className="h-auto py-20 lg:px-20 md:px-20 lg:py-32 lg:w-3/4 sm:py-40 md:py-40">
          <h1 className="px-4 text-3xl font-semibold text-red-500 underline lg:text-5xl lg:px-40 md:px-40 sm:px-40 md:text-4xl" data-aos='fade-right'>Over the years</h1>
          <p className="p-6 mt-10 text-xl text-justify text-white lg:ml-36" data-aos='fade-right'>I've developed multiple personal and experimental projects throughout my apprenticeship, from 2020 to the present, from small apps with important functionalities and algorithmic complexity to complete crm systems in the <span className="text-xl font-bold text-violet-500"> MERN</span> stakc, I've learned to handle style frameworks such as <span className="text-xl font-bold text-violet-500"> TailwindCSSs</span> and <span className="text-xl font-bold text-blue-500"> Bootstrap</span> for build intuitive and attractive applications, worked and shaped complete landing pages, during my apprenticeship I was and still am very self-taught, so I strive to always learn something new and constantly take on development challenges.</p>
        </div>
    {/* terminar de cambiar el my skills para el CV */}
        <div className="grid h-auto lg:w-4/3 lg:grid-flow-col-row md:grid-flow-row lg:gap-4">
            <div className='mb-0 ' >
              <h1 className="w-auto px-2 text-2xl font-semibold text-red-500 underline lg:text-3xl lg:px-40 md:px-40 sm:px-40 md:text-4xl "data-aos='zoom-in-right'>My skills</h1>
              <p className="w-auto h-auto p-3 mt-10 text-justify text-white lg:text-xl md:text-xl sm:text-xl lg:ml-32 lg:mr-96 lg:p-6 md:p-6 sm:p-6" data-aos='fade-right'>I'm a developer with fundamental skills in <span className="text-xl font-bold text-red-400">HTML</span>, <span className='text-xl font-bold text-cyan-400'>CSS</span> and <span className='text-xl font-bold text-yellow-500'>JavaScript</span>, with a strong command of components, their state and their life cycle. Furthermore, I am able to create responsive layouts using Flexbox and Grid, integrate external APIs, collaborate effectively using version control tools, and keep learning in a constantly changing environment. With these capabilities, I can build engaging and interactive interfaces that provide an enhanced user experience in today's digital world.</p>
              
            </div>
                    
            <div className='mb-5' data-aos='zoom-in-right'>
              <h1 className="px-4 text-2xl font-semibold text-yellow-500 underline lg:text-3xl lg:px-40 md:px-40 sm:px-40 md:text-4xl">My technology stack:</h1>
              <div className='grid justify-center lg:grid-cols-2 md:grid-cols-2 md:ml-20'>
              <p className="flex gap-2 mt-10 text-xl text-white lg:ml-40"data-aos='zoom-in-right'> <img src={iconojs} alt="iconoJS" className='w-10 h-auto rounded-sm animate-pulse'/>- Javascript</p>
              <p className="flex gap-2 mt-10 text-xl text-white"data-aos='zoom-in-right'> <img src={iconotailwind} alt="iconoTW" className='w-10 h-auto rounded-sm '/>- TailwindCSS</p>
              <p className="flex gap-2 mt-10 text-xl text-white lg:ml-40"data-aos='zoom-in-right'> <img src={iconoBoot} alt="iconoBoot" className='w-10 h-auto rounded-sm'/>- BootstrapCSS</p>
              <p className="flex gap-2 mt-10 text-xl text-white"data-aos='zoom-in-right'> <img src={iconoHtml} alt="iconoHtml" className='w-10 h-auto rounded-sm '/>- HTML</p>
              <p className="flex gap-2 mt-10 text-xl text-white lg:ml-40"data-aos='zoom-in-right'> <img src={iconoReact} alt="iconoJS" className='w-10 h-auto rounded-sm animate-pulse '/>- React</p>
              <p className="flex gap-2 mt-10 text-xl text-white"data-aos='zoom-in-right'> <img src={iconoNode} alt="iconoJS" className='w-10 h-auto rounded-full animate-pulse '/>- Nodejs</p>
              <p className="flex gap-2 mt-10 text-xl text-white lg:ml-40"data-aos='zoom-in-right'> <img src={iconoExpress} alt="iconoJS" className='w-10 h-auto rounded-full animate-pulse '/>- Express JS</p>
              <p className="flex gap-2 mt-10 text-xl text-white"data-aos='zoom-in-right'> <img src={iconoMongo} alt="iconoJS" className='w-10 h-auto rounded-full animate-pulse '/>- Mongo DB</p>
              <p className="flex gap-2 mt-10 text-xl text-white lg:ml-40"data-aos='zoom-in-right'> <img src={iconoJava} alt="iconoJS" className='w-12 h-auto rounded-full'/>- Java</p>
              <p className="flex gap-2 mt-10 text-xl text-white"data-aos='zoom-in-right'> <img src={iconoSql} alt="iconoJS" className='w-12 h-auto rounded-full'/>- My SQL</p>
              <p className="flex gap-2 mt-10 text-xl text-white lg:ml-40"data-aos='zoom-in-right'> <img src={iconoC} alt="iconoJS" className='w-12 h-auto rounded-full'/>- C#</p>
              <p className="flex gap-2 mt-10 text-xl text-white"data-aos='zoom-in-right'> <img src={iconoCSS} alt="iconoJS" className='w-12 h-auto rounded-full'/>- CSS3</p>
              </div>
            </div>
        </div>
        </div>
      </>
      
  )
}

export default MyExperience;