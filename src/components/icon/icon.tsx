import { FC, SVGProps } from 'react';

import { IconName } from '@/common/types/types';

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
}

const Icon: FC<Props> = ({ name, size=24, ...rest }) => {
  const iconPath = `/img/icons/sprite.svg#${name}`;

  return (
    <svg width={size} height={size} {...rest}>
      <use href={iconPath} />
    </svg>
  );
};

export { Icon };
