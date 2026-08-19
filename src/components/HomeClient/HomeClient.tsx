"use client";
import React, { useState, useEffect } from 'react';
import styles from './HomeClient.module.css';
import { motion } from 'framer-motion';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

/* Testimonial Data */
const testimonials = [
  {
    tag: "Destination",
    quote: "Dot Production didn't just film our wedding — they immortalized it. Every frame feels like a painting. We've watched our film over fifty times.",
    name: "Aarav & Priya",
    role: "Lake Como, Italy"
  },
  {
    tag: "Editorial",
    quote: "Their presence was invisible yet they captured the most intimate moments we didn't even know existed. This is storytelling at its finest.",
    name: "James & Charlotte",
    role: "Scottish Highlands"
  },
  {
    tag: "Feature Film",
    quote: "We wanted cinema, not a wedding video. Dot Production delivered something that belongs on the big screen. Our families were speechless.",
    name: "Sofia & Marcus",
    role: "Santorini, Greece"
  }
];

export const HomeClient: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ============================================
          SECTION 2: WHAT WE CREATE
          Wedding Photography / Wedding Films / Wedding Albums
          ============================================ */}
      <section className={`section container ${styles.servicesSection}`} id="services">
        <motion.div 
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className={styles.sectionTitle}>What We Create</h2>
          <p className={styles.sectionSubtitle}>Three crafts, one cinematic vision — tailored for the discerning couple.</p>
        </motion.div>
        
        <motion.div 
          className={styles.bentoGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.bentoItem}>
            <Card className={styles.bentoCard}>
              <div className={styles.cardPlaceholder}></div>
              <h3 className={styles.cardTitle}>Wedding Films</h3>
              <p className={styles.cardDesc}>A hushed, premium approach to storytelling. We craft 20–30 minute heirloom films that capture the architectural beauty and quiet elegance of your day.</p>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.bentoItem}>
            <Card className={styles.bentoCard}>
              <div className={styles.cardPlaceholder}></div>
              <h3 className={styles.cardTitle}>Wedding Photography</h3>
              <p className={styles.cardDesc}>Vogue-inspired stills captured on medium format. Every frame composed with intention — no candid chaos, just considered, architectural imagery.</p>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.bentoItem}>
            <Card className={styles.bentoCard}>
              <div className={styles.cardPlaceholder}></div>
              <h3 className={styles.cardTitle}>Wedding Albums</h3>
              <p className={styles.cardDesc}>Hand-bound heirloom albums printed on fine art paper. A tangible, archival keepsake designed to last generations.</p>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 4: ABOUT / OUR APPROACH
          (Merges old Statement section + Approach sticky scroll)
          ============================================ */}
      <section className={styles.approachSection} id="about">
        <div className={`container ${styles.approachContainer}`}>
          <div className={styles.approachSticky}>
            <motion.h2 
              className={styles.sectionTitle}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Our Approach
            </motion.h2>
            <motion.p 
              className={styles.statementText}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              You&apos;re creating a moment to stand the test of time. So are we.
            </motion.p>
            <motion.p 
              className={styles.approachText}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              We believe in an unobtrusive presence. Your day is a masterpiece, and we are simply the curators. No forced posing, just authentic, editorial observation.
            </motion.p>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <Button variant="ghost">
                Learn More <ArrowRight size={16} style={{ marginLeft: 8 }} />
              </Button>
            </motion.div>
          </div>
          <div className={styles.approachScroll}>
            <div className={styles.scrollPlaceholder}></div>
            <div className={styles.scrollPlaceholder}></div>
            <div className={styles.scrollPlaceholder}></div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: TESTIMONIALS / TRUST
          (Merges Logo Cloud + Stats + Testimonial Carousel + Press)
          ============================================ */}
      <section className={`section ${styles.trustSection}`} id="testimonials">
        {/* Logo Cloud */}
        <div className={styles.logoCloud}>
          <div className={`container ${styles.logoContainer}`}>
            <p className={styles.logoLabel}>Featured in</p>
            <div className={styles.logos}>
              <span className={styles.logoItem}>VOGUE</span>
              <span className={styles.logoItem}>BRIDES</span>
              <span className={styles.logoItem}>HARPER&apos;S BAZAAR</span>
              <span className={styles.logoItem}>OVER THE MOON</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className={`container`}>
          <motion.div 
            className={styles.statsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className={styles.stat} variants={fadeInUp}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Weddings filmed</span>
            </motion.div>
            <motion.div className={styles.stat} variants={fadeInUp}>
              <span className={styles.statNumber}>32</span>
              <span className={styles.statLabel}>Countries</span>
            </motion.div>
            <motion.div className={styles.stat} variants={fadeInUp}>
              <span className={styles.statNumber}>12</span>
              <span className={styles.statLabel}>International awards</span>
            </motion.div>
            <motion.div className={styles.stat} variants={fadeInUp}>
              <span className={styles.statNumber}>4.9</span>
              <span className={styles.statLabel}>Google rating</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className={`container`} style={{ paddingTop: 'var(--spacing-72)' }}>
          <div className={styles.testimonialCard}>
            <span className={styles.testimonialTag}>{testimonials[activeTestimonial].tag}</span>
            <blockquote className={styles.testimonialQuote}>
              &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <p className={styles.authorName}>{testimonials[activeTestimonial].name}</p>
              <p className={styles.authorRole}>{testimonials[activeTestimonial].role}</p>
            </div>
            <div className={styles.progressBars}>
              {testimonials.map((_, i) => (
                <div key={i} className={styles.progressTrack}>
                  <div 
                    className={`${styles.progressFill} ${i === activeTestimonial ? styles.progressActive : ''} ${i < activeTestimonial ? styles.progressDone : ''}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Press Cards */}
        <div className={`container`} style={{ paddingTop: 'var(--spacing-72)' }}>
          <motion.h3 
            className={styles.pressTitle}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            In the spotlight
          </motion.h3>
          <motion.div 
            className={styles.pressGrid}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.pressCard}>
              <div className={styles.pressLogo}>VOGUE</div>
              <h3 className={styles.pressHeadline}>&ldquo;The cinematographers redefining wedding films&rdquo;</h3>
              <p className={styles.pressExcerpt}>Vogue Weddings, 2025</p>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.pressCard}>
              <div className={styles.pressLogo}>BRIDES</div>
              <h3 className={styles.pressHeadline}>&ldquo;Top 10 wedding filmmakers you need to know&rdquo;</h3>
              <p className={styles.pressExcerpt}>Brides Magazine, 2024</p>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.pressCard}>
              <div className={styles.pressLogo}>BAZAAR</div>
              <h3 className={styles.pressHeadline}>&ldquo;Where editorial photography meets cinema&rdquo;</h3>
              <p className={styles.pressExcerpt}>Harper&apos;s Bazaar, 2025</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: ENQUIRE / CONTACT
          (Reuses old Final CTA)
          ============================================ */}
      <section className={styles.finalCTA} id="enquire">
        <div className={`container ${styles.finalCTAContainer}`}>
          <motion.h2 
            className={styles.finalTitle}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            Begin your story with us.
          </motion.h2>
          <motion.p
            className={styles.sectionSubtitle}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            Available worldwide for destination weddings. Currently booking 2027.
          </motion.p>
          <motion.div 
            className={styles.finalButtons}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <Button variant="primary">Inquire for 2027</Button>
            <Button variant="ghost">View Reel</Button>
          </motion.div>
        </div>
      </section>

      {/* Footer — unchanged */}
      <footer className={styles.footer}>
        <div className={`container`}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>DOT PRODUCTION</span>
              <p className={styles.footerTagline}>Cinematic wedding films<br/>& editorial photography.</p>
            </div>
            <div className={styles.footerColumns}>
              <div className={styles.footerCol}>
                <h4 className={styles.footerColTitle}>Services</h4>
                <a href="#" className={styles.footerLink}>Feature Films</a>
                <a href="#" className={styles.footerLink}>Photography</a>
                <a href="#" className={styles.footerLink}>Destination</a>
                <a href="#" className={styles.footerLink}>Same-Day Edit</a>
              </div>
              <div className={styles.footerCol}>
                <h4 className={styles.footerColTitle}>Company</h4>
                <a href="#" className={styles.footerLink}>About</a>
                <a href="#" className={styles.footerLink}>Portfolio</a>
                <a href="#" className={styles.footerLink}>Journal</a>
                <a href="#" className={styles.footerLink}>Pricing</a>
              </div>
              <div className={styles.footerCol}>
                <h4 className={styles.footerColTitle}>Connect</h4>
                <a href="#" className={styles.footerLink}>Instagram</a>
                <a href="#" className={styles.footerLink}>Vimeo</a>
                <a href="#" className={styles.footerLink}>Pinterest</a>
                <a href="#" className={styles.footerLink}>Contact</a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.footerDisclaimer}>© 2025 Dot Production. All rights reserved. Photography and films are for personal use only.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
