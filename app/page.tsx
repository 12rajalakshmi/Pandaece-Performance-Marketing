"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Phone, Globe2, Workflow, ArrowUpRight, User, Mail, Smartphone, MessageSquare } from "lucide-react";

type Platform =
  | "googleads"
  | "meta"
  | "social"
  | "website"
  | "crm"
  | "whatsapp";

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/PANDA%20LOGO.png"
      alt="PANDAeCe Performance Marketing"
      className={className}
    />
  );
}

function PlatformLogo({ platform }: { platform: Platform }) {
  const icons: Record<Platform, { src?: string; label: string }> = {
    googleads: {
      src: "https://cdn.simpleicons.org/googleads/4285F4",
      label: "Google Ads",
    },
    meta: {
      src: "https://cdn.simpleicons.org/meta/0866FF",
      label: "Meta Ads",
    },
    social: {
      src: "https://cdn.simpleicons.org/instagram/E4405F",
      label: "Social Media",
    },
    whatsapp: {
      src: "https://cdn.simpleicons.org/whatsapp/25D366",
      label: "WhatsApp",
    },
    website: { label: "Website Development" },
    crm: { label: "CRM Automation" },
  };

  const info = icons[platform];

  return (
    <span className={`platform-logo platform-${platform}`} title={info.label}>
      {info.src ? (
        <img src={info.src} alt={info.label} width={24} height={24} />
      ) : platform === "website" ? (
        <Globe2 size={22} className="icon-website" aria-label={info.label} />
      ) : (
        <Workflow size={22} className="icon-crm" aria-label={info.label} />
      )}
    </span>
  );
}

