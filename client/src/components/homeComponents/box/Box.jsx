import React from 'react'


const Box = () => {
  return (
    
    
    <div className='bg-[#2A1B3D] h-[40rem]'>
      <div className='text-[#795df1]  text-center font-ghi  text-8xl animate-fade-down animate-once animate-duration-1000 animate-delay-1000'>Create and Customize</div>
      <div className="text-white text-3xl pt-[4rem] text-center font-abc px-[23rem] leading-loose">Personalize your quiz experience, challenge yourself, and expand your knowledge!</div>
      <div className='pl-[41rem] pt-[4rem] '>
        
        <a href="#_" class="relative inline-flex items-center justify-center px-6 py-4 text-lg font-medium tracking-tighter text-white bg-[#44318D] rounded-full group">
          <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#44318D] rounded-full group-hover:mt-0 group-hover:ml-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white rounded-full "></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#44318D] rounded-full opacity-0 group-hover:opacity-100 "></span>
          <span class="relative text-[#44318D] text-2xl transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Create Your Quiz!</span>
        </a>      
      </div>
    </div>
  )
}

export default Box
