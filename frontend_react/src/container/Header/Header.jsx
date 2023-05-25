// import React from 'react';
// import { motion } from 'framer-motion';

// import { AppWrap } from '../../wrapper';
// import { images } from '../../constants';
// // import { Aayush2 } from '../assets/Aayush2'

// import './Header.scss';

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut',
//     },
//   },
// };

// const Header = () => (

//   <div className="app__header app__flex">
//     <motion.div
//       whileInView={{ x: [-100, 0], opacity: [0, 1] }}
//       transition={{ duration: 0.5 }} //iski vazah se jab aap load karo page to name ave dheere dheere left to right
//       className="app__header-info"
//     >
//       <div className="app__header-badge">
//         <div className="badge-cmp app__flex">
//           <span>👋</span>
//           <div style={{ marginLeft: 20 }}>
//             <p className="p-text">Hello, I am</p>
//             <h1 className="head-text">Aayush</h1>
//           </div>
//         </div>

//         <div className="tag-cmp app__flex">
//           <p className="p-text">Web Developer</p>
//           <p className="p-text">Programmer</p>
//         </div>
//       </div>
//     </motion.div>

//     {/* <motion.div
//       whileInView={{ opacity: [0, 1] }}
//       transition={{ duration: 0.5, delayChildren: 0.5 }}   //iski vazah se jab aap load karo page to name ave dheere dheere left to right
//       className="app__header-img"
//     >
//       {/* <img src={images.profile} alt="profile_bg" /> */}

//     {/* <img src={images.profile} alt="profile_bg" /> */}
//     {/* <img src={images.profile} alt="profile_bg" /> */}
//     {/* <img src={images.sharmaji} alt="profile_bg" /> */}
//     {/* 
// // //   <motion.img
//         // easeInout this simply shows how animation going to playout//variant tells how to scale elements
//         whileInView={{ scale: [0, 1] }}
//         transition={{ duration: 1, ease: 'easeInOut' }}
//         src={images.circle}
//         alt="profile_circle"
//         className="overlay_circle"
//       />
//     </motion.div> */}
//     <motion.div
//       whileInView={{ opacity: [0, 1] }}
//       transition={{ duration: 0.5, delayChildren: 0.5 }}   //iski vazah se jab aap load karo page to name ave dheere dheere left to right
//       className="app__header-img"
//     >
//       <img src={images.ayush} alt="profile_bg" />
//       <motion.img
//         whileInView={{ scale: [0, 1] }}
//         transition={{ duration: 1, ease: 'easeInOut' }}
//         src={images.circle}
//         alt="profile_circle"
//         className="overlay_circle"
//       />
//     </motion.div>


//     <motion.div
//       variants={scaleVariants}
//       whileInView={scaleVariants.whileInView}
//       className="app__header-circles"
//     >
//       {[images.node, images.react, images.git].map((circle, index) => (
//         <div className="circle-cmp app__flex" key={`circle-${index}`}>
//           <img src={circle} alt="profile_bg" />
//         </div>
//       ))}
//     </motion.div>
//   </div>
// );

// export default AppWrap(Header, 'home');



// {/* <img
//   src={images.Aayush}
//   alt="profile_bg" * /}
// style = {{
//   width: '60%',
//     width: '80%',
//       width: '80%',
//         //   // height: 'auto',
//         borderRadius: '50%',
//           border: '2px solid #ccc',
//          }}
// style = {{
//   width: '660px',
//     height: '660px',
//       borderRadius: '50%',
//         //   // border: '4px solid #fff',
//         boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
//          }} */}







// {/* <motion.div
//       whileHover={{ scale: 1.2 }}
//       whileTap={{ scale: 0.8 }}
//       className="app__header-img"
//     >
//       <motion.img
//         src={images.Aayush2}
//         alt="profile_bg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       />
//       <motion.img
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         src={images.circle}
//         alt="profile_circle"
//         className="overlay_circle"
//       />
//     </motion.div> */}


import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Ayush</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">MERN Stack Developer</p>
          <p className="p-text">Programmer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.ka} alt="profile_bg" />
      {/* <img src={images.kaku_mann} alt="profile_bg" /> */}
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.javascript, images.git].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');