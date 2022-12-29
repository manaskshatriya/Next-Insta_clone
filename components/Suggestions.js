import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => { 
    const suggestions = [...Array(5)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      // birthdate: faker.date.birthdate(),
      works: faker.company.companyName(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
    // console.log(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5" >
        <h3 className="font-bold text-gray-400" >Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestions.map((profile)=>(
        <div key={profile.id} className="flex items-center justify-between mt-3" >
          <img className="w-10 h-10 rounded-full border p-[2px]" src={profile.avatar}/>
          <div className="flex-1 ml-4" >
             <h2 className="font-semibold text-sm" >{profile.username}</h2>
             <h3 className="text-xs text-gray-400" >Works at {profile.works}</h3>
          </div>
          <button className="text-blue-400 font-semibold text-xs" >Follow</button>
        </div>
        
      ))}
    </div>
  );
}
