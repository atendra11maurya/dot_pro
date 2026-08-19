"use client";
import React, { useRef } from 'react';
import styles from './HeroSection.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '../Card/Card';
import { Play, Eye } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Deep dramatic cinematic zoom centered on the couple's gown tail points & held hands
  const scale = useTransform(scrollYProgress, [0, 0.85, 1], [1, 2.8, 2.8]);

  // Translate so the tail points/hands smoothly animate into center
  const imageY = useTransform(scrollYProgress, [0, 0.85, 1], ["0vh", "-14vh", "-14vh"]);
  const imageX = useTransform(scrollYProgress, [0, 0.85, 1], ["0vw", "-1vw", "-1vw"]);

  // 2. Initial hero typography fades out smoothly as scroll initiates
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [1, 0, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.25, 1], [0, -25, -25]);

  // 3. Vignette mask and edge blur creep inward from borders towards center
  const vignetteMaskOpacity = useTransform(scrollYProgress, [0.15, 0.70, 1], [0, 1, 1]);

  // 4. Solid deep black mask covers the ENTIRE image so it turns 100% deep black at full zoom
  const solidBlackOpacity = useTransform(scrollYProgress, [0.35, 0.85, 1], [0, 1, 1]);

  return (
    <>
      <section className={styles.heroTrack} ref={containerRef} id="hero">
        <div className={styles.stickyContainer}>
          {/* Visual Canvas Layer */}
          <div className={styles.imageWrapper}>
            <motion.img 
              src="/hero-original-full-quality.png" 
              alt="Hero Couple" 
              className={styles.heroImage}
              style={{ 
                scale,
                x: imageX,
                y: imageY,
                transformOrigin: "51% 67%"
              }}
            />
            
            {/* Radial blur overlay from edges */}
            <motion.div 
              className={styles.blurMaskOverlay}
              style={{ opacity: vignetteMaskOpacity }}
            />

            {/* Radial black vignette overlay from edges */}
            <motion.div 
              className={styles.blackVignetteOverlay}
              style={{ opacity: vignetteMaskOpacity }}
            />

            {/* Pure solid black overlay that covers the entire image 100% */}
            <motion.div 
              className={styles.solidBlackOverlay}
              style={{ opacity: solidBlackOpacity }}
            />
          </div>

          {/* Top vignette for initial typography contrast */}
          <motion.div 
            className={styles.topVignette} 
            style={{ opacity: heroTextOpacity }}
          />

          {/* Hero Section Content (Headline, Subtext, Inquire pill) */}
          <div className={styles.contentWrapper}>
            <motion.div 
              className={styles.content}
              style={{ opacity: heroTextOpacity, y: heroTextY }}
            >
              <motion.h1 
                className={styles.headline}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
              >
                Let your royal love story echo...
              </motion.h1>
              
              <motion.p 
                className={styles.subtext}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
              >
                Capturing the majesty, sacred rituals, and raw emotion of India&apos;s most opulent weddings and timeless celebrations.
              </motion.p>

              {/* Email Capture Form — Mercury Style pill input + button */}
              <motion.div 
                className={styles.formRow}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" as const }}
              >
                <input 
                  type="text" 
                  placeholder="Enter email or WhatsApp no." 
                  className={styles.emailInput}
                />
                <button className={styles.formCTA}>Check Dates</button>
                <button className={styles.demoCTA}>Watch Showreel</button>
              </motion.div>
              
              <motion.p 
                className={styles.disclaimer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Available across India &amp; global destinations. Currently booking 2026–2027 Muhurat dates.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURED STORIES SECTION (Portfolio)
          Semantic section in document flow: triggers entrance once,
          never crawls backwards or collapses on scroll up.
          ======================================================== */}
      <section className={styles.portfolioSection} id="portfolio">
        <div className={`container ${styles.portfolioContainer}`}>
          {/* Section Header */}
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
          >
            <span className={styles.sectionBadge}>Selected Royal Stories</span>
            <h2 className={styles.sectionTitle}>Featured Celebrations</h2>
            <p className={styles.sectionSubtitle}>
              A glimpse into the heirloom love stories and grand celebrations we&apos;ve had the honour of filming across India &amp; beyond.
            </p>
          </motion.div>

          {/* Bento Stories Grid */}
          <motion.div 
            className={styles.bentoGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {/* Story 1 */}
            <motion.div variants={fadeInUp} className={styles.bentoItem}>
              <Card className={styles.storyCard}>
                <div 
                  className={styles.cardImagePreview}
                  style={{ backgroundImage: "url('/hero.jpg')" }}
                >
                  <span className={styles.cardTag}>Udaipur | Jagmandir Palace</span>
                  <div className={styles.cardPlayBadge}><Play size={14} fill="#fff" /></div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Aarav & Meera</h3>
                  <p className={styles.cardDesc}>
                    A 4-day royal celebration across Lake Pichola. 4K cinematic heirloom film &amp; medium format royal portraiture.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Story 2 */}
            <motion.div variants={fadeInUp} className={styles.bentoItem}>
              <Card className={styles.storyCard}>
                <div 
                  className={styles.cardImagePreview}
                  style={{ backgroundImage: "url('/thumbnail.jpg')" }}
                >
                  <span className={styles.cardTag}>Jaipur | Rambagh Palace</span>
                  <div className={styles.cardPlayBadge}><Eye size={14} /></div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Kabir & Ananya</h3>
                  <p className={styles.cardDesc}>
                    A majestic palace wedding steeped in royal marigolds, soulful Sufi night, and an editorial Sangeet feature.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Story 3 */}
            <motion.div variants={fadeInUp} className={styles.bentoItem}>
              <Card className={styles.storyCard}>
                <div 
                  className={styles.cardImagePreview}
                  style={{ backgroundImage: "url('/hero-image-new.jpg')" }}
                >
                  <span className={styles.cardTag}>Goa | Cabo Serai Cliffside</span>
                  <div className={styles.cardPlayBadge}><Play size={14} fill="#fff" /></div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Aditya & Rhea</h3>
                  <p className={styles.cardDesc}>
                    Sunset cliffside pheras overlooking the Arabian Sea. Full-length feature film &amp; archival heirloom keepsake.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};







