import React from 'react'
import { NavigationDots, SocialMedia } from '../components';


//HOC higher order components
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />

      <div className='app__wrapper app__flex'>
        <Component />
        <div className='copyright'>
          <p className='p-text'>@2023 Aayush</p>
          {/* <p>I <span style={{"font-size:500%;color:red"}}>&hearts;</span> nature!</p> */}
          {/* <p>I <span style="font-size:500%;color:red;">&hearts;</span> nature!</p> */}


          {/* <p className='p-text'>Made With ♥ By Aayush</p>             */}
          <p className='p-text'>All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap