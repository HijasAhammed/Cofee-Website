import React from 'react'
import Button from '../layout/button'
import img from '../assets/coffee-latte-art-2021-09-03-01-05-38-utc.jpg'

const About = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor'>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24mb-8'>About Us</h1>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
                <div className='w-full lg:w-2/2'>
                    <img className='rounded-lg' src={img} alt='img' />
                </div>
            </div>
            <div className='w-full lg: w-2/4 p-4 space-y-3'>
                <h2 className='font-semibold text-3xl'>What Makes Our Coffee Special?</h2>
                <p>Coffee is a beverage brewed from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks.</p>
                <p>  The seeds of the Coffea plant's fruits are separated to produce unroasted green coffee beans. The beans are roasted and then ground into fine particles typically steeped in hot water before being filtered out, producing a cup of coffee. It is usually served hot, although chilled or iced coffee is common. Coffee can be prepared and presented in a variety of ways (e.g., espresso, French press, caffè latte, or already-brewed canned coffee). Sugar, sugar substitutes, milk, and cream are often added to mask the bitter taste or enhance the flavor.</p>
                <Button title="Learn More"/>
            </div>
        </div>
    )
}

export default About
