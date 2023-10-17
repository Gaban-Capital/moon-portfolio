// ? User routes layout template
'use client';

import { FC, ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useAuth from '@/common/hooks/useAuth';

import { MOON_PORTFOLIO } from '@/constants/copy';
// import Alert from '@/components/alert'; // TODO handle auth alerts

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && !loading) router.push('/');
  }, [isAuthenticated, loading]);

  return (
    <main className="flex flex-col items-center justify-between p-10">
      {/* <Alert type={'error'} msg={'Some seriously bad happened.'} /> */}
      <div className="lg:max-w-[360px] max-w-[400px]">
        <div>
          <h1 className="logo-text brightness-150 lg:text-5xl text-4xl">
            <Link href="/">{MOON_PORTFOLIO}</Link>
          </h1>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
