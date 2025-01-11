import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl'>Hello<br/><span className='text-3xl font-semibold'>Weather 👋</span></h1>
      <button className='bg-red-600 px-4 py-2 rounded-sm'> Log Out</button>
      </div>
  )
}

export default Header