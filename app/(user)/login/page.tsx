import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <>
        <title>Login</title>
      </>
      <h4 className="text-yellow lg:text-2xl text-md">Sign in your account</h4>
      <input type="email" />
      <input type="password" />
      <button
        type="button"
        className="btn gray-333 text-sm lg:text-lg w-full mb-4"
      >
        Sign In
      </button>
      <p>Forgot password?</p>
      <p>Or sign in with Google:</p>
      <button type="button" className="btn gray-555 text-sm lg:text-lg w-full">
        Continue with Google
      </button>
    </div>
  );
};

export default page;
