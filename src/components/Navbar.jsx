import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="appleImg"  width={14} height={18}/>

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map(nav => (
            <Link key={nav.title} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'  to={nav.path}>
              {nav.title}
            </Link>
          ))}
          <Link
            to={'/gsap'}
          >
          </Link>
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt="searchImg" />
          <img src={bagImg} alt="bagImg" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar