import Image from 'next/image';
import { Space_Grotesk } from 'next/font/google';

interface ButtonProps {
  gray: string; // ? 333, 555
  text: string;
  mt?: boolean;
  mb?: boolean;
  google?: boolean;
  disabled?: boolean;
}

const space_grotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] });

function GoogleIcon() {
  return (
    <div className="float-left flex-auto">
      <Image
        width="24"
        height="24"
        src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-Google-logos-and-brands-those-icons-lineal-those-icons.png"
        alt="external-Google-logos-and-brands-those-icons-lineal-those-icons"
      />
    </div>
  );
}

export const Button = ({
  gray,
  text,
  mt,
  mb,
  google,
  disabled,
}: ButtonProps) => {
  const mClasses = `${mt && 'my-4'} ${mb && 'mb-4'}`;

  return (
    <button
      type="button"
      className={`btn gray-${gray} text-sm lg:text-base w-full ${mClasses} ${space_grotesk.className}`}
      disabled={disabled}
    >
      {google && <GoogleIcon />}
      {text}
    </button>
  );
};
