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
import 'aos/dist/aos.css';
AOS.init();
const MyExperience = () => {
  return (
    <>
        <div className='lg:hidden md:hidden sm:block text-center '>
        <DropdownButton/>
        </div>
        <div className="lg:px-20 md:px-20 lg:py-40 lg:w-3/4 h-auto  py-40">
          <h1 className="text-emerald-400 lg:text-5xl font-semibold px-40 underline text-2xl md:text-4xl" data-aos='fade-right'>Over the years</h1>
          <p className="text-white text-xl lg:ml-36 mt-10 p-6 text-justify" data-aos='fade-right'>I've developed multiple personal and experimental projects throughout my apprenticeship, from 2020 to the present, from small apps with important functionalities and algorithmic complexity to complete crm systems in the <span className="text-xl font-bold text-cyan-400"> MERN</span> stakc, I've learned to handle style frameworks such as <span className="text-xl font-bold text-cyan-200"> TailwindCSSs</span> and <span className="text-xl font-bold text-blue-500"> Bootstrap</span> for build intuitive and attractive applications, worked and shaped complete landing pages, during my apprenticeship I was and still am very self-taught, so I strive to always learn something new and constantly take on development challenges.</p>
        </div>

        <div className=" lg:w-4/3 h-auto grid lg:grid-flow-col-row md:grid-flow-row lg:gap-4 ">
            <div className='mb-12'>
              <h1 className="text-emerald-400 lg:text-3xl font-semibold px-40 underline text-2xl md:text-4xl "data-aos='zoom-in-right'>Companies where I worked</h1>
              <p className="text-white text-xl lg:ml-32 lg:mr-96 mt-10 p-6 text-justify" data-aos='fade-right'>RomanoffGroup - It is a company in charge of offering construction, architecture, interior and exterior design services for prestigious projects, located in Costa Rica, Guanacaste, Playas del Coco, in this company the project and maintenance of its landing page was carried out, 
              <span className='text-cyan-600'> www.Romanoffgroupcr.com</span>, a Landing that required an elaboration in the <span className="text-xl font-bold text-cyan-400"> MERN</span>  stack as it functioned as an exhibition of the projects developed, my work in the company was as a full-stack developer and project manager.</p>
            </div>

            <div data-aos='zoom-in-right'>
              <h1 className="text-emerald-400 lg:text-3xl text-2xl font-semibold px-40 underline md:text-4xl lg">My technology stack:</h1>
              <div className='grid lg:grid-cols-2 justify-center  md:grid-cols-2 md:ml-20'>
              <p className="text-white text-xl lg:ml-40 mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconojs} alt="iconoJS" className='w-10 h-auto rounded-sm animate-pulse'/>- Javascript</p>
              <p className="text-white text-xl  mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconotailwind} alt="iconoTW" className='w-10 h-auto rounded-sm '/>- TailwindCSS</p>
              <p className="text-white text-xl lg:ml-40 mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconoBoot} alt="iconoBoot" className='w-10 h-auto rounded-sm'/>- BootstrapCSS</p>
              <p className="text-white text-xl  mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconoHtml} alt="iconoHtml" className='w-10 h-auto rounded-sm '/>- HTML</p>
              <p className="text-white text-xl lg:ml-40 mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconoReact} alt="iconoJS" className='w-10 h-auto rounded-sm animate-pulse '/>- React</p>
              <p className="text-white text-xl  mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconoNode} alt="iconoJS" className='w-10 h-auto rounded-full animate-pulse '/>- Nodejs</p>
              <p className="text-white text-xl lg:ml-40 mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconoExpress} alt="iconoJS" className='w-10 h-auto rounded-full animate-pulse '/>- Express JS</p>
              <p className="text-white text-xl  mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconoMongo} alt="iconoJS" className='w-10 h-auto rounded-full animate-pulse '/>- Mongo DB</p>
              <p className="text-white text-xl lg:ml-40 mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconoJava} alt="iconoJS" className='w-12 h-auto rounded-full'/>- Java</p>
              <p className="text-white text-xl  mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconoSql} alt="iconoJS" className='w-12 h-auto rounded-full'/>- My SQL</p>
              <p className="text-white text-xl lg:ml-40 mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconoC} alt="iconoJS" className='w-12 h-auto rounded-full'/>- C#</p>
              <p className="text-white text-xl  mt-10 flex gap-2"data-aos='zoom-in-right'> <img src={iconoCSS} alt="iconoJS" className='w-12 h-auto rounded-full'/>- CSS3</p>
              </div>
            </div>
        </div>

      </>
      
  )
}

export default MyExperience;