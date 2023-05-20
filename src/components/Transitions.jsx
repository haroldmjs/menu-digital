import React, { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

const duration = 500

const Opacity = ({ render, children }) => {
  const [opacity, setOpacity] = useSpring(() => ({
    from: { opacity: 0 },
    config: { duration }
  }))

  useEffect(() => {
    if (render) {
      setOpacity({
        to: { opacity: 1 }
      })
    }

    return () => {
      setOpacity({
        from: { opacity: 0 }
      })
    }
  }, [render])
  return (
    <animated.div style={{ ...opacity }}>
      {React.cloneElement(children, {
        className: children.props.className ? children.props.className + ' absolute bottom-0' : 'absolute bottom-0'
      })}
    </animated.div>
  )
}

const DownUp = ({ render, children }) => {
  const [positionX, setPositionX] = useSpring(() => ({
    from: { y: '100%' },
    config: { duration }
  }))
  const [opacity, setOpacity] = useSpring(() => ({
    from: { opacity: 0, display: 'none' },
    config: { duration }
  }))

  useEffect(() => {
    if (render) {
      setPositionX({
        to: { y: '0%' }
      })
      setOpacity({
        to: { opacity: 1, display: 'block' }
      })
    }

    return () => {
      setPositionX({
        from: { y: '100%' }
      })
      setOpacity({
        from: { opacity: 0, display: 'none' }
      })
    }
  }, [render])
  return (
    <>
      <animated.div style={{ ...positionX }} className='fixed h-full w-full bg-white z-10 ease-out bottom-0 md:bg-black/0'>
        {React.cloneElement(children, {
          className: children.props.className ? children.props.className + '' : ''
        })}
      </animated.div>
      <animated.div style={{ ...opacity }} className='fixed h-full w-full bg-black/50 ease-out top-0' />
    </>
  )
}

export { DownUp }
