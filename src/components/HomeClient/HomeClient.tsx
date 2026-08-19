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
    tag: "Udaipur Palace",
    quote: "Dot Production didn't just film our wedding — they immortalized the very soul of our families. Every frame looks like a Sanjay Leela Bhansali film. Our parents wept tears of joy rewatching our vidaai and pheras.",
    name: "Aarav & Meera Singhania",
    role: "Jagmandir Island Palace, Udaipur"
  },
  {
    tag: "Jaipur Heritage",
    quote: "Their team was virtually invisible yet captured the most intimate, stolen glances we didn't even notice. The Sangeet edit had all 800 guests dancing on their feet at our reception!",
    name: "Kabir & Ananya Roy Kapur",
    role: "Rambagh Palace, Jaipur"
  },
  {
    tag: "Coastal Shaadi",
    quote: "We wanted cinema, not a cookie-cutter wedding video. Dot Production delivered something that belongs on the big screen. The colors, audio fidelity, and emotional storytelling are peerless.",
    name: "Aditya & Rhea Kirloskar",
    role: "Cabo Serai, Goa"
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
          <h2 className={styles.sectionTitle}>What We Craft</h2>
          <p className={styles.sectionSubtitle}>Three bespoke crafts, one cinematic vision — tailored for the grand Indian wedding.</p>
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
              <h3 className={styles.cardTitle}>Royal Wedding Cinema</h3>
              <p className={styles.cardDesc}>A hushed, premium approach to storytelling. We craft 20–30 minute heirloom feature films that capture the architectural grandeur, sacred Vedic rituals, high-energy sangeet, and heartfelt vidaai.</p>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.bentoItem}>
            <Card className={styles.bentoCard}>
              <div className={styles.cardPlaceholder}></div>
              <h3 className={styles.cardTitle}>Editorial Royal Photography</h3>
              <p className={styles.cardDesc}>Vogue India-inspired stills captured on medium format. Every frame composed with intention — royal portraiture paired with authentic, unscripted family warmth.</p>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.bentoItem}>
            <Card className={styles.bentoCard}>
              <div className={styles.cardPlaceholder}></div>
              <h3 className={styles.cardTitle}>Handcrafted Heirloom Albums</h3>
              <p className={styles.cardDesc}>Bespoke, silk-bound heirloom albums printed on museum-grade Italian fine art paper. A tangible, timeless archival keepsake designed to last generations.</p>
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
              Our Ethos
            </motion.h2>
            <motion.p 
              className={styles.statementText}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              You are creating a legacy that will echo for centuries. We ensure it never fades.
            </motion.p>
            <motion.p 
              className={styles.approachText}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              We honor the sanctity of Indian rituals — from the sacred agni of the pheras to the exuberance of the baraat and the tearful intimacy of the vidaai. An unobtrusive presence capturing unposed royalty and genuine emotions without turning your celebration into a movie set.
            </motion.p>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <Button variant="ghost">
                Explore Our Ethos <ArrowRight size={16} style={{ marginLeft: 8 }} />
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
            <p className={styles.logoLabel}>Featured in &amp; Celebrated by</p>
            <div className={styles.logos}>
              <span className={styles.logoItem}>VOGUE INDIA</span>
              <span className={styles.logoItem}>WEDMEGOOD</span>
              <span className={styles.logoItem}>HARPER&apos;S BAZAAR</span>
              <span className={styles.logoItem}>WEDDINGSUTRA</span>
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
              <span className={styles.statLabel}>Weddings immortalized</span>
            </motion.div>
            <motion.div className={styles.stat} variants={fadeInUp}>
              <span className={styles.statNumber}>28</span>
              <span className={styles.statLabel}>States &amp; Global Venues</span>
            </motion.div>
            <motion.div className={styles.stat} variants={fadeInUp}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>National &amp; Global Awards</span>
            </motion.div>
            <motion.div className={styles.stat} variants={fadeInUp}>
              <span className={styles.statNumber}>4.9★</span>
              <span className={styles.statLabel}>Rated by 300+ Couples</span>
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
                    style={{ animationDuration: '6s' }}
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
            In the Spotlight
          </motion.h3>
          <motion.div 
            className={styles.pressGrid}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.pressCard}>
              <div className={styles.pressLogo}>VOGUE INDIA</div>
              <h3 className={styles.pressHeadline}>&ldquo;The cinematographers redefining how modern India experiences royal weddings&rdquo;</h3>
              <p className={styles.pressExcerpt}>Vogue Weddings Special, 2025</p>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.pressCard}>
              <div className={styles.pressLogo}>WEDDINGSUTRA</div>
              <h3 className={styles.pressHeadline}>&ldquo;Top luxury wedding filmmakers you need for your destination palace wedding&rdquo;</h3>
              <p className={styles.pressExcerpt}>WeddingSutra Influencer Awards</p>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.pressCard}>
              <div className={styles.pressLogo}>HARPER&apos;S BAZAAR</div>
              <h3 className={styles.pressHeadline}>&ldquo;Where royal Indian heritage meets modern high-fashion editorial cinema&rdquo;</h3>
              <p className={styles.pressExcerpt}>Harper&apos;s Bazaar Bride India</p>
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
            Now reserving dates for the upcoming 2026–2027 Indian Wedding &amp; Muhurat Season across India &amp; worldwide.
          </motion.p>
          <motion.div 
            className={styles.finalButtons}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <Button variant="primary">Reserve Your Muhurat Dates</Button>
            <Button variant="ghost">Watch Showreel</Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`container`}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>DOT PRODUCTION</span>
              <p className={styles.footerTagline}>Luxury Indian wedding films<br/>&amp; editorial heritage photography.</p>
            </div>
            <div className={styles.footerColumns}>
              <div className={styles.footerCol}>
                <h4 className={styles.footerColTitle}>Services</h4>
                <a href="#" className={styles.footerLink}>Grand Feature Films</a>
                <a href="#" className={styles.footerLink}>Royal Photography</a>
                <a href="#" className={styles.footerLink}>Destination Shaadi</a>
                <a href="#" className={styles.footerLink}>Same-Day Sangeet Edit</a>
              </div>
              <div className={styles.footerCol}>
                <h4 className={styles.footerColTitle}>Company</h4>
                <a href="#" className={styles.footerLink}>Our Ethos</a>
                <a href="#" className={styles.footerLink}>Royal Portfolio</a>
                <a href="#" className={styles.footerLink}>Journal &amp; Stories</a>
                <a href="#" className={styles.footerLink}>Muhurat Pricing</a>
              </div>
              <div className={styles.footerCol}>
                <h4 className={styles.footerColTitle}>Connect</h4>
                <a href="#" className={styles.footerLink}>Instagram</a>
                <a href="#" className={styles.footerLink}>YouTube / Vimeo</a>
                <a href="#" className={styles.footerLink}>Pinterest</a>
                <a href="#" className={styles.footerLink}>Contact Us</a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.footerDisclaimer}>© 2026 Dot Production. All rights reserved. Cinematic wedding films &amp; editorial photography for personal archival use.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
