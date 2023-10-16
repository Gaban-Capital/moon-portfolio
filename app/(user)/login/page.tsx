import { FC } from "react";
import Link from "next/link";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="user-auth-forms">
      <>
        <title>Login</title>
      </>
      <h4 className="text-yellow lg:text-2xl text-md">Sign in your account</h4>
      <div className="input-fields">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="Password" />
      </div>
      <button
        type="button"
        className="btn gray-333 text-sm lg:text-lg w-full mb-4"
      >
        Sign In
      </button>
      <Link href="/login" className="float-right text-pink no-underline	">
        Forgot Password?
      </Link>
      <p className="text-yellow mt-10">Or sign in with Google:</p>
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
    </div>
  );
};

export default page;
