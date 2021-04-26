import useStartAnimation from '../../Hooks/useStartAnimation'

const Button = ({ text, url }) => {
  const animated = useStartAnimation()
  const transition = (duration) => `transition duration-${duration} ease-in-out`
  const styleTranslate = 'translate-y-10 opacity-0'

  return (
    <div
      className={` animate-bounce bg-indigo-500 py-3 w-48 text-lg uppercase text-white rounded-lg my-10 hover:bg-indigo-300 transform focus:outline-none mx-auto md:mx-0  ${
        animated ? 'translate-y-0' : styleTranslate
      } ${transition(3500)}`}
    >
      <a className='flex justify-center cursor-pointer' href={url}>
        {text}
      </a>
    </div>
  )
}

export default Button
