import React from 'react'
import Menucard from './Menucard'
import img1 from '../assets/black_coffee.jpg'
import img2 from '../assets/ec178d83e5f597b162cda1e60cb64194.jpg'
import img3 from '../assets/Cappuccino_at_Sightglass_Coffee.jpg'
import img4 from '../assets/hot-coffee-capuccino-cup-with-latte-art-wood-table-cafe_778722-16.avif'
import img5 from '../assets/Mocha-1fc71f7.png'
import img6 from '../assets/Untitled_design_43_1775b250-963a-4242-869d-932a29e6c306_480x480.jpg'





const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
  
      <h1 className='font-semibold text-center text-4xl mt-24 mb-8'>Our Menu</h1>
      
        <div className='flex flex-wrap pb-8 gap-8 justify-center'>
            <Menucard img={img1} title="Black Coffee"/>
            <Menucard img={img2} title="Espresso Coffee"/>
            <Menucard img={img3} title="Cappuccino Coffee"/>
            <Menucard img={img4} title="latte Coffee"/>
            <Menucard img={img5} title="Mocha Coffee"/>
            <Menucard img={img6} title="Flat White Coffee"/>



        </div>
    </div>  
  )
}

export default Menu
