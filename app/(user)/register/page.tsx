'use client';

import axios from 'axios';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { setToken } from '@/common/lib/auth';
import {
  CREATE_ACCOUNT,
  CREATE_YOUR_ACCOUNT,
  GOOGLE_ACCOUNT,
  SIGN_UP,
  SIGN_IN_EMAIL,
} from '@/common/constants/copy';

interface pageProps {}

type RegisterInput = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: FC<pageProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    setError,
  } = useForm<RegisterInput>();
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterInput> = async data => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        message: 'Password does not match',
      });
      return;
    }

    try {
      const { data: authData } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`,
        {
          name: data.name,
          email: data.email,
          username: data.email,
          password: data.password,
        },
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
    <form className="user-auth-forms" onSubmit={handleSubmit(onSubmit)}>
      <>
        <title>{CREATE_ACCOUNT}</title>
      </>
      <h4 className="text-yellow lg:text-2xl text-md">{CREATE_YOUR_ACCOUNT}</h4>
      <input
        type="name"
        placeholder="Name"
        {...register('name', {
          required: 'Name is required',
        })}
      />
      {errors?.name?.message && (
        <div className="text-red mt-2">{errors?.name?.message}</div>
      )}
      <input
        type="email"
        placeholder="Email"
        className="mt-4"
        {...register('email', {
          required: 'Email is required',
        })}
      />
      {errors?.email?.message && (
        <div className="text-red mt-2">{errors?.email?.message}</div>
      )}
      <input
        type="password"
        placeholder="Password"
        className="mt-4"
        {...register('password', {
          required: 'Password is required',
        })}
      />
      {errors?.password?.message && (
        <div className="text-red mt-2">{errors?.password?.message}</div>
      )}
      <input
        type="password"
        placeholder="Confirm Password"
        className="mt-4"
        {...register('confirmPassword', {
          required: 'Confirm password is required',
        })}
      />
      {errors?.confirmPassword?.message && (
        <div className="text-red mt-2">{errors?.confirmPassword?.message}</div>
      )}
      <button
        type="submit"
        className="btn gray-333 text-sm lg:text-base w-full my-4"
      >
        {SIGN_UP}
      </button>
      <p className="text-yellow">Or sign in with</p>
      <button
        type="button"
        className="btn btn-google gray-555 text-sm lg:text-base w-full"
        disabled={isLoading}
      >
        <div className="float-left flex-auto">
          <Image
            width="24"
            height="24"
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-Google-logos-and-brands-those-icons-lineal-those-icons.png"
            alt="external-Google-logos-and-brands-those-icons-lineal-those-icons"
          />
        </div>
        <div>{GOOGLE_ACCOUNT}</div>
      </button>
      <p className="text-yellow">
        Already have an account?{' '}
        <Link href="/login" className="text-pink no-underline	">
          {SIGN_IN_EMAIL}
        </Link>
      </p>
    </form>
  );
};

export default Register;
