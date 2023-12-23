import { Card } from '@/components/card/card';
import styles from './styles.module.scss';

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <h1 className={styles.title}>Archive</h1>

        <ul className={styles.list}>
          <li>
            <Card
              img="/img/works/taskify.jpg"
              title="Taskify"
              description="Task manager to keep track of your goals."
              href="https://taskify-nailheart.vercel.app/"
              githubUrl="https://github.com/Nailheart/taskify"
              topics={[
                'nextjs',
                'prisma',
                'typescript',
                'stripe',
                'tailwindcss',
              ]}
            />
          </li>
          <li>
            <Card
              img="/img/works/chatiko.jpg"
              title="Chatiko"
              description="Realtime chat app."
              href="https://chatiko.vercel.app"
              githubUrl="https://github.com/Nailheart/chatiko"
              topics={[
                'nextjs',
                'typescript',
                'pusher',
                'upstash',
                'redis',
                'tailwindcss',
              ]}
            />
          </li>
          <li>
            <Card
              img="/img/works/youtube-clone.jpg"
              title="YouTube"
              description="Youtube clone using rapid api - demo."
              href="https://youtube-clone-nailheart.vercel.app/"
              githubUrl="https://github.com/Nailheart/youtube-clone"
              topics={['react', 'typescript', 'rapid-api', 'sass']}
            />
          </li>
          <li>
            <Card
              img="/img/works/figma-land.jpg"
              title="Figma land"
              description="Landing page."
              href="https://nailheart.github.io/figma-land/"
              githubUrl="https://github.com/Nailheart/figma-land"
              topics={['html', 'sass', 'gulp', 'green-sock']}
            />
          </li>
          <li>
            <Card
              img="/img/works/mogo.jpg"
              title="Mogo"
              description="Creative landing page template."
              href="https://nailheart.github.io/Mogo/"
              githubUrl="https://github.com/Nailheart/Mogo"
              topics={['simple-bar', 'sass', 'gulp', 'google-maps']}
            />
          </li>
          <li>
            <Card
              img="/img/works/safari.jpg"
              title="Safari"
              description="Static multi page store."
              href="https://nailheart.github.io/Safari/"
              githubUrl="https://github.com/Nailheart/Safari"
              topics={['jinja', 'gulp', 'sass']}
            />
          </li>
          <li>
            <Card
              img="/img/works/cat-energy.jpg"
              title="Cat Energy"
              description="Online food store for cats."
              href="https://nailheart.github.io/377731-cat-energy-21/"
              githubUrl="https://github.com/Nailheart/377731-cat-energy-21"
              topics={['html', 'less', 'google-maps']}
            />
          </li>
          <li>
            <Card
              img="/img/works/technomart.jpg"
              title="Technomart"
              description="Store of building materials and repair tools."
              href="https://nailheart.github.io/377731-technomart-29/"
              githubUrl="https://github.com/Nailheart/377731-technomart-29"
              topics={['html', 'css']}
            />
          </li>
          <li>
            <Card
              img="/img/works/todo.jpg"
              title="Todo"
              description="Simple to do list with save on localStorage."
              href="https://nailheart.github.io/Todo/"
              githubUrl="https://github.com/Nailheart/Todo"
              topics={['js', 'sass']}
            />
          </li>
          <li>
            <Card
              img="/img/works/sol-conveter.jpg"
              title="Sol conveter"
              description="Convert sols (Martian solar day) to day (Earth solar day)."
              href="https://nailheart.github.io/sol-converter/"
              githubUrl="https://github.com/Nailheart/sol-converter"
              topics={['html', 'js', 'sass']}
            />
          </li>

          <li>
            <Card
              img="/img/works/memory-game.jpg"
              title="Memory game"
              description="Responsive memory game."
              href="https://nailheart.github.io/memory-game/"
              githubUrl="https://github.com/Nailheart/memory-game"
              topics={['html', 'js', 'sass']}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
