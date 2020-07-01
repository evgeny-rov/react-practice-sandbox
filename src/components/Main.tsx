import React from 'react';
import {useSpring, animated} from 'react-spring'

export default () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const calc = (x:number, y:number): any => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x:number, y:number, s:number): any => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  const handlemove = (x:number, y: number) => {
    console.log(x, y)
    set({ xys: calc(x, y) })
  };
      
  return (
    <div className="main">
      <div className="nav-container">
        <ul className="nav-elements">
          <li className="nav-element">home</li>
          <li className="nav-element">about us</li>
          <li className="nav-element">projects</li>
          <li className="nav-element">clients</li>
          <li className="nav-element">contacts</li>
        </ul>
      </div>
      <div className="sidebar">
        <div className="sidebar-info">
          <div className="sidebar-title">Architecture buro</div>
          <div className="line"></div>
        </div>
        <ul className="social-list">
          <li>Ins</li>
          <li>Twi</li>
          <li>Be </li>
          <li>fac</li>
        </ul>
      </div>
      <animated.div 
      className="pages-wrapper"
      onMouseMove={({ clientX: x, clientY: y }) => handlemove(x, y)}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans as any) }}>
        <span className="logo">
          go
          <span className="text-primary">.</span>
          arch
        </span>
        <div className="currentpage">
          <span className="current-number text-primary">01</span>
          <sup>/ 03</sup>
        </div>
        <span className="logo backdrop">go.arch</span>
      </animated.div>
      <div className="content-container">
        <span className="header">concert hall in new york</span>
        <div className="content-info">
          <span className="main-info">Concert Hall is the architecture of a new generation, a building</span>
          <span className="main-info">that exists not only in the dimension of space.</span>
          <span className="main-info">but also in the dimension of time and communication.</span>
        </div>
        <animated.button 
        className="more"
        onMouseMove={({ clientX: x, clientY: y }) => handlemove(x, y)}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans as any) }}
        >LOOK MORE</animated.button>
      </div>
    </div>
  );
}