"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { Button } from '../Button/Button';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className={styles.banner}>
        <Link href="#services" className={styles.bannerLink}>
          ✦ Now booking 2027 destination weddings — Tuscany, Lake Como, Scottish Highlands. →
        </Link>
      </div>

      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={`container ${styles.container}`}>
          <Link href="/" className={styles.brand}>
            DOT PRODUCTION
          </Link>
          <div className={styles.links}>
            <Link href="#films" className={styles.link}>Films</Link>
            <Link href="#photography" className={styles.link}>Photography</Link>
            <Link href="#services" className={styles.link}>Services</Link>
            <Link href="#about" className={styles.link}>About</Link>
            <Link href="#pricing" className={styles.link}>Pricing</Link>
          </div>
          <div className={styles.actions}>
            <Link href="#" className={styles.loginLink}>Client Login</Link>
            <Button variant="primary">Inquire</Button>
          </div>
        </div>
      </nav>
    </>
  );
};
