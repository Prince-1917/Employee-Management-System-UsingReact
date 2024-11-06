import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 screen justify-between gap-4'>
      <div className='py-5 px-10 rounded-xl w[45%] border-2 border-emerald-200 bg-red-500'>
        <h2 className='text-3xl font-semibold'>1</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='py-5 px-10 rounded-xl w[45%] border-2 border-emerald-200 bg-blue-500'>
        <h2 className='text-3xl font-semibold'>2</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='py-5 px-10 rounded-xl w[45%] border-2 border-emerald-200 bg-orange-500'>
        <h2 className='text-3xl font-semibold'>3</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='py-5 px-10 rounded-xl w[45%] border-2 border-emerald-200 bg-purple-500'>
        <h2 className='text-3xl font-semibold'>4</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
