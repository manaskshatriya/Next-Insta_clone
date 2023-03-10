import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';
import { useSession } from 'next-auth/react';
export default function Stories() {
    const {data:session} = useSession();
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
      const suggestions = [...Array(20)].map((_, i) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        // birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      }));
      setSuggestions(suggestions);
      // console.log(suggestions);
    }, []);
  return (
    <div className='flex space-x-2 mt-8 p-6 
    broder-gray-200 overflow-x-scroll scrollbar-thin scrollbar-thumb-black  
    border rounded-sm bg-white' >
      {session && (
        <Story key={session.user.uid} img={session.user.image} username={session.user.username} ></Story>
      )}
      {suggestions.map(profile=>(
        <Story key={profile.id} 
        img={profile.avatar} 
        username={profile.username}

        ></Story>
      ))}
    </div>
  )
}
