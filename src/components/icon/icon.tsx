import { FC, SVGProps } from 'react';

import { IconName } from '@/common/types/types';
import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

import ArrowUp from './svg/arrow-up.svg';
import Code from './svg/code.svg';
import CSS from './svg/css.svg';
import ExternalLink from './svg/external-link.svg';
import Figma from './svg/figma.svg';
import Github from './svg/github.svg';
import Gulp from './svg/gulp.svg';
import HTML from './svg/html.svg';
import JS from './svg/js.svg';
import LinkedIn from './svg/linkedin.svg';
import Location from './svg/location.svg';
import Mail from './svg/mail.svg';
import NextJs from './svg/nextjs.svg';
import React from './svg/react.svg';
import Rocket from './svg/rocket.svg';
import Sass from './svg/sass.svg';
import Skype from './svg/skype.svg';
import Telegram from './svg/tg.svg';
import TypeScript from './svg/typescript.svg';
import GoogleMaps from './svg/google-maps.svg';
import Jinja from './svg/jinja.svg';
import Less from './svg/less.svg';
import Linkify from './svg/linkify.svg';
import RapidApi from './svg/rapid-api.svg';
import SimpleBar from './svg/simple-bar.svg';
import Pusher from './svg/pusher.svg';
import Upstash from './svg/upstash.svg';
import Redis from './svg/redis.svg';
import Tailwindcss from './svg/tailwindcss.svg';
import Gsap from './svg/gsap.svg';

const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  arrowUp: ArrowUp,
  code: Code,
  css: CSS,
  externalLink: ExternalLink,
  figma: Figma,
  github: Github,
  gulp: Gulp,
  html: HTML,
  js: JS,
  linkedIn: LinkedIn,
  location: Location,
  mail: Mail,
  nextjs: NextJs,
  react: React,
  rocket: Rocket,
  sass: Sass,
  skype: Skype,
  telegram: Telegram,
  typescript: TypeScript,
  'google-maps': GoogleMaps,
  jinja: Jinja,
  less: Less,
  linkify: Linkify,
  'rapid-api': RapidApi,
  'simple-bar': SimpleBar,
  pusher: Pusher,
  upstash: Upstash,
  redis: Redis,
  tailwindcss: Tailwindcss,
  'green-sock': Gsap,
}

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number | string;
}

const Icon: FC<Props> = ({ name, size=24, className, ...rest }) => {
  const SVG = icons[name];
  
  return (
    <SVG className={cn(styles.icon, className)} width={size} height={size} {...rest} />
  );
};

export { Icon };
