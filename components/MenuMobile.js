import React from 'react'
const MenuMobile = ({setMobileMenu }) => {
  
  
  return (
    <>
  <ul className='md:hidden bg-gray-400 w-full absolute left-0 top-[50px] h-'>
  
          <li className='p-3'>Home</li>
        

<li className='p-3'>Products</li>
<li className='p-3'>Contacts</li>
<li className='p-3'>About</li>
       
  
</ul>
    </>
  )
}

export default MenuMobile