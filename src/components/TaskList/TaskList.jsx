import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist'className='h-[55%] overflow-x-auto w-full py-5 gap-5 flex items-center justify-start '>
        <div className='flex-shrink-0 h-full p-5 w-[200px] bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-400'>High</h3>
                <h4>21 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-xl'>Make a Yt Video</h2>
        </div>

    </div>
  )
}

export default TaskList