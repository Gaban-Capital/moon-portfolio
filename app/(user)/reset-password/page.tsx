'use client';

import axios from 'axios';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/buttons';
import { setToken } from '@/common/lib/auth';
import { SUBMIT, RESET_PASS, RESET_YOUR_PASS } from '@/common/constants/copy';

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
        <title>{RESET_PASS}</title>
      </>
      <h4 className="text-yellow lg:text-2xl text-md">{RESET_YOUR_PASS}</h4>
      <form className="input-fields" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register('identifier', {
            required: 'Email is required',
          })}
        />
        <Button gray="333" text={SUBMIT} mt={true} disabled={isLoading} />
      </form>
    </div>
  );
};

export default ResetPassword;
