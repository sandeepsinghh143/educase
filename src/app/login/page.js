import Button from '@/components/Button'
import React from 'react'

export default function page() {
  return (
    <div className="w-[95%] lg:w-1/4 border m-auto p-4 min-h-[600px] flex flex-col justify-between mt-20 bg-[#F7F8F9]">
      <div className="w-[80%]">
        <h1 className="text-4xl font-semibold w-[90%]">Signin to your PopX Account</h1>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </div>
      <div className="flex flex-col gap-4">
        <form action="" method='post'>
            <fieldset>
                <legend className='text-sm'>Email Address</legend>
                <input type="email" name="" id="" placeholder='Enter email address' className='text-sm p-2 px-5'/>
            </fieldset>
            <fieldset>
                <legend className='text-sm'>Password</legend>
                <input type="password" name="" id="" placeholder='Enter password' className='text-sm p-2 px-5'/>
            </fieldset>
            <Button text={"Login"} className="bg-[#CBCBCB] p-3 text-white rounded-md text-center w-[100%]"/>
        </form>
      </div>
    </div>
  )
}
