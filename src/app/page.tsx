import styles from './styles.module.scss';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.descripiton}>
          <h1 className={styles.title}>
            Hello there! 👋<br/>
            I'm <span>Yaroslav Lebedenko</span>
          </h1>
          <p className={styles.text}>I'm a front-end developer from Ukraine, and this is my small portfolio website. Thank you for visiting, and I hope you enjoy exploring my portfolio.</p>
        </div>

        <div className={styles.photo}></div>
      </div>
    </section>
  );
};

export default Home;
