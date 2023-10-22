// import { useState } from 'react';

interface SearchProps {
  text: string;
}

export default function Search({ text }: SearchProps) {
  // const [brighness, setBrightness] = useState('');

  // const defaultClasses =
  //   'w-full border text-white px-4 py-3 rounded cursor-pointer relative';
  // const colorClass = type == 'error' ? 'bg-red' : 'bg-green';
  // let finalColorClass = defaultClasses.concat(` ${colorClass}`);

  return (
    <>
      <input type="search" placeholder="Search coins" />
    </>
  );
}
