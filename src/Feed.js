import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import Post from "./Post";
import StoryReel from "./StoryReel";
import Upload from "./Upload";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <Post />

      {posts.map((post) => (
        <Upload
          key={post.data.id}
          profileMic={post.data.profileMic}
          image={post.data.image}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
        />
      ))}
    </div>
  );
}

export default Feed;
