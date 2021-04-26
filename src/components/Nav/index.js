import { useState } from 'react'
import { Link } from 'react-scroll'
import Burger from './Burger'
import Menu from './Menu'

const Nav = ({ data }) => {
  const [isOpen, isSetOpen] = useState(false)

  const openMenu = () => isSetOpen(!isOpen)

  return (
    <div
      style={{ background: '#091c29' }}
      className=' text-white font-dosis fixed top-0 w-screen z-40'
    >
      <div className=' flex items-center w-10/12 mx-auto py-3 '>
        <Link
          to='header'
          smooth={true}
          className='text-3xl font-bold text-white flex-1 cursor-pointer'
        >
          <h1>
            {data.logo}
            <span className='w-3 h-3 bg-red-500 inline-block ml-2 rounded-sm' />
          </h1>
        </Link>
        <div className='hidden sm:block text-white text-xl'>
          {data.links.map((link, index) => {
            return (
              <Link to={link.to} smooth={true}>
                <span key={index} className='cursor-pointer mr-4'>
                  {link.text}
                </span>
              </Link>
            )
          })}
        </div>
        <Menu data={data} open={isOpen ? 'flex' : 'hidden'} />
        <Burger onClick={openMenu} />
      </div>
    </div>
  )
}

export default Nav
