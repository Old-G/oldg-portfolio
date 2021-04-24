import useWindowPosition from '../../../../Hooks/useWindowPosition'
// import content from '../../../../content'

const Project = ({ data }) => {
  const animated = useWindowPosition('header', 0.6)

  return (
    <div>
      <h1
        className={` ${
          animated ? '' : 'translate-y-10 opacity-0'
        }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        {data.projectName}
      </h1>
      <p
        className={`${
          animated ? '' : 'translate-y-10 opacity-0'
        }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        {data.desc}
      </p>
      <button
        className={`${
          animated ? '' : 'translate-y-10 opacity-0'
        } transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <img
          src='https://timo.engineer/assets/icons/rocket.svg'
          alt='rocket'
          className='mr-5'
        />
        <p className='text-lg'>Website</p>
      </button>
    </div>
  )
}

export default Project
