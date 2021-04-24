import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Stack = ({data}) => {
  return (
    <div
      id='mystack'
      className='min-h-screen flex items-center justify-center flex-col'
      style={{
        background: '#eee',
      }}
    >
      <h1 className='text-5xl font-dosis font-bold mb-10'>Stack I Use</h1>
      <div>
        <div className='flex flex-wrap justify-center'>
          {data.tech.map((tech, index) => (
            <span
              key={index}
              className={` h-40 w-40 bg-white shadow-xl  ml-2 mb-6  rounded-full flex justify-center items-center p-5 m-2 ${
                index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
              }`}
            >
              <LazyLoadImage
                effect='blur'
                src={tech.img}
                alt={tech.alt}
                className='h-24'
              />
            </span>
          ))}
        </div>
      </div>
      <p className='mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis '>
        {data.desc}.
      </p>
    </div>
  )
}

export default Stack
