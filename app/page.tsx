'use client';

import { FC, useEffect } from 'react';
import Home from '@/pages/home';
import Authenticated from '@/pages/authenticated';
import Hotjar from '@hotjar/browser';
import { AxiosProvider } from '@/common/contexts/AxiosProvider';
import useAuth from '@/common/hooks/useAuth';

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const { loading, isAuthenticated } = useAuth();

  useEffect(() => {
    const siteId = 3694573;
    const hotjarVersion = 6;

    Hotjar.init(siteId, hotjarVersion);
  }, []);

  let page;

  if (loading) {
    page = <p>Loading</p>;
  } else if (isAuthenticated) {
    page = (
      <AxiosProvider>
        <Authenticated />
      </AxiosProvider>
    );
  } else if (!isAuthenticated) {
    page = <Home />;
  }

  return (
    <main className="flex flex-col items-center justify-between p-10">
      {page}
    </main>
  );
};

export default Page;
