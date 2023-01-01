import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === '/' ? 'lightBlue' : 'beige';
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      // clean up function
      document.body.style.backgroundColor = '';
    };
  }, [bgColor]);
};
