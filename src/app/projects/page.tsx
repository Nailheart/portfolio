import { Project } from '@/components/project/project';
import { SocialLink } from '@/components/social-link/social-link';
import { Underline } from '@/components/animations/animations';
import styles from './styles.module.scss';

const Projects = () => {
  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Underline speed={2} lineColor="var(--color-red)">
            Projects
          </Underline>
        </h1>

        {/* TODO: add animation to project */}
        <ul className={styles.list}>
          <li>
            <Project
              title='YouTube clone'
              description='A simplified version of YouTube.'
              topics='React - Typescript - Rapidapi Youtube v3 - 
              React Router v6'
              img='/img/projects/youtube-clone.jpg'
              homepage='https://youtube-clone-nailheart.vercel.app'
              social={
                <SocialLink 
                  title='Github'
                  iconName='github'
                  href='https://github.com/Nailheart/youtube-clone'
                />
              }
            />
          </li>
          <li>
            <Project
              title='Safari'
              description='Webstore multi-page website clothing and accessories.'
              topics='Sass - Jinja2 - JavaScript'
              img='/img/projects/safari.jpg'
              homepage='https://nailheart.github.io/Safari'
              social={
                <>
                  <SocialLink 
                    title='Github'
                    iconName='github'
                    href='https://github.com/Nailheart/Safari'
                  />
                  <SocialLink 
                    title='Safari layout'
                    iconName='link'
                    href='https://www.figma.com/community/file/886136959951611710/Safari-webstore'
                  />
                </>
              }
            />
          </li>
          <li>
            <Project
              title='Mogo'
              description='Creative landing page template.'
              topics='Sass - Simplebar - Accordion'
              img='/img/projects/mogo.jpg'
              homepage='https://nailheart.github.io/Mogo'
              social={
                <>
                  <SocialLink 
                    title='Github'
                    iconName='github'
                    href='https://github.com/Nailheart/Mogo'
                  />
                  <SocialLink 
                    title='Mogo layout'
                    iconName='link'
                    href='http://psd-html-css.ru/templates/mogo-besplatnyy-psd-shablon-lendingovoy-stranicy'
                  />
                </>
              }
            />
          </li>
          <li>
            <Project
              title='Cat Energy'
              description='Online food store for cats. Developed as part of the HTML & CSS Adaptive Website Coding and Automation course.'
              topics='Less - Google map - Gulp'
              img='/img/projects/cat-energy.jpg'
              homepage='https://nailheart.github.io/377731-cat-energy-21'
              social={
                <SocialLink 
                  title='Github'
                  iconName='github'
                  href='https://github.com/Nailheart/377731-cat-energy-21'
                />
              }
            />
          </li>
          <li>
            <Project
              title='Technomart'
              description='Two static pages of the Technomart website - an online store of building materials and repair tools. Developed as part of the HTML & CSS Professional Website Coding course.'
              topics='CSS - JavaScript - LocalStorage'
              img='/img/projects/technomart.jpg'
              homepage='https://nailheart.github.io/377731-technomart-29'
              social={
                <SocialLink 
                  title='Github'
                  iconName='github'
                  href='https://github.com/Nailheart/377731-technomart-29'
                />
              }
            />
          </li>
          <li>
            <Project
              title='Todo'
              description='Simple to do list with save on localStorage.'
              topics='Sass - JavaScript - LocalStorage'
              img='/img/projects/todo.jpg'
              homepage='https://nailheart.github.io/Todo/'
              social={
                <SocialLink 
                  title='Github'
                  iconName='github'
                  href='https://github.com/Nailheart/Todo'
                />
              }
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;