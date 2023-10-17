import { FC } from 'react';
import Link from 'next/link';

import { TAG_LINE } from '@/common/constants/copy';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <h4 className="text-yellow lg:text-2xl text-md">{TAG_LINE}</h4>
      <Link href="/register">
        <button
          type="button"
          className="btn gray-333 text-sm lg:text-lg w-full mb-4"
        >
          Sign Up with Email
        </button>
      </Link>
      <button type="button" className="btn gray-555 text-sm lg:text-lg w-full">
        Continue with Google
      </button>
      <p className="text-yellow">
        Already have an account?{' '}
        <Link href="/login" className="text-pink no-underline	">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default page;
