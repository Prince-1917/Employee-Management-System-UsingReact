import React from 'react'

const TaskList = () => {
  return (
    <div id='TaskList' className='flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[50%] w-full py-5 mt-10'>
      <div className='flex-shrink-0 p-5 h-full w-[300px] bg-purple-500 rounded-2xl border-2'>
        <div className='flex items-center justify-between'>
            <h3 className='bg-red-600 text-sm rounded-xl px-3 py-1'>High</h3>
            <h3 className='bg-amber-600 text-sm rounded-xl px-3 py-1'>06 Nov 2024</h3>
        </div>
        <h3 className='mt-5 text-2xl font-semibold'>Learn Coding!</h3>
        <p className='text-sm mt-3'>
            This is a task to learn coding. It is a high priority task.
        </p>
      </div>
      <div className='flex-shrink-0 p-5 h-full w-[300px] bg-blue-500 rounded-2xl border-2'>
        <div className='flex items-center justify-between'>
            <h3 className='bg-red-600 text-sm rounded-xl px-3 py-1'>High</h3>
            <h3 className='bg-amber-600 text-sm rounded-xl px-3 py-1'>06 Nov 2024</h3>
        </div>
        <h3 className='mt-5 text-2xl font-semibold'>Learn Coding!</h3>
        <p className='text-sm mt-3'>
            This is a task to learn coding. It is a high priority task.
        </p>
      </div>
      <div className='flex-shrink-0 p-5 h-full w-[300px] bg-green-500 rounded-2xl border-2'>
        <div className='flex items-center justify-between'>
            <h3 className='bg-red-600 text-sm rounded-xl px-3 py-1'>High</h3>
            <h3 className='bg-amber-600 text-sm rounded-xl px-3 py-1'>06 Nov 2024</h3>
        </div>
        <h3 className='mt-5 text-2xl font-semibold'>Learn Coding!</h3>
        <p className='text-sm mt-3'>
            This is a task to learn coding. It is a high priority task.
        </p>
      </div>
      <div className='flex-shrink-0 p-5 h-full w-[300px] bg-pink-500 rounded-2xl border-2'>
        <div className='flex items-center justify-between'>
            <h3 className='bg-red-600 text-sm rounded-xl px-3 py-1'>High</h3>
            <h3 className='bg-amber-600 text-sm rounded-xl px-3 py-1'>06 Nov 2024</h3>
        </div>
        <h3 className='mt-5 text-2xl font-semibold'>Learn Coding!</h3>
        <p className='text-sm mt-3'>
            This is a task to learn coding. It is a high priority task.
        </p>
      </div>
      <div className='flex-shrink-0 p-5 h-full w-[300px] bg-indigo-500 rounded-2xl border-2'>
        <div className='flex items-center justify-between'>
            <h3 className='bg-red-600 text-sm rounded-xl px-3 py-1'>High</h3>
            <h3 className='bg-amber-600 text-sm rounded-xl px-3 py-1'>06 Nov 2024</h3>
        </div>
        <h3 className='mt-5 text-2xl font-semibold'>Learn Coding!</h3>
        <p className='text-sm mt-3'>
            This is a task to learn coding. It is a high priority task.
        </p>
      </div>
      <div className='flex-shrink-0 p-5 h-full w-[300px] bg-gray-500 rounded-2xl border-2'>
        <div className='flex items-center justify-between'>
            <h3 className='bg-red-600 text-sm rounded-xl px-3 py-1'>High</h3>
            <h3 className='bg-amber-600 text-sm rounded-xl px-3 py-1'>06 Nov 2024</h3>
        </div>
        <h3 className='mt-5 text-2xl font-semibold'>Learn Coding!</h3>
        <p className='text-sm mt-3'>
            This is a task to learn coding. It is a high priority task.
        </p>
      </div>
    </div>
  )
}

export default TaskList
