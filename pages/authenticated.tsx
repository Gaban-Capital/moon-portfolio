import { unsetToken } from '@/common/lib/auth';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface pageProps {}

const Authenticated: FC<pageProps> = ({}) => {
  const router = useRouter();

  return (
    <main className="mt-[100px] lg:max-w-[360px] max-w-[400px]">
      <p>user is authenticated</p>
      <button
        onClick={() => {
          unsetToken();
          window.location.reload();
        }}
      >
        Logout
      </button>
    </main>
  );
};

export default Authenticated;
