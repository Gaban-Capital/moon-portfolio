import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="mt-[100px] lg:max-w-[360px] max-w-[400px]">
      <p>user is authenticated</p>
    </main>
  );
};

export default page;
