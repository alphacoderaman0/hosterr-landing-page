import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex flex-row-reverse'>
        <div className='flex items-center justify-center lg:flex-1 lg:h-[400px] lg:justify-end'>
            <img src="./assets/Blue-Shape.svg" alt="Loading" className=' -rotate-[45deg] h-64 md:h-72 lg:h-[400px]' />
            <img src="./assets/Pink-Shape.svg" alt="Loading" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]' />
            <img src="./assets/Purple-Shape.svg" alt="Loading" className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]' />
            <img src="./assets/Hero-Model.png" alt="Loading" className='absolute h-64 md:h-72 lg:h-[400px]'/>
        </div>
        <div className='lg:flex-1'>
            <h1 className='text-5xl font-bold font-playfair leading-tight'>Host your website in less than 5 minutes</h1>
            <p className='font-lato text-gray-400 pb-2'>With Hoster , get your website up and running in no less than 5 minutes with the most competetive pricing and packages available online.</p> 
            <form action='' className='flex flex-col gap-4 pb-4 md:flex-row'>
              <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type="email" placeholder='Enter e-mail address' />
              <button type='submit' className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white' >Join Waitlist</button>
            </form> 
            <div className='flex gap-2'>
              <img src="./assets/Checkmark.svg" alt="check" />
              <p className='font-lato text-gray-400'>No spam, ever . Unsubscribe anytime</p>
            </div>
        </div>    
    </div>
  )
}

export default Body
