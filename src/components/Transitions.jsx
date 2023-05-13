import React, { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

const duration = 600

const DownUp = ({ render, children }) => {
  const [positionX, setPositionX] = useSpring(() => ({
    from: { y: '100%' },
    config: { duration }
  }))

  useEffect(() => {
    if (render) {
      setPositionX({
        to: { y: '0%' }
      })
    }

    return () => {
      setPositionX({
        from: { y: '100%' }
      })
    }
  }, [render])
  return (
    <animated.div style={{ ...positionX }} className='fixed h-full w-full bg-white z-10 ease-out bottom-0'>
      {React.cloneElement(children, {
        className: children.props.className ? children.props.className + '' : ''
      })}
    </animated.div>
  )
}

export { DownUp }
