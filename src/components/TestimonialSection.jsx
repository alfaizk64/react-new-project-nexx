import React from 'react'
import TagLine from './TagLine'
 import img1 from "/testimonials/1.png"
 import img2 from "/testimonials/2.png"
 import img3 from "/testimonials/3.png"
 import img4 from "/testimonials/4.png"
 import img5 from "/testimonials/5.png"
 import img6 from "/testimonials/6.png"
 import img7 from "/testimonials/7.png"
 import img8 from "/testimonials/8.png"
 import img9 from "/testimonials/9.png"
function TestimonialSection() {
  return (
    <>
      <section className='flex items-center justify-center flex-col'>
         <TagLine > Testimonial</TagLine>
         <h2 className='text-3xl font-bold text-center mt-3 mb-8'>
            What Builders Say About Us
         </h2>
         <div className='grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left'>
           <div
            data-aos="zoom-in-up"
            className='grid gap-4'>
               <div className='border rounded-lg bg-white/20 backdrop-blur-lg p-6'>
                   <div className='flex gap-3 mb-4'>
                   <img src={img1} className='w-12 h-12 rounded-full'/>
                   <p>User</p>
                   </div>
                   <p className='text-sm space-y-4'>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus nec erat scelerisque bibendum. Donec ullamcorper, nunc vel consectetur tristique, justo dolor ultricies felis, non tristique urna lectus eu nunc.
                    </span>
                   </p>
               </div>
           </div>
           <div 
            data-aos="zoom-in-down"
            className='grid gap-4'>
               <div className='border rounded-lg bg-white/20 backdrop-blur-lg p-6'>
                   <div className='flex gap-3 mb-4'>
                   <img src={img2} className='w-12 h-12 rounded-full'/>
                   <p>User</p>
                   </div>
                   <p className='text-sm space-y-4'>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus nec erat scelerisque bibendum. Donec ullamcorper, nunc vel consectetur tristique, justo dolor ultricies felis, non tristique urna lectus eu nunc.
                    </span>
                   </p>
               </div>
           </div>
           <div 
            data-aos="zoom-in-left"
            className='grid gap-4'>
               <div className='border rounded-lg bg-white/20 backdrop-blur-lg p-6'>
                   <div className='flex gap-3 mb-4'>
                   <img src={img3} className='w-12 h-12 rounded-full'/>
                   <p>User</p>
                   </div>
                   <p className='text-sm space-y-4'>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus nec erat scelerisque bibendum. Donec ullamcorper, nunc vel consectetur tristique, justo dolor ultricies felis, non tristique urna lectus eu nunc.
                    </span>
                   </p>
               </div>
           </div>
           <div 
           data-aos="zoom-in-up"
              className='grid gap-4'>
               <div className='border rounded-lg bg-white/20 backdrop-blur-lg p-6'>
                   <div className='flex gap-3 mb-4'>
                   <img src={img4} className='w-12 h-12 rounded-full'/>
                   <p>User</p>
                   </div>
                   <p className='text-sm space-y-4'>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus nec erat scelerisque bibendum. Donec ullamcorper, nunc vel consectetur tristique, justo dolor ultricies felis, non tristique urna lectus eu nunc.
                    </span>
                   </p>
               </div>
           </div>
           <div 
            data-aos="zoom-in-down"
              className='grid gap-4'>
               <div className='border rounded-lg bg-white/20 backdrop-blur-lg p-6'>
                   <div className='flex gap-3 mb-4'>
                   <img src={img5} className='w-12 h-12 rounded-full'/>
                   <p>User</p>
                   </div>
                   <p className='text-sm space-y-4'>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus nec erat scelerisque bibendum. Donec ullamcorper, nunc vel consectetur tristique, justo dolor ultricies felis, non tristique urna lectus eu nunc.
                    </span>
                   </p>
               </div>
           </div>
           <div 
                data-aos="zoom-in-left"
               className='grid gap-4'>
               <div className='border rounded-lg bg-white/20 backdrop-blur-lg p-6'>
                   <div className='flex gap-3 mb-4'>
                   <img src={img6} className='w-12 h-12 rounded-full'/>
                   <p>User</p>
                   </div>
                   <p className='text-sm space-y-4'>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus nec erat scelerisque bibendum. Donec ullamcorper, nunc vel consectetur tristique, justo dolor ultricies felis, non tristique urna lectus eu nunc.
                    </span>
                   </p>
               </div>
           </div>
           <div 
           data-aos="zoom-in-up"
           className='grid gap-4'>
               <div className='border rounded-lg bg-white/20 backdrop-blur-lg p-6'>
                   <div className='flex gap-3 mb-4'>
                   <img src={img7} className='w-12 h-12 rounded-full'/>
                   <p>User</p>
                   </div>
                   <p className='text-sm space-y-4'>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus nec erat scelerisque bibendum. Donec ullamcorper, nunc vel consectetur tristique, justo dolor ultricies felis, non tristique urna lectus eu nunc.
                    </span>
                   </p>
               </div>
           </div>
           <div 
              data-aos="zoom-in-down"
            className='grid gap-4'>
               <div className='border rounded-lg bg-white/20 backdrop-blur-lg p-6'>
                   <div className='flex gap-3 mb-4'>
                   <img src={img8} className='w-12 h-12 rounded-full'/>
                   <p>User</p>
                   </div>
                   <p className='text-sm space-y-4'>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus nec erat scelerisque bibendum. Donec ullamcorper, nunc vel consectetur tristique, justo dolor ultricies felis, non tristique urna lectus eu nunc.
                    </span>
                   </p>
               </div>
           </div>
           <div 
            data-aos="zoom-in-left"
              className='grid gap-4'>
               <div className='border rounded-lg bg-white/20 backdrop-blur-lg p-6'>
                   <div className='flex gap-3 mb-4'>
                   <img src={img9} className='w-12 h-12 rounded-full'/>
                   <p>User</p>
                   </div>
                   <p className='text-sm space-y-4'>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus nec erat scelerisque bibendum. Donec ullamcorper, nunc vel consectetur tristique, justo dolor ultricies felis, non tristique urna lectus eu nunc.
                    </span>
                   </p>
               </div>
           </div>

         </div>
      </section> 
    </>
  )
}

 
export default TestimonialSection
