'use client';

import { FC, useEffect, useState } from 'react';

interface pageProps {}

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: [string];
  reactions: number;
};

type Posts = {
  posts: [Post];
};

async function getPosts() {
  let res = await fetch('https://dummyjson.com/posts?limit=3');
  return res.json();
}

const page: FC<pageProps> = ({}) => {
  const [posts, setPosts] = useState<Posts | null>(null);

  useEffect(() => {
    getPosts().then(data => setPosts(data));
  }, []);

  return (
    <div className="portfolio-container">
      <h1>Posts Container</h1>
      <div>
        <ul>{posts?.posts.map(p => <li key={p.id}> {p.title}</li>)}</ul>
      </div>
    </div>
  );
};

export default page;
