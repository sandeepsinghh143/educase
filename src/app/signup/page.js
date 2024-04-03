import Button from '@/components/Button'
import React from 'react'

export default function page() {
  return (
    <div className="w-[95%] lg:w-1/4 border m-auto p-4 min-h-[600px] mt-20 bg-[#F7F8F9]">
      <div className="w-[80%]">
        <h1 className="text-4xl font-semibold w-[80%]">Create your PopX Account</h1>
      </div>
      <div className="flex flex-col gap-4">
        <form action="" method='post'>
            <div>
            <fieldset>
                    <legend className='text-sm'>Name <span className='text-[red]'>*</span></legend>
                    <input type="text" name="" id="" placeholder='Enter Name' className='text-sm p-2 px-5'/>
                </fieldset>
                <fieldset>
                    <legend className='text-sm'>Phone Number <span className='text-[red]'>*</span></legend>
                    <input type="number" name="" id="" placeholder='Enter Phone Number' className='text-sm p-2 px-5'/>
                </fieldset>
                <fieldset>
                    <legend className='text-sm'>Email Address <span className='text-[red]'>*</span></legend>
                    <input type="email" name="" id="" placeholder='Enter email address' className='text-sm p-2 px-5'/>
                </fieldset>
                <fieldset>
                    <legend className='text-sm'>Password <span className='text-[red]'>*</span></legend>
                    <input type="password" name="" id="" placeholder='Enter password' className='text-sm p-2 px-5'/>
                </fieldset>
                <fieldset>
                    <legend className='text-sm'>Company Name</legend>
                    <input type="text" name="" id="" placeholder='Enter password' className='text-sm p-2 px-5'/>
                </fieldset>
                <div className='text-sm'>Are you an agency?</div>
                <div className='flex items-center gap-10 text-sm mt-2'>
                    <div className='flex items-center gap-2'>
                        <input type="radio" name="agency" id="yes" value={"yes"} className='h-5 w-5'/>
                        <label htmlFor="yes">Yes</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="radio" name="agency" id="no" value={"no"} className='h-5 w-5'/>
                        <label htmlFor="no">No</label>
                    </div>
                </div>
            </div>
            <Button text={"Create Account"} className="bg-[#CBCBCB] p-3 text-white rounded-md text-center w-[100%] mt-20" disabled/>
        </form>
      </div>
    </div>
  )
}
