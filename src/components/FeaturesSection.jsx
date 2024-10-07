// import React from 'react'
// import { features } from '../data/features'
// import TagLine from './TagLine'


// function FeaturesSection() {
//   return (
//     <>
//     <div className='max-w-5xl mx-auto flex flex-col p-10 justify-center items-center'>
//     <TagLine>
//         Features
//     </TagLine>
//         <h2 className='font-extrabold text-center text-3xl mb-8 pt-3'> Intelligent Form Building</h2> 
//         <div className='mt-10 grid  grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl'>
//         {
//             features.map((feature, index) => (
//                 <div
//                 data-aos="fade-up"
                 
//                  key={index} 
//                  className='bg-white border border-indigo-400/30
//                   rounded-lg shadow-lg  p-5 flex flex-col '>
                    
//                     <div>
//                         <h3 className='text-xl font-semibold'>{feature.title}</h3>
//                         <p className='text-gray-600 mt-1'>{feature.description}</p>
//                     </div>
//                 </div>
//             ))
//         }
//         </div>
//     </div>
//     </>
//   )
// }



// export default FeaturesSection

// import React from 'react';
// import { features } from '../data/features';
// import TagLine from './TagLine';
// import { motion } from 'framer-motion';

// function FeaturesSection() {
//   return (
//     <>
//       <div className='max-w-5xl mx-auto flex flex-col p-10 justify-center items-center'>
//         <TagLine>
//           Features
//         </TagLine>
//         <h2 className='font-extrabold text-center text-3xl mb-8 pt-3'> Intelligent Form Building</h2> 
//         <div className='mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl'>
//           {
//             features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className='bg-white border border-indigo-400/30 rounded-lg shadow-lg p-5 flex flex-col'
//                 data-aos="fade-up"
//                 whileHover={{
//                   scale: 1.05,  // Slightly increase the size on hover
//                   rotateX: [0, -10],  // Apply tilt on the X-axis
//                   rotateY: [0, 10],   // Apply tilt on the Y-axis
//                   transition: { duration: 0.4 } // Duration of the animation
//                 }}
//               >
//                 <div>
//                   <h3 className='text-xl font-semibold'>{feature.title}</h3>
//                   <p className='text-gray-600 mt-1'>{feature.description}</p>
//                 </div>
//               </motion.div>
//             ))
//           }
//         </div>
//       </div>
//     </>
//   );
// }

// export default FeaturesSection;

import React, { useState } from 'react';
import { features } from '../data/features';
import TagLine from './TagLine';
import { motion } from 'framer-motion';

function FeaturesSection() {
  // Function to calculate tilt based on which corner the mouse is closest to
  const handleMouseMove = (e, setTilt) => {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();

    // Get the mouse position relative to the card
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    // Calculate which corner is closest to the mouse
    const middleX = cardRect.width / 2;
    const middleY = cardRect.height / 2;

    let rotateX = 0;
    let rotateY = 0;

    if (x < middleX && y < middleY) {
      // Top-left corner
      rotateX = 10;
      rotateY = -10;
    } else if (x > middleX && y < middleY) {
      // Top-right corner
      rotateX = 10;
      rotateY = 10;
    } else if (x < middleX && y > middleY) {
      // Bottom-left corner
      rotateX = -10;
      rotateY = -10;
    } else if (x > middleX && y > middleY) {
      // Bottom-right corner
      rotateX = -10;
      rotateY = 10;
    }

    // Set the tilt values based on which corner was hovered over
    setTilt({ rotateX, rotateY });
  };

  // Reset tilt when the mouse leaves the card
  const handleMouseLeave = (setTilt) => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <>
      <div className='max-w-5xl mx-auto flex flex-col p-10 justify-center items-center'>
        <TagLine>
          Features
        </TagLine>
        <h2 className='font-extrabold text-center text-3xl mb-8 pt-3'> Intelligent Form Building</h2> 
        <div className='mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl'>
          {
            features.map((feature, index) => {
              const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

              return (
                <motion.div
                  key={index}
                  className='bg-white border border-indigo-400/30 rounded-lg shadow-lg p-5 flex flex-col'
                  data-aos="fade-up"
                  style={{ perspective: '1000px' }} // Adding perspective for 3D effect
                  animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }} // Apply dynamic tilt
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Smooth transition with spring effect
                  onMouseMove={(e) => handleMouseMove(e, setTilt)}
                  onMouseLeave={() => handleMouseLeave(setTilt)}
                >
                  <div>
                    <h3 className='text-xl font-semibold'>{feature.title}</h3>
                    <p className='text-gray-600 mt-1'>{feature.description}</p>
                  </div>
                </motion.div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default FeaturesSection;
