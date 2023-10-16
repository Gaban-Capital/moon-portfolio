'use client';

import { FC, useEffect, useState } from 'react';
import Home from '@/pages/home';
import Authenticated from '@/pages/authenticated';
import Hotjar from '@hotjar/browser';
import { getTokenFromLocalCookie } from '@/common/lib/auth';
import { AxiosProvider } from '@/common/contexts/AxiosProvider';

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    const siteId = 3694573;
    const hotjarVersion = 6;

    Hotjar.init(siteId, hotjarVersion);

    setToken(getTokenFromLocalCookie());
  }, []);

  return (
    <AxiosProvider>
      <main className="flex flex-col items-center justify-between p-10">
        {/* //? Welcome Component */}
        {token ? <Authenticated /> : <Home />}
      </main>
    </AxiosProvider>
  );
};

export default Page;
