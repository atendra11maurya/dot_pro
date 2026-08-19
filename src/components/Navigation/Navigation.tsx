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
          ✦ Now reserving 2026–2027 Wedding Season — Udaipur, Jaipur, Jodhpur, Goa & Global Destinations. →
        </Link>
      </div>

      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={`container ${styles.container}`}>
          <Link href="/" className={styles.brand}>
            DOT PRODUCTION
          </Link>
          <div className={styles.links}>
            <Link href="#films" className={styles.link}>Wedding Films</Link>
            <Link href="#photography" className={styles.link}>Royal Photography</Link>
            <Link href="#services" className={styles.link}>Services</Link>
            <Link href="#about" className={styles.link}>Our Ethos</Link>
            <Link href="#testimonials" className={styles.link}>Stories</Link>
          </div>
          <div className={styles.actions}>
            <Link href="#" className={styles.loginLink}>Client Portal</Link>
            <Button variant="primary">Reserve Dates</Button>
          </div>
        </div>
      </nav>
    </>
  );
};
