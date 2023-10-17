// ? User routes layout template
'use client';

import { FC, ReactNode, useEffect } from 'react';
import Link from 'next/link';

import { MOON_PORTFOLIO } from '@/constants/copy';

import { useRouter } from 'next/navigation';
import useAuth from '@/common/hooks/useAuth';
import Logo from '@/components/logo';

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
