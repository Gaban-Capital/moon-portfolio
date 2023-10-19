'use client';

import { FC, useEffect, useState } from 'react';

interface pageProps {}

// type Post = {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
//   tags: [string];
//   reactions: number;
// };

// type Posts = {
//   posts: [Post];
// };

async function getPosts() {
  let res = await fetch('https://dummyjson.com/posts?limit=3');
  return res.json();
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="portfolio-container">
      <h1>Portfolio Container</h1>
      <div></div>
    </div>
  );
};

export default page;
