const Burger = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      className='h-10 w-10 text-indigo-500 hover:text-indigo-400 cursor-pointer sm:hidden rounded-md'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  )
}

export default Burger
