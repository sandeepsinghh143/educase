"use client"
import Image from 'next/image'
import camera from "/public/camera.svg"

export default function page() {
  return (
    <div className='w-[95%] lg:w-1/4 border m-auto min-h-[600px] mt-20 bg-[#F7F8F9]'>
      <div className='w-[100%] h-20 bg-[#FFFFFF] flex items-center px-5'>
        <h1>Account Settings</h1>
      </div>
      <div className='p-5 text-sm'>
        <div className='flex gap-6 mb-10'>
          
          <div className={`relative`}>
            <div className="w-24 h-24 bg-white rounded-full bg-[url('/public/profile.jpg)]"></div>
            <Image src={camera} className='absolute bottom-1 right-1' alt='camera'/>
            <input type="file" name="" id="" className='absolute top-0 left-0 opacity-0 w-[100%] h-[100%]'/>
          </div>

          <div>
            <div className='font-bold'>Marry Doe</div>
            <div>marry@gmail.com</div>
          </div>

        </div>
        <div>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>
      </div>
      <div className='w-[100%] h-2 border-b border-dashed'></div>
    </div>
  )
}
