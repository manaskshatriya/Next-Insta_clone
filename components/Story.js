import React from 'react'

export default function Story({ img, username}) {
  return (
    <div className='' >
      <img className='h-14 w-14 rounded-full p-[1.5px] hover:scale-110 duration-200 ease-out transition transform 
      object-contain cursor-pointer  border-red-500 border-2 '  src={img} alt=""/>
      <p className='text-xs w-14 truncate text-center' >{username}</p>
    </div>
  )
}
