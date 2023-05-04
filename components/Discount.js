import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
const Discount = () => {
  return (
    <div className='px-10 py-4 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600'>
           <div className='md:flex justify-between my-4'>
           <h1 className='text-3xl font-bold'>Discount</h1>
           <p className='text-base font-bold'>View All</p>
            </div> 
    <div className='mx-auto flex justify-center gap-9 md:max-w-[1360px]'>
      <div className='w-72 h-72 border-3  relative  border-solid border-2 border-gray-600'>
        <AiOutlineHeart className='text-3xl absolute top-4 left-4'/>
        <img src='https://www.freepnglogos.com/uploads/women-bag-png/women-bag-png-transparent-images-download-clip-6.png' alt='' className='w-full h-full'/>
        <div  style={{ clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 50% 80%, 0 100%, 0 1%)' }} className=' bg-gray-900 text-white flex justify-center items-center h-24 w-20 absolute top-0 right-0'>
          <span className='text-lg text-center'>50% <br/> Off</span>
        </div>
        <div className='bg-gray-700 opacity-100  absolute bottom-0 h-20 w-full z-10'>
          <span className='absolute bottom-5 left-5 text-white'>$345 <br/> Dillon Pilot Bag</span> 
        </div>
      </div>
      <div className='w-72 h-72 border-3  relative  border-solid border-2 border-gray-600'>
        <AiOutlineHeart className='text-3xl absolute top-4 left-4'/>
        <img src='https://www.transparentpng.com/thumb/shirt/jcsIrn-long-sleeved-t-shirt-collar-png.png' alt='' className='w-full h-full'/>
        <div  style={{ clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 50% 80%, 0 100%, 0 1%)' }} className=' bg-gray-900 text-white flex justify-center items-center h-24 w-20 absolute top-0 right-0'>
          <span className='text-lg text-center'>50% <br/> Off</span>
        </div>
        <div className='bg-gray-700 opacity-100  absolute bottom-0 h-20 w-full z-10'>
          <span className='absolute bottom-5 left-5 text-white'>$345 <br/> Dillon Pilot Bag</span> 
        </div>
      </div>
      <div className='w-72 h-72 border-3  relative  border-solid border-2 border-gray-600'>
        <AiOutlineHeart className='text-3xl absolute top-4 left-4'/>
        <img src='https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png' alt='' className='w-full h-full'/>
        <div  style={{ clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 50% 80%, 0 100%, 0 1%)' }} className=' bg-gray-900 text-white flex justify-center items-center h-24 w-20 absolute top-0 right-0'>
          <span className='text-lg text-center'>50% <br/> Off</span>
        </div>
        <div className='bg-gray-700 opacity-100  absolute bottom-0 h-20 w-full z-10'>
          <span className='absolute bottom-5 left-5 text-white'>$345 <br/> Dillon Pilot Bag</span> 
        </div>
      </div>
      <div className='w-72 h-72 border-3  relative  border-solid border-2 border-gray-600'>
        <AiOutlineHeart className='text-3xl absolute top-4 left-4'/>
        <img src='https://freepngimg.com/thumb/samsung_mobile_phone/5-2-samsung-mobile-phone-png-hd.png' alt='' className='w-full h-full'/>
        <div  style={{ clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 50% 80%, 0 100%, 0 1%)' }} className=' bg-gray-900 text-white flex justify-center items-center h-24 w-20 absolute top-0 right-0'>
          <span className='text-lg text-center'>50% <br/> Off</span>
        </div>
        <div className='bg-gray-700 opacity-100  absolute bottom-0 h-20 w-full z-10'>
          <span className='absolute bottom-5 left-5 text-white'>$345 <br/> Dillon Pilot Bag</span> 
        </div>
      </div>
     
    </div>
  </div>
  )
}

export default Discount