import APV from '../assets/projects/APV.png'
import CarS from '../assets/projects/CarSearch.png'
import Clients from '../assets/projects/ClientCRM.png'
import Crypto from '../assets/projects/Crypto.png'
import imageSearch from '../assets/projects/ImageSearch.png'
import presupuesto from '../assets/projects/Presupuesto.png'
import Recipes from '../assets/projects/RecipeSearch.png'
import Romanoff from '../assets/projects/Romanoff.png'
import { Link } from 'react-router-dom'
import DropdownButton from './DropdownButton'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const MyProjects = () => {
 


  return (
    <>
    <div className='lg:hidden md:hidden sm:block text-center '>
      <DropdownButton/>
      </div>
    <div className="py-36">    
        <h1 className="text-emerald-300 text-3xl font-bold text-center underline mb-4 sm:animate-bounce animate-bounce lg:animate-none md:animate-none" data-aos="fade-right">My works</h1>
        
       
        <p className="text-white text-xl text-center"data-aos="fade-up">Observe by yourself the projects in which I've worked, how they are developed and navigate a little in them</p>
      </div>
      <p className='text-white text-center mb-4 text-lg font-semibold' data-aos="fade-right">Profesional development:</p>

    <div className="flex justify-center sm:flex sm:justify-center md:flex md:justify-center lg:p-6 mb-20" data-aos="fade-right">
      
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-5 md:grid-cols-2 sm:grid-cols-1">
          <div className="bg-gray-800 lg:w-80 lg:h-auto rounded-lg p-2 md:w-80 md:h-auto sm:w-96 sm:h-auto w-96 h-auto">
              <div className=" w-auto h-44 rounded-lg">
                <img src={Romanoff} alt="APV" className='h-full' />
              </div>
              <p className="text-white p-2">Description: A landing page that in turn is a business portfolio for the company Romanoff Group, developed with the MERN stack</p>
              <Link to='www.romanofgroupcr.com'><p className="text-white p-2">Visit the site:<span className='text-white p-2 hover:text-red-500'></span>www.romanoffcr.com</p></Link>
            </div>
        </div>
    </div>

      <p className='text-white text-center mb-4 text-lg font-semibold'data-aos="fade-right">Personal development:</p>
    <div className="flex justify-center "data-aos="fade-right">
      
     <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-5 md:grid-cols-2 sm:grid-cols-1 lg:p-4 "data-aos="fade-right">
        <div className="bg-gray-800 lg:w-80 lg:h-auto rounded-lg p-2 md:w-80 md:h-auto sm:w-96 sm:h-auto w-96 h-auto">
            <div className=" w-auto h-44 rounded-lg ">
              <img src={APV} alt="APV" className=' h-44' />
            </div>
            <p className="text-white p-2">Description: An appointment manager for a veterinary with a functional and practical CRUD</p>
            <Link to='https://cute-churros-86af32.netlify.app'><p className="text-white p-2">Visit the site: <span className="text-white p-2 hover:text-red-500"> click me to see APV.app</span></p></Link>
          </div>

          <div className="bg-gray-800  lg:w-80 lg:h-auto rounded-lg p-3 md:w-80 md:h-auto sm:w-96 sm:h-auto w-96 h-auto"data-aos="fade-right">
            <div className=" w-auto h-44 rounded-lg">
            <img src={CarS} alt="APV" className='h-full' />
            </div>
            <p className="text-white p-2">Description: This project filters the search for a vehicle  based on different conditions in real time</p>
            <Link to='https://chic-crumble-44c27d.netlify.app'><p className="text-white p-2">Visit the site: <span className="text-white p-2 hover:text-red-500"> click me to see VahicleSearch.app</span></p></Link>
          </div>

          <div className="bg-gray-800  lg:w-80 lg:h-auto rounded-lg p-3 md:w-80 md:h-auto sm:w-96 sm:h-auto w-96 h-auto"data-aos="fade-right">
            <div className=" w-auto h-44 rounded-lg">
              <img src={Clients} alt="APV" className='h-full' />
            </div>
            <p className="text-white p-2">Description: This site is a small CRM to manage clients, with a functional CRUD, built with Indexed-DB</p>
            <Link to='https://dainty-youtiao-4a987a.netlify.app'><p className="text-white p-2">Visit the site: <span className="text-white p-2 hover:text-red-500"> click me to see ClientCRM.app</span></p></Link>
          </div>

          <div className="bg-gray-800  lg:w-80 lg:h-auto rounded-lg p-3 md:w-80 md:h-auto sm:w-96 sm:h-auto w-96 h-auto"data-aos="fade-right">
            <div className=" w-auto h-44 rounded-lg">
            <img src={Crypto} alt="APV" className='h-full' />
            </div>
            <p className="text-white p-2">Description: This project is a cryptocurrency quote with a simple and friendly design, consuming a Crypto API</p>
            <Link to='https://roaring-hotteok-f7cd0f.netlify.app'><p className="text-white p-2">Visit the site: <span className="text-white p-2 hover:text-red-500"> click me to see CryptoAnalize.app</span></p></Link>
          </div>

          <div className="bg-gray-800  lg:w-80 lg:h-auto rounded-lg p-3 md:w-80 md:h-auto sm:w-96 sm:h-auto w-96 h-auto"data-aos="fade-right">
            <div className=" w-auto h-44 rounded-lg">
            <img src={imageSearch} alt="APV" className='h-full' />
            </div>
            <p className="text-white p-2">Description: This site is an image search engine, consuming PIXABAY API services and generator methods to create a pagination in the app.</p>
            <Link to='https://creative-duckanoo-b50242.netlify.app'><p className="text-white p-2">Visit the site: <span className="text-white p-2 hover:text-red-500"> click me to see ImageSearch.app</span></p></Link>
          </div>

          <div className="bg-gray-800  lg:w-80 lg:h-auto rounded-lg p-3 md:w-80 md:h-auto sm:w-96 sm:h-auto w-96 h-auto"data-aos="fade-right">
            <div className=" w-auto h-44 rounded-lg">
            <img src={presupuesto} alt="APV" className='h-full' />
            </div>
            <p className="text-white p-2">Description: This app is a budget calculator that takes into account the expenses that a person has, with expense warnings and budget updates in real time.</p>
            <Link to='https://lively-cascaron-b9be22.netlify.app'><p className="text-white p-2">Visit the site: <span className="text-white p-2 hover:text-red-500"> click me to see 
            BudgetCalc.app</span></p></Link>
          </div>

          <div className="bg-gray-800  lg:w-80 lg:h-auto rounded-lg p-3 md:w-80 md:h-auto sm:w-96 sm:h-auto w-96 h-auto"data-aos="fade-right">
            <div className=" w-auto h-44 rounded-lg">
            <img src={Recipes} alt="APV" className='h-full' />
            </div>
            <p className="text-white p-2">Description: This catalog of recipes allows you to search for recipes, see their preparation and general information, consuming a public recipe API, with functionality to save and delete from "favorites"</p>
            <Link to='https://cool-cat-4430f2.netlify.app'><p className="text-white p-2">Visit the site: <span className="text-white p-2 hover:text-red-500"> click me to see 
            RecipeCatalog.app</span></p></Link>
          </div>
        </div>
     </div>
    </>
  )
}

export default MyProjects;