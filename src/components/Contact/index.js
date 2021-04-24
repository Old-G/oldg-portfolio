import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import useWindowPosition from '../../Hooks/useWindowPosition'
import Button from '../Button'

const Contact = ({ data }) => {
  const animated = useWindowPosition('header', 0.6, 4)

  if (data) {
    var networks = data.socials.map((network) => {
      return (
        <li key={network.alt}>
          <a href={network.url}>
            <LazyLoadImage
              effect='blur'
              className='m-2'
              width='50px'
              key={network.alt}
              src={network.img}
              alt={network.alt}
            />
          </a>
        </li>
      )
    })
  }

  return (
    <div
      className=' min-h-screen  flex justify-center items-center  '
      id='mycontact'
    >
      <div
        style={{
          minHeight: '50vh',
          background: '#091C29',
        }}
        className='w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center'
      >
        <LazyLoadImage
          effect='blur'
          src={data.img}
          placeholderSrc={data.imgPlaceholder}
          alt='profile'
          width='300px'
          className='mt-10 transtion duration-2000 ease-in-out mx-auto'
        />
        <div className='font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000'>
          <h1
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 text-white text-5xl font-bold`}
          >
            {data.title}
          </h1>
          <p
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 text-white text-2xl`}
          >
            {data.desc}
          </p>
          <div
            className={`flex ${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 `}
          >
            <ul className='flex space-x-2 mt-2'>{networks}</ul>
          </div>
          <Button
            text='Download CV'
            url='https://drive.google.com/file/d/1nIBMm1ysUMdygA-4d_c7wTtqRY8m0w6x/view?usp=sharing'
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
