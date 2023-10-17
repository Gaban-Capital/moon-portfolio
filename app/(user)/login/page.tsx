'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { setToken } from '@/common/lib/auth';
import { useRouter } from 'next/navigation';

type LoginInput = {
  identifier: string;
  password: string;
};

const Page = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginInput>();

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginInput> = async data => {
    try {
      const { data: authData } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
        data,
      );

      setToken(authData);

      router.replace('/');
    } catch (error: any) {
      setError('password', {
        message: error?.response?.data?.error?.message,
      });
    }
  };

  return (
    <div className="user-auth-forms">
      <>
        <title>Login</title>
      </>
      <h4 className="text-yellow lg:text-2xl text-md">Sign in your account</h4>
      <form className="input-fields" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register('identifier', {
            required: 'Email is required',
          })}
        />
        {errors?.identifier?.message && (
          <div className="text-red mt-2">{errors?.identifier?.message}</div>
        )}
        <input
          className="mt-4"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
          })}
        />
        {errors?.password?.message && (
          <div className="text-red mt-2">{errors?.password?.message}</div>
        )}
        <button
          type="submit"
          className="btn gray-333 text-sm lg:text-lg w-full my-4"
        >
          Sign In
        </button>
      </form>

      <Link href="/login" className="float-right text-pink no-underline	">
        Forgot Password?
      </Link>
      <p className="text-yellow mt-10">Or sign in with Google:</p>
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
        <div>Continue with Google</div>
      </button>
    </div>
  );
};

export default Page;
