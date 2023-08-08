import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => {
  return (
    <Link className={cn(styles.logo, className)} href="/">
      <Image
        className={styles.img}
        src="/img/logo.svg"
        width="60"
        height="35"
        alt="Logo"
      />
      <span className={styles.text}>Nailheart</span>
    </Link>
  );
};

export { Logo };