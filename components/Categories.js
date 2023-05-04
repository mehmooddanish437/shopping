import React, { useEffect } from 'react';

import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import style from "../styles/categories.module.css"

const Categories = () => {
  

    useEffect(() => {
        var splide = new Splide('.splide', {
            perPage: 3,
            perMove:1,
            loop: true,
            drag:true,
            lazyLoad: true,
            pagination:false,
            autoplay: true,
            interval: 2000,
            gap: '2rem',
            breakpoints: {
                640: {
                    perPage: 2,
                    gap: '.7rem',
                    height: '6rem',
                },
                480: {
                    perPage: 1,
                    gap: '.7rem',
                    height: '6rem',
                },
            },
        });

        splide.mount();
    }, []);

    return (
        <div className="splide py-5 px-10 bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600">
          <div className='md:flex justify-between my-6'>
           <h1 className='text-3xl font-bold'>Categories</h1>
           <p className='text-base font-bold'>View All</p>
            </div>  
  <div className="splide__track md:max-w-[1360px] mx-auto">
    <div className="splide__list">
      <div className="splide__slide border-2 border-gray-400 w-80 h-80">
        <img src='/shoes.png' alt='' className="w-full h-full object-cover" />
      </div>
      <div className="splide__slide border-2 border-gray-400 w-80 h-80">
        <img src='/bag.png' alt='' className="w-full h-full object-cover" />
      </div>
      <div className="splide__slide border-2 border-gray-400 w-80 h-80">
        <img src='/jacket.png' alt='' className="md:w-full md:h-full object-cover" />
      </div>
      <div className="splide__slide border-2 border-gray-400 w-80 h-80">
        <img src='https://www.pngplay.com/wp-content/uploads/7/Online-Shopping-Transparent-File.png' alt='' className="w-full h-full object-cover" />
      </div>
      <div className="splide__slide border-2 border-gray-400 w-80 h-80">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlT9_t5nE0GXppKiuVH23r2UEqET5BfGzHwA&usqp=CAU' alt='' className="w-full h-full object-cover" />
      </div>
      <div className="splide__slide border-2 border-gray-400 w-80 h-80">
        <img src='https://pngimg.com/d/shopping_cart_PNG73.png' alt='' className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</div>
    );
}

export default Categories;