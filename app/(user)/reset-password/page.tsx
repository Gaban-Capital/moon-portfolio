'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { setToken } from '@/common/lib/auth';
import { useRouter } from 'next/navigation';

type ResetPasswordInput = {
  identifier: string;
  password: string;
};

const ResetPassword = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    setError,
  } = useForm<ResetPasswordInput>();
  const router = useRouter();

  const onSubmit: SubmitHandler<ResetPasswordInput> = async data => {
    try {
      router.replace('/');
    } catch (error: any) {}
  };

  return (
    <div className="user-auth-forms">
      <>
        <title>Reset Password</title>
      </>
      <h4 className="text-yellow lg:text-2xl text-md">Reset your password</h4>
      <form className="input-fields" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register('identifier', {
            required: 'Email is required',
          })}
        />
        <button
          type="submit"
          className="btn gray-333 text-sm lg:text-lg w-full my-4"
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
