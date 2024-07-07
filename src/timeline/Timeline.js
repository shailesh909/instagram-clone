import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "shweta_",
      postImage:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 28,
      timestamp: " 2d",
    },
    {
      user: "shailesh_",
      postImage:
        "https://images.pexels.com/photos/3721535/pexels-photo-3721535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likes: 16,
      timestamp: " 1d",
    },
    {
      user: "vanshika_",
      postImage:
        "https://plus.unsplash.com/premium_photo-1664476767206-aca9db7a65d2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 10,
      timestamp: " 8h",
    },
    {
      user: "jahnvi_",
      postImage:
        "https://www.jstor.org/iiif/2023/01/31/15/104b94f9-79da-4d24-a96c-9c2b89560428_deflate.tif/full/,400/0/default.webp",
      likes: 22,
      timestamp: " 3d",
    },
    {
      user: "sayali_",
      postImage:
        "https://images.pexels.com/photos/3922068/pexels-photo-3922068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likes: 18,
      timestamp: " 1d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
