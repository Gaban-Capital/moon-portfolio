'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import useAuth from '@/common/hooks/useAuth';
import Loading from '@/components/loading';
import { AxiosProvider } from '@/common/contexts/AxiosProvider';

export default function Template({ children }: { children: React.ReactNode }) {
  const { loading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !loading) router.push('/');
  }, [isAuthenticated, loading]);

  if (loading || !isAuthenticated) {
    return (
      <main className="flex flex-col items-center justify-between p-10">
        <Loading />
      </main>
    );
  }

  return <AxiosProvider>{children}</AxiosProvider>;
}
