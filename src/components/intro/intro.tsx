import PC from '@/../public/img/pc.svg';
import styles from './styles.module.scss';

const Intro = () => {
  return (
    <section className={styles.intro}>
      {/* TODO: add coffee animation or enable / disable monitor */}
      <PC className={styles.pc} />

      <div className={styles.description}>
        <h1 className={styles.title}>
          Hello there! 👋<br/>
          I'm <span>Yaroslav Lebedenko</span>
        </h1>

        <p className={styles.text}>I'm a frontend developer from Ukraine, and this is my small portfolio website. Thank you for visiting, and I hope you enjoy exploring my portfolio.</p>
      </div>
    </section>
  );
};

export { Intro };