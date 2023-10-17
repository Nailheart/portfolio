import Link from 'next/link';
import Image from 'next/image';

import { Skill } from '@/common/types/types';
import { Icon } from '@/components/icon/icon';
import styles from './styles.module.scss';

const About = () => {
  const skills: Skill[] = [
    { title: 'HTML', iconName: 'html', href: 'https://html.spec.whatwg.org/multipage/' },
    { title: 'CSS', iconName: 'css', href: 'https://www.w3.org/Style/CSS/' },
    { title: 'JavaScript', iconName: 'js', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/' },
    { title: 'TypeScript', iconName: 'typescript', href: 'https://www.typescriptlang.org/' },
    { title: 'Next.js', iconName: 'nextjs', href: 'https://nextjs.org/' },
    { title: 'React', iconName: 'react', href: 'https://react.dev/' },
    { title: 'Sass', iconName: 'sass', href: 'https://sass-lang.com/' },
    { title: 'Gulp', iconName: 'gulp', href: 'https://gulpjs.com/' },
    { title: 'Figma', iconName: 'figma', href: 'https://www.figma.com/' },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <Image
          className={styles.img}
          src="/img/about.png"
          width={550}
          height={320}
          alt="Picture with characters from anime and video games"
        />

        <div className={styles.content}>
          <h2 className={styles.title}>About <span>Me</span></h2>
          <p className={styles.text}>Greetings! I&apos;m <span>Yaroslav Lebedenko</span>, a dedicated frontend developer driven by my love for crafting fully responsive and user-centric websites. My expertise lies in frontend technologies, including <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>. Currently, I&apos;m deeply engaged with <span>React</span>, <span>Next.js</span>, and <span>TypeScript</span>, pushing the boundaries of what can be achieved. I maintain a perpetual commitment to honing my skills and keeping pace with the ever-evolving landscape of industry trends.</p>
        </div>
      </div>

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <ul className={styles.skillsList}>
          {skills.map(skill => (
            <li key={skill.title}>
              <Link
                className={styles.skillsLink}
                href={skill.href}
                title={skill.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  aria-label={skill.title + ' logo'}
                  name={skill.iconName}
                  size={50}
                />    
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { About };