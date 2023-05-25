// import React, { useState, useEffect } from 'react';
// import { AiFillEye, AiFillGithub } from 'react-icons/ai';
// import { motion } from 'framer-motion';

// import { AppWrap,MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
// import './Work.scss';

// import './Work.scss';

// const Work = () => {
//   const [activeFilter, setActiveFilter] = useState('All')  ///initally all yani sab dekenge shuruwat mai
//   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
//   const [works, setWorks] = useState([]);
//   const [filterWork, setFilterWork] = useState([]);

//   useEffect(() => {
//     //ye sanity vala jo database vaha se data hum fetch kar rai ye smj lo
//     const query = '*[_type=="works"]';

//     client.fetch(query)
//       .then((data) => {
//         setWorks(data);
//         setFilterWork(data);
//       })
//   }, [])

//   const handleWorkFilter = (item) => {
//     setActiveFilter(item);
//     setAnimateCard([{ y: 100, opacity: 0 }]);

//     setTimeout(() => {
//       setAnimateCard([{ y: 0, opacity: 1 }]);

//       if (item === 'All') {
//         setFilterWork(works);
//       } else {
//         setFilterWork(works.filter((work) => work.tags.includes(item)));
//       }
//     }, 500);
//   };

//   return (
//     <>
//       <h2 className='head-text'>My Creative <span>Portfolio </span> section</h2>

//       <div className='app__work-filter'>
//         {/* ye bracket mai loop bnayenge categories ka jo hum include kar rai,ye array bna diya ui/ux web app mobille aapp */}
//         {
//           ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All '].map((item, index) => (
//             <div
//               key={index}
//               onClick={() => handleWorkFilter(item)}
//               className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}  //dynamic template string
//             >

//               {item}
//               {/* yaha {item } ui/ux etc sare element show hojagey */}
//             </div>
//           ))
//         }



//   {/* // export default Work */}
//        </div>
//              <motion.div      //is motion div ki vazaah se aapki image mai motion ari ye framer motion e import kiya humne
//         animate={animateCard}
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className="app__work-portfolio"
//       >
//         {filterWork.map((work, index) => (
//           <div className="app__work-item app__flex" key={index}>
//             <div className='app__work-img app__flex'>
//               <img src={urlFor(work.imageUrl)} alt={work.name} />
// //               <motion.div

// //                 whileHover={{ opacity: [0, 1] }}
// //                 transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
// //                 className="app__work-hover app__flex"
// //               >
// //                 <a href={work.projectLink} target="_blank" rel="noreferrer">

// //                   <motion.div
// //                     whileInView={{ scale: [0, 1] }}
// //                     whileHover={{ scale: [1, 0.90] }}
// //                     transition={{ duration: 0.25 }}
// //                     className="app__flex"
// //                   >
// //                     <AiFillEye />
// //                   </motion.div>
// //                 </a>
// //                 <a href={work.codeLink} target="_blank" rel="noreferrer">
// //                   <motion.div
// //                     whileInView={{ scale: [0, 1] }}
// //                     whileHover={{ scale: [1, 0.90] }}
// //                     transition={{ duration: 0.25 }}
// //                     className="app__flex"
// //                   >
// //                     <AiFillGithub />
// //                   </motion.div>
// //                 </a>
// //               </motion.div>
// //             </div>

// //             <div className="app__work-content app__flex">
// //               <h4 className="bold-text">{work.title}</h4>
// //               <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

// //               <div className="app__work-tag app__flex">
// //                 <p className="p-text">{work.tags[0]}</p>
// //               </div>
// //             </div>
// //           </div >
// //         ))}
// //       </motion.div >
// //     </>

// //   )
// // } 

// // export default AppWrap(
// //   MotionWrap(Work, 'app__works'),
// //   'work',
// //   'app__primarybg',     //jo wo color chnange hora vo is vazah se hora MotionWrap higherorderComponent
// // ); */}
//  import React from 'react'

// const Work = () => {
//   return (
//     <h1>hello work</h1>
//   )
// } 


// export default Work
import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Desktop App', 'ReactJS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);



