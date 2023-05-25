import React from 'react'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';


// const SocialMedia = () => {
//     return (
//         <div className='app__social'>
//             <div>
//                 <BsLinkedin />
//             </div>
//             <div>
//                 <BsGithub />
//             </div>
//             <div>
//                 <BsInstagram />
//             </div>

//         </div>
//     )
// }
const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://github.com/ayush9009">
                <BsGithub />
            </a>

        </div>
        <div>
            <a href="https://www.linkedin.com/in/ayush-sharma-31250420a/">
                <BsLinkedin />
            </a>

        </div>
        <div>
            <a href="https://www.instagram.com/aayush.8870/">
                <BsInstagram />
            </a>

        </div>
    </div>
);

export default SocialMedia