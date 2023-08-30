import { PortfolioCard } from "@/components/portfolio-card/portfolio-card";
import styles from './styles.module.scss';

// TODO: add filter for topics ?
const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <h1 className={styles.title}>Library</h1>

        <ul className={styles.list}>
          <li>
            <PortfolioCard
              img="/img/works/youtube-clone.jpg"
              title="YouTube clone"
              description="Simplification youtube clone"
              liveUrl="https://youtube-clone-nailheart.vercel.app/"
              githubUrl="https://github.com/Nailheart/youtube-clone"
              topics="React - Typescript - Rapidapi Youtube v3"
            />
          </li>
          <li>
            <PortfolioCard
              img="/img/works/safari.jpg"
              title="Safari"
              description="Webstore clothing and accessories"
              liveUrl="https://nailheart.github.io/Safari/"
              githubUrl="https://github.com/Nailheart/Safari"
              topics="Sass - Jinja2 - JS"
            />
          </li>
          <li>
            <PortfolioCard
              img="/img/works/mogo.jpg"
              title="Mogo"
              description="Creative Template landing page"
              liveUrl="https://nailheart.github.io/Mogo/"
              githubUrl="https://github.com/Nailheart/Mogo"
              topics="Sass - Simplebar - Accordion"
            />
          </li>
          <li>
            <PortfolioCard
              img="/img/works/cat-energy.jpg"
              title="Cat Energy"
              description="Online food store for cats"
              liveUrl="https://nailheart.github.io/377731-cat-energy-21/"
              githubUrl="https://github.com/Nailheart/377731-cat-energy-21"
              topics="Less - Google map"
            />
          </li>
          <li>
            <PortfolioCard
              img="/img/works/technomart.jpg"
              title="Technomart"
              description="Technomart - online store of building materials and repair tools"
              liveUrl="https://nailheart.github.io/377731-technomart-29/"
              githubUrl="https://github.com/Nailheart/377731-technomart-29"
              topics="CSS - JS - LocalStorage"
            />
          </li>
          <li>
            <PortfolioCard
              img="/img/works/todo.jpg"
              title="Todo"
              description="Simple to do list with save on localStorage"
              liveUrl="https://nailheart.github.io/Todo/"
              githubUrl="https://github.com/Nailheart/Todo"
              topics="Sass - JS - LocalStorage"
            />
          </li>
          <li>
            <PortfolioCard
              img="/img/works/memory-game.jpg"
              title="Memory game"
              description="Responsive memory game"
              liveUrl="https://nailheart.github.io/memory-game/"
              githubUrl="https://github.com/Nailheart/memory-game"
              topics="HTML - SCSS - JS"
            />
          </li>
          <li>
            <PortfolioCard
              img="/img/works/sol-conveter.jpg"
              title="Sol conveter"
              description="Convert sols (Martian solar day) to day (Earth solar day)"
              liveUrl="https://nailheart.github.io/sol-converter/"
              githubUrl="https://github.com/Nailheart/sol-converter"
              topics="HTML - SCSS - JS"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;