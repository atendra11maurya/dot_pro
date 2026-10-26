"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { Button } from '../Button/Button';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

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
          <Link href="/" className={styles.brand} onClick={closeMenu}>
            ANAND PRODUCTIONS
          </Link>

          {/* Desktop Links */}
          <div className={styles.links}>
            <Link href="#portfolio" className={styles.link}>Wedding Films</Link>
            <Link href="#services" className={styles.link}>Royal Photography</Link>
            <Link href="#services" className={styles.link}>What We Craft</Link>
            <Link href="#about" className={styles.link}>Our Ethos</Link>
            <Link href="#testimonials" className={styles.link}>Stories</Link>
          </div>

          {/* Desktop Actions */}
          <div className={styles.actions}>
            <Link href="#" className={styles.loginLink}>Client Portal</Link>
            <Link href="#enquire">
              <Button variant="primary">Reserve Dates</Button>
            </Link>
          </div>

          {/* Mobile Actions (Reserve pill + Hamburger) */}
          <div className={styles.mobileHeaderActions}>
            <Link href="#enquire" className={styles.mobileReserveBtn}>
              Reserve
            </Link>
            <button 
              className={styles.hamburgerBtn} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen / Drawer Menu */}
        <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
          <div className={styles.mobileDrawerContent}>
            <div className={styles.mobileNavLinks}>
              <Link href="#portfolio" className={styles.mobileNavLink} onClick={closeMenu}>
                <span>Featured Films</span>
                <ArrowRight size={18} className={styles.linkArrow} />
              </Link>
              <Link href="#services" className={styles.mobileNavLink} onClick={closeMenu}>
                <span>Royal Photography &amp; Crafts</span>
                <ArrowRight size={18} className={styles.linkArrow} />
              </Link>
              <Link href="#about" className={styles.mobileNavLink} onClick={closeMenu}>
                <span>Our Ethos</span>
                <ArrowRight size={18} className={styles.linkArrow} />
              </Link>
              <Link href="#testimonials" className={styles.mobileNavLink} onClick={closeMenu}>
                <span>Love Stories &amp; Press</span>
                <ArrowRight size={18} className={styles.linkArrow} />
              </Link>
              <Link href="#enquire" className={styles.mobileNavLink} onClick={closeMenu}>
                <span>Reserve Muhurat Dates</span>
                <ArrowRight size={18} className={styles.linkArrow} />
              </Link>
              <Link href="#" className={styles.mobileNavLink} onClick={closeMenu}>
                <span>Client Archival Portal</span>
                <ArrowRight size={18} className={styles.linkArrow} />
              </Link>
            </div>

            <div className={styles.mobileDrawerFooter}>
              <Link href="#enquire" onClick={closeMenu} className={styles.drawerPrimaryBtn}>
                Reserve Your 2026–2027 Dates
              </Link>
              <a 
                href="https://wa.me/?text=Hello%20Anand%20Productions%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20coverage" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.drawerWhatsAppBtn}
                onClick={closeMenu}
              >
                <MessageCircle size={18} />
                <span>Chat Directly on WhatsApp</span>
              </a>
              <p className={styles.mobileDrawerTagline}>
                Anand Productions • Luxury Indian Wedding Cinema
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

