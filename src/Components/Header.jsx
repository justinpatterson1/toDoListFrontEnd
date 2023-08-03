import React from 'react'

function Header() {
  return (
    <>
        <div className='bg-black text-white py-2 flex justify-end px-4'>
            <div className='flex justify-around  w-52'>
                <p className='hover:text-teal-400'>Login</p>
                <p className='hover:text-teal-400'>Sign Up</p>
            </div>
        
        </div>
          <div className='bg-teal-500'>
            <h1 className='text-white text-center font-bold py-5 text-3xl'>
                TO - DOs
            </h1>
         </div>
    </>
  
  )
}

export default Header