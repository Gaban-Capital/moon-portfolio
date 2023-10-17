'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <div className="user-auth-forms">
      <>
        <title>Create Account</title>
      </>
      <h4 className="text-yellow lg:text-2xl text-md">Create your account</h4>
      <input type="name" placeholder="name" />
      <input type="email" placeholder="email" className="mt-4" />
      <input type="password" placeholder="Password" className="mt-4" />
      <input type="password" placeholder="Confirm Password" className="mt-4" />
      <button
        type="button"
        className="btn gray-333 text-sm lg:text-lg w-full my-4"
      >
        Sign Up
      </button>
      <p className="text-yellow">Or sign in with</p>
      <button
        type="button"
        className="btn btn-google gray-555 text-sm lg:text-lg w-full"
      >
        <div className="float-left flex-auto">
          <Image
            width="24"
            height="24"
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-Google-logos-and-brands-those-icons-lineal-those-icons.png"
            alt="external-Google-logos-and-brands-those-icons-lineal-those-icons"
          />
        </div>
        <div>Google Account</div>
      </button>
      <p className="text-yellow">
        Already have an account?{' '}
        <Link href="/login" className="text-pink no-underline	">
          Sign in with Email
        </Link>
      </p>
    </div>
  );
};

export default Page;
