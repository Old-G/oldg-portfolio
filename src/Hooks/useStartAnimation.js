import { useState, useEffect } from 'react'

const useStartAnimation = () => {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])
  return animated
}

export default useStartAnimation
