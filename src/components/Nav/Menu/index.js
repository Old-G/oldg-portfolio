import { Link } from 'react-scroll'

const Menu = ({ data, open }) => {
  return (
    <div
      className={` ${open} absolute top-0 left-0 flex-col p-16 space-y-8 h-screen bg-indigo-500 text-white text-xl`}
    >
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
  )
}

export default Menu
