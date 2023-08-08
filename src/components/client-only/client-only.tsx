'use client';

import {
  useState,
  useEffect,
  ReactNode,
  FC
} from 'react';

type Props = {
  children: ReactNode;
}

const ClientOnly: FC<Props> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      {children}
    </>
  );
};

export { ClientOnly };
