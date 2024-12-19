import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded-md'>
        <form className='flex w-full flex-wrap items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder=' Make a UI design' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4 outline-none' type="date" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4 outline-none' type="text" placeholder='EmployeeName' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4 outline-none' type="text" placeholder='Design, Dev, etc.'/>
                </div>
            </div>
            
            <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
                <textarea className='w-full h-60 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-300' placeholder='Design a UI for the new website' />
            </div>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </form>
       </div>
  )
}

export default CreateTask
