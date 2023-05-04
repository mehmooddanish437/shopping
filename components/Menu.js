
import React from 'react'
const Menu = ({catMenu, setCatMenu , setMobileMenu}) => {
  
    
 
  return (
    <>
    <ul className='hidden md:flex items-center justify-between gap-8'>
<li>Home</li>

<li>Products</li>
<li>Contacts</li>
<li>About</li>
    </ul>
    </>
  )
}

export default Menu