import { ProgressList } from '@/components/progress-list/progress-list';

import styles from './styles.module.scss';
import { Underline } from '@/components/animations/animations';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.experience}>
          <h1 className={styles.title}>
            <Underline speed={2} lineColor="var(--color-red)">
              Education
            </Underline>
          </h1>

          <ProgressList className={styles.progressList}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                Layout Designer <span>(Freelance)</span>
              </h3>
              <div className={styles.cardInfo}>
                <time 
                  className={styles.cardTime}
                  dateTime="2021-01-20/2021-03-31"
                >
                  Jan - Mar 2021 | Remote
                </time>
              </div>
              <p className={styles.cardDescription}>Development of a Multi-Modal Ticket Booking Service. My experience on this project included developing HTML and CSS for further conversion into React, creating responsive and pixel-perfect designs, using the Gulp build for optimization, and utilizing GitLab for version control and collaboration.</p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                Frontend Developer <span>(Freelance)</span>
              </h3>
              <div className={styles.cardInfo}>
                <time 
                  className={styles.cardTime}
                  dateTime="2021-11-09/2021-12-28"
                >
                  Nov - Dec 2021 | Remote
                </time>
              </div>
              <p className={styles.cardDescription}>Development of an E-commerce Online Store using Flask. My experience in this project involved creating responsive pages and macros using the Jinja2 template engine, as well as implementing and customizing sliders, lightboxes, and popups.</p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                Mobile Developer <span>(Binary Studio Academy)</span>
              </h3>
              <div className={styles.cardInfo}>
                <time 
                  className={styles.cardTime}
                  dateTime="2022-05-10/2022-09-21"
                >
                  Jul - Sep 2022 | Courses | Remote
                </time>
              </div>
              <p className={styles.cardDescription}>I worked as part of a collaborative team responsible for developing the mobile application for an educational platform. During this project, I gained hands-on experience with a diverse range of technologies, including TypeScript, JavaScript (JS), JSON Web Tokens (JWT), Stripe for payment processing, React Native for cross-platform development, React Navigation for seamless navigation within the app, and Redux Toolkit for state management. Additionally, I was also involved in utilizing React Native MMKW (Missing Manual Keyboard Warrior) for certain functionalities within the app. This opportunity allowed me to enhance my skills and contribute effectively to the success of the project.</p>
            </div>
          </ProgressList>

          <h2>
            <Underline speed={2} lineColor="var(--color-red)">
              Experience
            </Underline>
          </h2>

          <ProgressList className={styles.progressList}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                Layout Designer <span>(Freelance)</span>
              </h3>
              <div className={styles.cardInfo}>
                <time 
                  className={styles.cardTime}
                  dateTime="2021-01-20/2021-03-31"
                >
                  Jan - Mar 2021 | Remote
                </time>
              </div>
              <p className={styles.cardDescription}>Development of a Multi-Modal Ticket Booking Service. My experience on this project included developing HTML and CSS for further conversion into React, creating responsive and pixel-perfect designs, using the Gulp build for optimization, and utilizing GitLab for version control and collaboration.</p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                Frontend Developer <span>(Freelance)</span>
              </h3>
              <div className={styles.cardInfo}>
                <time 
                  className={styles.cardTime}
                  dateTime="2021-11-09/2021-12-28"
                >
                  Nov - Dec 2021 | Remote
                </time>
              </div>
              <p className={styles.cardDescription}>Development of an E-commerce Online Store using Flask. My experience in this project involved creating responsive pages and macros using the Jinja2 template engine, as well as implementing and customizing sliders, lightboxes, and popups.</p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                Mobile Developer <span>(Binary Studio Academy)</span>
              </h3>
              <div className={styles.cardInfo}>
                <time 
                  className={styles.cardTime}
                  dateTime="2022-05-10/2022-09-21"
                >
                  Jul - Sep 2022 | Courses | Remote
                </time>
              </div>
              <p className={styles.cardDescription}>I worked as part of a collaborative team responsible for developing the mobile application for an educational platform. During this project, I gained hands-on experience with a diverse range of technologies, including TypeScript, JavaScript (JS), JSON Web Tokens (JWT), Stripe for payment processing, React Native for cross-platform development, React Navigation for seamless navigation within the app, and Redux Toolkit for state management. Additionally, I was also involved in utilizing React Native MMKW (Missing Manual Keyboard Warrior) for certain functionalities within the app. This opportunity allowed me to enhance my skills and contribute effectively to the success of the project.</p>
            </div>
          </ProgressList>
        </div>
      </div>
    </section>
  );
};

export default About;