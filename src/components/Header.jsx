import { Link } from "react-router-dom";

const Header = () => {
  return (
   <>
    <header >
      <div className="absolute hidden w-full py-12 flex-grow-3 sm:hidden lg:flex md:flex">
        <Link to='/'><p className="ml-12 text-xl font-semibold text-white hover:text-red-500">Let's meet!</p></Link>
        <Link to='/Experience'><p className="ml-12 text-xl font-semibold text-white hover:text-red-500">My Experience</p></Link>
        <Link to='/Projects'><p className="ml-12 text-xl font-semibold text-white hover:text-red-500">Works</p></Link>
        <Link to='/Contact'><p className="ml-12 text-xl font-semibold text-white hover:text-red-500">Let's work together</p></Link>
      </div>
    </header>
   </>
  )
}

export default Header;