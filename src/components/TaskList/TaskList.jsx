import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist'className='h-[55%] overflow-x-auto w-full py-5 gap-5 flex items-center justify-start '>
        <div className='flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-400 text-sm rounded px-2 py-1 m-0'>High</h3>
                <h4 className='text-sm'>21 Feb 2025</h4>
            </div>
            <h2 className='mt-1 text-xl'>Make a Yt Video</h2>
            <p className='text-sm font-'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius consequatur dicta similique adipisci magni dignissimos sapiente error officia, doloremque quis sequi cupiditate, veritatis eos provident officiis harum excepturi atque inventore?
            </p>
        </div>

        <div className='flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-400 text-sm rounded px-2 py-1 m-0'>High</h3>
                <h4 className='text-sm'>21 Feb 2025</h4>
            </div>
            <h2 className='mt-1 text-xl'>Make a Yt Video</h2>
            <p className='text-sm font-'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius consequatur dicta similique adipisci magni dignissimos sapiente error officia, doloremque quis sequi cupiditate, veritatis eos provident officiis harum excepturi atque inventore?
            </p>
        </div>

        <div className='flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-400 text-sm rounded px-2 py-1 m-0'>High</h3>
                <h4 className='text-sm'>21 Feb 2025</h4>
            </div>
            <h2 className='mt-1 text-xl'>Make a Yt Video</h2>
            <p className='text-sm font-'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius consequatur dicta similique adipisci magni dignissimos sapiente error officia, doloremque quis sequi cupiditate, veritatis eos provident officiis harum excepturi atque inventore?
            </p>
        </div>
        <div className='flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-400 text-sm rounded px-2 py-1 m-0'>High</h3>
                <h4 className='text-sm'>21 Feb 2025</h4>
            </div>
            <h2 className='mt-1 text-xl'>Make a Yt Video</h2>
            <p className='text-sm font-'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius consequatur dicta similique adipisci magni dignissimos sapiente error officia, doloremque quis sequi cupiditate, veritatis eos provident officiis harum excepturi atque inventore?
            </p>
        </div>


    </div>
  )
}

export default TaskList