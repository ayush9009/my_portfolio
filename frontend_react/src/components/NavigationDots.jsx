import React from 'react'



const NavigationDots = ({active}) => {  //active is a props which tells us on which section we are on currently
  return(
    <div className='app__navigation'>
         {['home', 'about', 'work', 'skills','testimonials', 'contact'].map((item,index) => (
                  <a 
                  href={`#${item}`} 
                  key={item+index}
                  className="app__navigation-dot"
                  style={active===item ? {backgroundColor:'#313BAC'}:{}}
                //   onClick={() => setToggle(false)}
                  />
              ))}
    </div>
  )
}



export default NavigationDots