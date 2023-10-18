'use client';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { setToken } from '@/common/lib/auth';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/buttons';
import {
  SIGN_IN,
  CONTINUE_GOOGLE,
  FORGOT_PASS,
  OR_SIGN_GOOGLE,
} from '@/common/constants/copy';

type LoginInput = {
  identifier: string;
  password: string;
};

const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
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

      router.replace('/portfolio');
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
        <Button
          gray="333"
          text={SIGN_IN}
          mt={true}
          mb={true}
          disabled={isLoading}
          type="submit"
        />
      </form>

      <Link
        href="/reset-password"
        className="float-right text-pink no-underline	"
      >
        {FORGOT_PASS}
      </Link>
      <p className="text-yellow mt-10">{OR_SIGN_GOOGLE}</p>

      <Button gray="555" text={CONTINUE_GOOGLE} google={true} />
    </div>
  );
};

export default Login;
