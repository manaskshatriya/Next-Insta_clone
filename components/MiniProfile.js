import { signOut, useSession } from 'next-auth/react';
import React from 'react'

export default function MiniProfile() {
  const {data:session } = useSession();
  // console.log(session);   
  return (
    <div className='flex items-center justify-between mt-14 space-x-4 ml-10'   >
      <img className='rounded-full border p-[2px] w-16 h-16'  src={session?.user?.image} alt=""/>
      <div className='flex-1' >
        <h2 className='font-bold' >{session?.user?.username}</h2>
        <h3 className='text-sm text-gray-400' >Welcome to instagram</h3>
      </div>
      <button onClick={signOut} className='text-blue-400 text-sm font-semibold' >Sign Out</button>
    </div>
  )
}
