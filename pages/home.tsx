import { FC } from 'react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

import Logo from '@/components/logo';
import { Button } from '@/components/buttons';
import {
  MOON_PORTFOLIO,
  TAG_LINE,
  SIGN_UP_EMAIL,
  CONTINUE_GOOGLE,
} from '@/common/constants/copy';

interface pageProps {}

const poppins = Poppins({ weight: '500', style: 'normal', subsets: ['latin'] });

const Page: FC<pageProps> = ({}) => {
  return (
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

        <Button gray="555" text={CONTINUE_GOOGLE} google={true} />

        <p className={`text-yellow ${poppins.className}`}>
          Already have an account?{' '}
          <Link href="/login" className="text-pink no-underline	">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Page;