function CTAButton({
  children,
  href = "#contact",
  phone = false,
}: {
  children: ReactNode;
  href?: string;
  phone?: boolean;
}) {
  return (
    <a href={href} className="button-blue">
      {phone && <Phone size={16} aria-hidden="true" />}
      <span className="button-text">{children}</span>
      <span className="button-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

const services: {
  title: string;
  description: string;
  platform: Platform;
}[] = [
  {
    title: "Google Ads",
    description:
      "Reach people actively searching for your products or services with high-intent search campaigns.",
    platform: "googleads",
  },
  {
    title: "Meta Ads",
    description:
      "Connect with target potential customers across Facebook and Instagram with high-converting creatives.",
    platform: "meta",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build a consistent brand presence and meaningful community engagement that turns into sales.",
    platform: "social",
  },
  {
    title: "Website Development",
    description:
      "Create high-performance, responsive websites and landing pages engineered to convert visitors.",
    platform: "website",
  },
  {
    title: "CRM & Automation",
    description:
      "Organise customer leads and automate WhatsApp and email follow-ups for seamless conversions.",
    platform: "crm",
  },
];

const faqs = [
  {
    question: "What does PANDAeCe do?",
    answer:
      "PANDAeCe brings advertising, websites, CRM and marketing automation together to help businesses attract, manage and convert leads.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our service pricing starts from ₹10,000 per month, excluding the advertising budget. The final cost depends on your goals and requirements.",
  },
  {
    question: "Can you audit my existing campaigns?",
    answer:
      "We can review your campaigns, website and lead follow-up process to identify key opportunities for immediate ROI improvement.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We work with EdTech, FinTech, clinics and hospitals, real estate, manufacturing and other high-growth commercial sectors.",
  },
  {
    question: "Which advertising platforms do you manage?",
    answer:
      "Our core advertising management includes Google Ads, Meta Ads, landing pages, CRM integration and end-to-end follow-up automation.",
  },
  {
    question: "Can you automate WhatsApp and email follow-ups?",
    answer:
      "Yes. We seamlessly connect lead capture forms with CRM workflows and instant automated WhatsApp or email nurture sequences.",
  },
];

export default function Home() {
  const [termsOpen, setTermsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus(
      "Thank you! Your request was submitted successfully. Our growth team will get in touch shortly."
    );
  }

  return (
    <main>
      {/* NAVBAR */}
      <header className="site-header">
        <div className="container nav-inner">
          <a href="#home" className="brand" aria-label="PANDAeCe home">
            <BrandLogo className="brand-logo" />
            <span className="brand-name">
              PANDA<span>eCe</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">Our Process</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
          </nav>

          <CTAButton>Book a Consultation</CTAButton>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-glow glow-blue" />
        <div className="hero-glow glow-yellow" />

        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Digital marketing for owners who want to be #1
            </p>

            <h1>
              End-to-End Digital Marketing Services for{" "}
              <span className="text-highlight">Business Owners</span>
            </h1>

            <p className="hero-description">
              We help business owners build a complete system to get customers
              with our performance marketing services. As an all-in-one digital
              marketing agency, we drive leads through optimized ads, design
              conversion-focused websites, and manage every lead within an
              automated CRM.
            </p>

            <div className="hero-buttons">
              <CTAButton>Book Now &amp; Get 20% Off</CTAButton>
              <a href="#services" className="button-outline">
                Explore Our Services <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-trust">
              <span className="trust-check">✓</span>
              Ads, websites, CRM and automation working seamlessly together
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-center">
              <BrandLogo className="hero-brand-logo" />
              <strong>PANDAeCe</strong>
              <small>PERFORMANCE MARKETING</small>
            </div>

            <div className="floating-platform platform-google">
              <PlatformLogo platform="googleads" />
              <span>Google Ads</span>
            </div>

            <div className="floating-platform platform-meta">
              <PlatformLogo platform="meta" />
              <span>Meta Ads</span>
            </div>

            <div className="floating-platform platform-whatsapp">
              <PlatformLogo platform="whatsapp" />
              <span>WhatsApp</span>
            </div>

            <div className="floating-platform platform-crm">
              <PlatformLogo platform="crm" />
              <span>CRM Automation</span>
            </div>

            <div className="visual-bottom-card">
              <span className="live-dot" />
              <div>
                <strong>One connected system</strong>
                <small>Capture · Manage · Convert</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers-strip">
        <div className="container numbers-grid">
          <div className="number-item">
            <strong className="num-blue">30+</strong>
            <span>Years Combined Experience</span>
          </div>
          <div className="number-item">
            <strong className="num-green">1300+</strong>
            <span>Projects Delivered</span>
          </div>
          <div className="number-item">
            <strong className="num-yellow">400+</strong>
            <span>Happy Clients</span>
          </div>
          <div className="number-item number-message">
            <strong>One Team.</strong>
            <span>One Connected Growth System.</span>
          </div>
        </div>
      </section>

      {/* RICH MULTI-COLOR ABOUT SECTION */}
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-title-block">
            <p className="section-kicker about-kicker">ABOUT PANDAeCe</p>
            <h2>
              More Than Ads.
              <br />
              <span className="white-heading">A Complete Growth System.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              PANDAeCe is a dedicated team of performance marketers, UI/UX
              designers, and full-stack developers. As your strategic growth
              partner, we manage Google and Meta ads, design landing pages that
              convert, configure all-in-one CRMs, and automate WhatsApp/Email
              follow-ups. You work with one accountable team focused entirely
              on your ROI.
            </p>
            <div className="about-cta-wrap">
              <a href="#contact" className="button-yellow-cta">
                <span>Discuss Your Business Goals</span>
                <span className="button-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="container industries industries-highlight">
          <span className="industries-title">INDUSTRIES WE WORK WITH</span>

          {[
            "EdTech",
            "FinTech",
            "Clinics and Hospitals",
            "Real Estate",
            "Manufacturing",
          ].map((industry) => (
            <div className="industry-pill" key={industry}>
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">OUR SERVICES</p>
            <h2>
              Everything Your Business Needs
              <br />
              <span className="text-blue">To Grow Smarter</span>
            </h2>
            <p className="section-subtext">
              Unify your paid advertising, website conversion funnel, and lead
              management under one roof.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className={`service-card card-accent-${index % 3}`} key={service.title}>
                <div className="service-card-top">
                  <PlatformLogo platform={service.platform} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contact" className="service-link">
                  <span className="service-link-text">Discuss this service</span>
                  <span className="service-action-icon" aria-hidden="true">
                    <ArrowUpRight size={15} />
                  </span>
                </a>
              </article>
            ))}
          </div>

          <div className="services-cta">
            <div>
              <h3>Not sure where to start?</h3>
              <p>
                Let&apos;s identify the high-priority growth opportunities for
                your specific market.
              </p>
            </div>
            <CTAButton>Get a Growth Audit</CTAButton>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section problem-section" id="process">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">HOW WE WORK</p>
            <h2>
              Turn Separate Marketing Tasks
              <br />
              <span className="text-green">Into One Connected System</span>
            </h2>
          </div>

          <div className="process-grid">
            {[
              {
                number: "01",
                colorClass: "step-blue",
                title: "Discover",
                description:
                  "Analyze your business model, audience, growth targets and existing marketing setup.",
              },
              {
                number: "02",
                colorClass: "step-green",
                title: "Strategize",
                description:
                  "Develop a unified strategy connecting ads, conversion pages and CRM pipelines.",
              },
              {
                number: "03",
                colorClass: "step-yellow",
                title: "Execute",
                description:
                  "Launch targeted ad campaigns, build digital assets and set up automation triggers.",
              },
              {
                number: "04",
                colorClass: "step-blue",
                title: "Optimize",
                description:
                  "Continuously optimize campaign targeting and sales pipelines using real-time analytics.",
              },
            ].map((step) => (
              <article className={`process-card ${step.colorClass}`} key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">TESTIMONIALS</p>
            <h2>
              Built Around Your
              <br />
              <span className="text-blue">Business Goals</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            {[
              {
                name: "Sagar S",
                avatarBg: "avatar-blue",
                quote:
                  "A connected approach to digital marketing. Their automation and lead management setup saved us countless hours while boosting conversions.",
              },
              {
                name: "Arshiya Ambreen",
                avatarBg: "avatar-green",
                quote:
                  "A structured approach to Meta and Google ads that keeps our sales journey organized and predictable.",
              },
              {
                name: "Chethan Shetty",
                avatarBg: "avatar-yellow",
                quote:
                  "The PANDAeCe team truly connects technology with marketing. Outstanding ROI and support across all channels.",
              },
            ].map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-stars">★★★★★</div>
                <p>“{testimonial.quote}”</p>
                <div className="testimonial-person">
                  <span className={`testimonial-avatar ${testimonial.avatarBg}`}>
                    {testimonial.name.charAt(0)}
                  </span>
                  <strong>{testimonial.name}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section" id="faq">
        <div className="container faq-layout">
          <div className="faq-intro">
            <p className="section-kicker">FAQ</p>
            <h2>
              Questions?
              <br />
              <span className="text-blue">We&apos;ve Got Answers.</span>
            </h2>
            <p className="faq-intro-text">
              Need help choosing the right plan? Share your current setup with
              us and we&apos;ll build a customized roadmap for your business.
            </p>
            <div className="faq-btn-wrapper">
              <CTAButton phone>Talk to Our Experts</CTAButton>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true" className="faq-icon">
                    +
                  </span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta">
        <div className="container final-cta-inner">
          <div>
            <p className="section-kicker kicker-white">LET&apos;S GROW TOGETHER</p>
            <h2 className="white-heading">
              Customers Are Searching Right Now.
              <br />
              <span>Will They Find You or Your Competitor?</span>
            </h2>
            <p className="final-cta-subtext">
              Schedule a growth strategy call to audit your advertising and sales
              conversion setup today.
            </p>
          </div>
          <a href="#contact" className="button-yellow-cta">
            <span>Book Consultation &amp; Get 20% Off</span>
            <span className="button-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-section" id="contact">
        <div className="container footer-form-layout">
          <div className="footer-form-copy">
            <p className="section-kicker">START A CONVERSATION</p>
            <h2>
              Let&apos;s Build Your
              <br />
              <span className="text-blue">Growth System.</span>
            </h2>
            <p className="contact-desc">
              Tell us about your target goals. Our performance marketing experts
              will prepare a tailored execution plan for your business.
            </p>

            <div className="contact-points">
              <div className="contact-point-item border-blue">
                <PlatformLogo platform="googleads" />
                <div>
                  <strong>Performance Ads Optimization</strong>
                  <p>Targeted Google Ads &amp; Search Funnels</p>
                </div>
              </div>
              <div className="contact-point-item border-green">
                <PlatformLogo platform="meta" />
                <div>
                  <strong>Multi-channel Strategy</strong>
                  <p>High-converting Facebook &amp; Meta campaigns</p>
                </div>
              </div>
              <div className="contact-point-item border-yellow">
                <PlatformLogo platform="whatsapp" />
                <div>
                  <strong>WhatsApp &amp; Email Automation</strong>
                  <p>Instant lead nurture &amp; CRM pipeline integration</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <span className="form-badge">Free Growth Audit</span>
              <h3>Book Your Consultation</h3>
              <p className="form-subtitle">Share your details and we will reach out within 2 hours.</p>
            </div>

            <div className="form-field">
              <label htmlFor="name">Full Name *</label>
              <div className="input-with-icon">
                <User size={18} className="field-icon" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">Email Address *</label>
                <div className="input-with-icon">
                  <Mail size={18} className="field-icon" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone Number *</label>
                <div className="input-with-icon">
                  <Smartphone size={18} className="field-icon" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="business">Business Requirements &amp; Goals</label>
              <div className="input-with-icon icon-textarea">
                <MessageSquare size={18} className="field-icon" />
                <textarea
                  id="business"
                  name="business"
                  rows={3}
                  placeholder="Tell us about your current marketing goals..."
                />
              </div>
            </div>

            <button className="form-submit" type="submit">
              <span>Request Consultation</span>
              <span className="submit-arrow">↗</span>
            </button>

            {formStatus && (
              <p className="form-status" role="status">
                {formStatus}
              </p>
            )}

            <small className="form-privacy">
              🔒 100% confidential. Your details are safe with us.
            </small>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer" id="footer">
        <div className="container footer-top">
          <div className="footer-brand-column">
            <a
              href="#home"
              className="brand footer-brand"
              aria-label="PANDAeCe home"
            >
              <BrandLogo className="brand-logo footer-brand-logo" />
              <span className="brand-name">
                PANDA<span>eCe</span>
              </span>
            </a>

            <p>
              We empower ambitious business owners by connecting advertising,
              high-converting landing pages, CRM pipelines, and intelligent automation.
            </p>

            <span className="footer-website">
              <strong>PANDAeCe</strong> — Performance Marketing Experts
            </span>
          </div>

          <div className="footer-column">
            <h4>Get In Touch</h4>
            <p className="footer-contact-heading">
              Have a growth objective in mind? Let&apos;s connect today.
            </p>
            <a className="footer-static-link" href="#contact">
              Request Consultation
            </a>
            <a className="footer-static-link" href="#contact">
              Send an Enquiry
            </a>
          </div>

          <div className="footer-column footer-legal">
            <h4>Legal &amp; Information</h4>

            <button
              type="button"
              className="terms-button"
              onClick={() => setTermsOpen(!termsOpen)}
              aria-expanded={termsOpen}
              aria-controls="footer-terms-panel"
            >
              <span>Terms &amp; Conditions</span>
              <span aria-hidden="true">{termsOpen ? "−" : "+"}</span>
            </button>

            <a className="footer-static-link" href="#contact">
              Contact Us
            </a>
          </div>
        </div>

        {termsOpen && (
          <div className="container terms-panel" id="footer-terms-panel">
            <h3>Terms &amp; Conditions</h3>
            <p>
              1. <strong>Services:</strong> PANDAeCe provides performance marketing,
              advertising, website design, and automation solutions as agreed in writing.
            </p>
            <p>
              2. <strong>Budgeting:</strong> Service fees exclude direct advertising budget spent on ad networks (Google/Meta).
            </p>
          </div>
        )}

        <div className="container footer-bottom">
          <p>© 2026 <strong>PANDAeCe</strong>. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}