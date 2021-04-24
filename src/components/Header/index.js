import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-scroll'
import Typical from 'react-typical'
import 'react-lazy-load-image-component/src/effects/blur.css'

import useStartAnimation from '../../Hooks/useStartAnimation'
import Button from '../Button'

const Header = ({ data }) => {
  const animated = useStartAnimation()
  const transition = (duration) => `transition duration-${duration} ease-in-out`
  const styleTranslate = 'translate-y-10 opacity-0'

  return (
    <div
      id='header'
      className='min-h-screen flex items-center justify-center'
      style={{ background: '#091c29' }}
    >
      <div className='w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between'>
        <div className='w-full md:w-2/5'>
          <LazyLoadImage
            src={data.img}
            effect='blur'
            className={`w-full mx-auto`}
            placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
          />
        </div>
        <div className='text-white font-dosis w-full text-center md:text-left md:w-3/5'>
          <h2
            className={`text-3xl md:text-4xl lg:text-6xl text-white font-bold transform ${
              animated ? 'translate-y-0' : styleTranslate
            }  ${transition(2000)} `}
          >
            {data.text[0]}
            <br />
            {data.text[1]}
          </h2>
          <h1
            className={`text-2xl md:text-4xl text-gray-400 transform ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3000)} `}
          >
            {data.text[2]}
            <Typical
              steps={data.typical}
              loop={Infinity}
              className='inline-block'
              wrapper='p'
            />
          </h1>

          <Link to='mystack' smooth={true}>
            <Button text='Discover More'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
