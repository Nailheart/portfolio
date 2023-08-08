import { FC } from 'react';
import Link from 'next/link';

import { IconName } from '@/common/types/types';
import { cn } from '@/helpers/helpers';
import { Icon } from '@/components/icon/icon';
import styles from './styles.module.scss';

type Props = {
  href: string;
  title: string;
  iconName: IconName;
  className?: string;
}

const SocialLink: FC<Props> = ({ href, title, iconName, className }) => {
  return (
    <Link
      className={cn(styles.socialLink, className)}
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={styles.socialIcon} name={iconName} />
    </Link>
  );
};

export { SocialLink };