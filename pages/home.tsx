import { FC } from 'react';
import Link from 'next/link';

import { MOON_PORTFOLIO, TAG_LINE } from '@/constants/copy';
import Logo from '@/components/logo';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="mt-[100px] lg:max-w-[360px] max-w-[400px]">
      <div>
        <Logo large={true} />

        <h1 className="logo-text mt-0 brightness-150 lg:text-5xl text-4xl">
          <Link href="/">{MOON_PORTFOLIO}</Link>
        </h1>
        <h4 className="text-yellow lg:text-2xl text-md">{TAG_LINE}</h4>
        <Link href="/register">
          <button
            type="button"
            className="btn gray-333 text-sm lg:text-lg w-full mb-4"
          >
            Sign Up with Email
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-google gray-555 text-sm lg:text-lg w-full"
        >
          <div className="float-left flex-auto">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-Google-logos-and-brands-those-icons-lineal-those-icons.png"
              alt="external-Google-logos-and-brands-those-icons-lineal-those-icons"
            />
          </div>
          <div>Continue with Google</div>
        </button>
        <p className="text-yellow">
          Already have an account?{' '}
          <Link href="/login" className="text-pink no-underline	">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
};

export default page;
