import { Link } from "react-router-dom";

const Header = () => {
  return (
   <>
    <header >
      <div className="py-12 flex-grow-3 absolute bg-fixed bg-black w-full sm:hidden lg:flex md:flex hidden ">
        <Link to='/'><p className="text-white text-xl ml-12 font-semibold hover:text-red-500">Let's meet!</p></Link>
        <Link to='/Experience'><p className="text-white text-xl ml-12 font-semibold hover:text-yellow-200">My Experience</p></Link>
        <Link to='/Projects'><p className="text-white text-xl ml-12 font-semibold hover:text-yellow-200">Works</p></Link>
        <Link to='/Contact'><p className="text-white text-xl ml-12 font-semibold hover:text-red-500">Let's work together</p></Link>
      </div>
    </header>
   </>
  )
}

export default Header;