'use client';

import { FC, useEffect } from 'react';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import useAuth from '@/common/hooks/useAuth';
import {
  MOON_PORTFOLIO,
  TAG_LINE,
  SIGN_UP_EMAIL,
  CONTINUE_GOOGLE,
} from '@/common/constants/copy';
import { Button } from '@/components/buttons';
import Logo from '@/components/logo';
import Loading from '@/components/loading';
import useGoogleAuth from '@/common/hooks/useGoogleAuth';

interface pageProps {}

const poppins = Poppins({ weight: '500', style: 'normal', subsets: ['latin'] });

const Page: FC<pageProps> = ({}) => {
  const { loading, isAuthenticated } = useAuth();
  const router = useRouter();
  const { login, loading: loadingGoogle } = useGoogleAuth();

  useEffect(() => {
    if (isAuthenticated && !loading) router.push('/portfolio');
  }, [isAuthenticated, loading]);

  if (loading || isAuthenticated) {
    return (
      <main className="flex flex-col items-center justify-between p-10">
        <Loading />
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-between p-10">
      <main className="mt-[100px] lg:max-w-[360px] max-w-[400px]">
        <div>
          <Logo large={true} />

          <h1 className="logo-text mt-0 brightness-150 lg:text-5xl text-4xl">
            <Link href="/">{MOON_PORTFOLIO}</Link>
          </h1>
          <h4 className="text-yellow lg:text-2xl text-md">{TAG_LINE}</h4>

          <Link href="/register" className="no-underline">
            <Button gray="333" text={SIGN_UP_EMAIL} mb={true} />
          </Link>

          <Button
            gray="555"
            text={CONTINUE_GOOGLE}
            google={true}
            loading={loadingGoogle}
            onClick={login}
          />

          <p className={`text-yellow ${poppins.className}`}>
            Already have an account?{' '}
            <Link href="/login" className="text-pink no-underline	">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </main>
  );
};

export default Page;
