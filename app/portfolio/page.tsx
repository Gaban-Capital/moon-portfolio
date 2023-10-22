'use client';

import { FC, useEffect, useState } from 'react';

import Logo from '@/components/logo';
import { MOON_PORTFOLIO } from '@/common/constants/copy';

interface portfolioProps {}

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

const page: FC<portfolioProps> = ({}) => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-logo">
        <Logo />
        <h1 className="logo-text mt-0 brightness-150 text-xl">
          {MOON_PORTFOLIO}
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default page;
