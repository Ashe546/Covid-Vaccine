import React from 'react'

export default function Nav() {
  return (
    <div>
      <div className='flex w-full shadow-xl h-[60px] mt-6 pl-4'><a className='w-[300px]' href="/"><div className='flex gap-2'><img className='h-[40px] w-[40px]'  src="/SARS-CoV-2_without_background.png" alt="logo"/> <h1 className='mt-[6px] font-bold text-red-600'>Covid 19</h1></div></a> <div className='flex justify-end mb-[30px] mr-[20px] w-full'><div className='rounded-full w-[40px] h-[40px] bg-black'></div></div></div>
    </div>
  )
}
