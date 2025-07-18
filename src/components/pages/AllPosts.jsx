import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../../components";
import service from "../../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);

  service.getPosts([]).then((posts) => {
    if (posts) {
      //   setPost((prev) => [...prev, posts.documents]);
      setPosts(posts.documents);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard post={post}></PostCard>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default AllPosts;
