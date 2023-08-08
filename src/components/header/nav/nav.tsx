'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

const Nav = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  
  const toggleNav = () => setShowNav(!showNav);
  const closeNav = () => setShowNav(false);

  useEffect(() => {
    closeNav();
  }, [pathname]);

  return (
    <nav className={cn(
        styles.nav,
        showNav && styles.navActive,
      )}
    >
      <button 
        className={styles.navToggle}
        aria-label="Toggle navigation"
        onClick={toggleNav}
      >
        <span className={styles.navToggleItem}></span>
      </button>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
            <Link
              className={cn(
                styles.navLink,
                pathname === '/' && styles.navLinkActive,
              )}
              href="/"
            >
              Home
            </Link>
        </li>
        <li className={styles.navItem}>
            <Link 
              className={cn(
                styles.navLink,
                pathname === '/about' && styles.navLinkActive,
              )}
              href="/about"
            >
              About
            </Link>
        </li>
        <li className={styles.navItem}>
            <Link
              className={cn(
                styles.navLink,
                pathname === '/projects' && styles.navLinkActive,
              )}
              href="/projects"
            >
              Projects
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Nav };