import React, { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../fireabse";

export default function Posts() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const unsubsribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
        return unsubsribe();
      }
    );
  }, [db]);
  console.log(posts)
  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}
