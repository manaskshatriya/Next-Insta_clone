import { useSession } from "next-auth/react";
import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

export default function Feed() {
  const { data: session } = useSession();

  return (
    <main className={`${!session && "!grid-cols-1 !max-w-3xl"} grid grid-cols-1 
    md:gird-cols-2 
    md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto`}>
      {/* Sections*/}
      <section className="col-span-2">
        {/* Story */}
        <Stories />
        {/* Post */}
        <Posts />
      </section>

      {/* section */}
      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            {/* miniprofile */}
            <MiniProfile />
            {/* suggestion */}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}
