import styles from './styles.module.scss';

// TODO: create spinner component
const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;