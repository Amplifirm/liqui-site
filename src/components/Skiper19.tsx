"use client";

import { motion } from "framer-motion";
import  { useRef } from "react";
import { Zap, Smartphone, Palette, TrendingUp, Target, Search, Mail, MousePointer, BarChart3, Lock, HardDrive, Rocket, Home, Code, Server, Phone, Send, ArrowRight, Users, Award, PartyPopper } from "lucide-react";

const Skiper19 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "websites", icon: Code, label: "Websites" },
    { id: "seo", icon: Search, label: "SEO" },
    { id: "ads", icon: Target, label: "Ads" },
    { id: "email", icon: Mail, label: "Email" },
    { id: "retargeting", icon: TrendingUp, label: "Retargeting" },
    { id: "hosting", icon: Server, label: "Hosting" },
    { id: "team", icon: Users, label: "Team" },
    { id: "success", icon: PartyPopper, label: "Success" },
    { id: "contact", icon: Phone, label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Left Navbar */}
      <motion.nav 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-0 top-0 z-50 flex h-screen w-24 flex-col bg-[#1F3A4B] py-8 shadow-2xl"
      >
        {/* Company Name */}
        <motion.div 
          className="mb-8 px-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div 
            className="rounded-2xl bg-[#C2F84F] p-3 text-center cursor-pointer"
            whileHover={{ 
              boxShadow: "0 0 20px rgba(194, 248, 79, 0.5)",
              rotate: [0, -2, 2, 0]
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-xs font-bold text-[#1F3A4B]">LIQUI-SITE</div>
          </motion.div>
        </motion.div>

        {/* Nav Items */}
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex h-14 w-14 items-center justify-center rounded-2xl transition-all hover:bg-[#C2F84F]"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <Icon 
                    className="text-[#FAFDEE] transition-colors group-hover:text-[#1F3A4B]" 
                    strokeWidth={2.5}
                    size={22}
                  />
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute left-full ml-4 whitespace-nowrap rounded-xl bg-[#C2F84F] px-4 py-2 text-sm font-bold text-[#1F3A4B] shadow-lg pointer-events-none"
                >
                  {section.label}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      <section
        ref={ref}
        className="ml-24 flex min-h-screen w-[calc(100vw-6rem)] flex-col items-center bg-[#FAFDEE] px-8 text-[#1F3A4B]"
      >
        {/* Hero Section */}
        <div id="hero" className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-8 text-center py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-medium tracking-[-0.08em] lg:text-9xl"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                background: "linear-gradient(90deg, #1F3A4B 0%, #C2F84F 50%, #1F3A4B 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Marketing
            </motion.span>
            <br /> Solutions That <br />
            Drive Results
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl text-xl font-medium text-[#1F3A4B]"
          >
            We don't just provide services—we provide solutions. Scroll to discover how we can help your business grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex gap-4"
          >
            <SendButton />
            <ExpandButton />
          </motion.div>
        </div>

        {/* Section 1: Custom Websites */}
        <div id="websites" className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-[#C2F84F] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#1F3A4B] cursor-pointer"
          >
            Custom Development
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-6xl font-medium tracking-[-0.05em] lg:text-8xl"
          >
            Websites Built <br />
            From Scratch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center text-2xl font-medium leading-relaxed text-[#1F3A4B]/80"
          >
            Creative and technical execution is our sweet spot. We design and develop responsive websites that deliver leads or sales.
          </motion.p>
          <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance on every device" },
              { icon: Smartphone, title: "Fully Responsive", desc: "Perfect experience on mobile, tablet, and desktop" },
              { icon: Palette, title: "Custom Design", desc: "Unique brand experiences that stand out" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group rounded-3xl border-4 border-[#1F3A4B] bg-white p-8 cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                >
                  <item.icon className="mb-4 h-16 w-16 text-[#C2F84F] transition-transform group-hover:scale-110" strokeWidth={2.5} />
                </motion.div>
                <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-[#C2F84F]">{item.title}</h3>
                <p className="text-lg text-[#1F3A4B]/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: SEO */}
        <div id="seo" className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-[#C2F84F] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#1F3A4B] cursor-pointer"
          >
            Search Engine Optimization
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-6xl font-medium tracking-[-0.05em] lg:text-8xl"
          >
            Top of Google <br />
            Every Time
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center text-2xl font-medium leading-relaxed text-[#1F3A4B]/80"
          >
            Lacking visibility? Our expert SEO solutions can get your brand to the top of search results—and keep it there.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 20px 40px rgba(31, 58, 75, 0.1)" }}
            className="mt-8 w-full rounded-3xl border-4 border-[#1F3A4B] bg-white p-12 transition-shadow"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-4xl font-bold">What We Do</h3>
                <ul className="space-y-4 text-xl">
                  {[
                    { icon: Search, text: "Keyword research & optimization" },
                    { icon: TrendingUp, text: "Technical SEO audits" },
                    { icon: Target, text: "Content optimization" },
                    { icon: BarChart3, text: "Link building strategies" }
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <item.icon className="mt-1 h-6 w-6 flex-shrink-0 text-[#C2F84F]" strokeWidth={3} />
                      </motion.div>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-4xl font-bold">The Results</h3>
                <div className="space-y-6">
                  {[
                    { value: "300%", label: "Average organic traffic increase" },
                    { value: "90 Days", label: "To first page rankings" },
                    { value: "24/7", label: "Your site working for you" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer"
                    >
                      <motion.div 
                        className="mb-2 text-5xl font-bold text-[#C2F84F]"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xl">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 3: SEM/PPC */}
        <div id="ads" className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-[#C2F84F] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#1F3A4B] cursor-pointer"
          >
            Paid Advertising
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-6xl font-medium tracking-[-0.05em] lg:text-8xl"
          >
            Traffic That <br />
            Converts Fast
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center text-2xl font-medium leading-relaxed text-[#1F3A4B]/80"
          >
            We craft search engine marketing campaigns to drive traffic and turn visitors into customers.
          </motion.p>
          <div className="mt-8 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { icon: Search, title: "Google Ads", desc: "Appear at the top of search results instantly. We manage your budget, optimize campaigns, and deliver ROI.", stat: "5X Average ROAS" },
              { icon: Target, title: "Social Ads", desc: "Facebook, Instagram, LinkedIn—we target your ideal customers where they spend their time.", stat: "$2M+ Ad Spend Managed" }
            ].map((ad, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group rounded-3xl bg-[#1F3A4B] p-12 text-[#FAFDEE] cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 1 }}
                >
                  <ad.icon className="mb-6 h-16 w-16 text-[#C2F84F] transition-transform group-hover:scale-110" strokeWidth={2.5} />
                </motion.div>
                <h3 className="mb-6 text-4xl font-bold">{ad.title}</h3>
                <p className="mb-6 text-xl leading-relaxed">{ad.desc}</p>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mb-4 h-1 rounded-full bg-[#C2F84F]"
                />
                <div className="text-3xl font-bold text-[#C2F84F]">{ad.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: Email Marketing */}
        <div id="email" className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-[#C2F84F] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#1F3A4B] cursor-pointer"
          >
            Automation
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-6xl font-medium tracking-[-0.05em] lg:text-8xl"
          >
            Email Marketing <br />
            On Autopilot
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center text-2xl font-medium leading-relaxed text-[#1F3A4B]/80"
          >
            Responsive emails that look great on every device. Our automated solutions make it completely hands-off for you.
          </motion.p>
          <div className="mt-8 w-full">
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { icon: Mail, value: "45%", label: "Average open rate" },
                { icon: MousePointer, value: "12%", label: "Click-through rate" },
                { icon: TrendingUp, value: "$42", label: "ROI per $1 spent" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="rounded-3xl border-4 border-[#1F3A4B] bg-white p-8 text-center cursor-pointer"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <stat.icon className="mx-auto mb-4 h-16 w-16 text-[#C2F84F]" strokeWidth={2.5} />
                  </motion.div>
                  <div className="text-4xl font-bold text-[#C2F84F]">{stat.value}</div>
                  <div className="mt-2 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: "0 20px 40px rgba(31, 58, 75, 0.2)" }}
              className="rounded-3xl bg-[#1F3A4B] p-12 text-[#FAFDEE] transition-shadow"
            >
              <h3 className="mb-6 text-3xl font-bold">What's Included</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <ul className="space-y-3 text-xl">
                  {["Welcome series automation", "Abandoned cart recovery", "Newsletter campaigns", "Segmentation strategies"].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="cursor-pointer"
                    >
                      • {item}
                    </motion.li>
                  ))}
                </ul>
                <ul className="space-y-3 text-xl">
                  {["A/B testing", "Performance analytics", "Mobile optimization", "List growth strategies"].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.4 }}
                      whileHover={{ x: 10 }}
                      className="cursor-pointer"
                    >
                      • {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 5: Retargeting */}
        <div id="retargeting" className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-[#C2F84F] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#1F3A4B] cursor-pointer"
          >
            Retargeting
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-6xl font-medium tracking-[-0.05em] lg:text-8xl"
          >
            Never Lose <br />
            A Lead Again
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center text-2xl font-medium leading-relaxed text-[#1F3A4B]/80"
          >
            Reach your target audience at the most opportune time—or get a second chance through retargeting.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 20px 40px rgba(31, 58, 75, 0.1)" }}
            className="mt-8 w-full rounded-3xl border-4 border-[#1F3A4B] bg-white p-12 transition-shadow"
          >
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-4xl font-bold">The Average Website Visitor</h3>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-6xl font-bold text-[#C2F84F] cursor-pointer"
              >
                98%
              </motion.div>
              <p className="mt-4 text-2xl">Leave without converting on their first visit</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                { title: "Without Retargeting", desc: "Those visitors are gone forever. You spent money to get them there, and got nothing in return." },
                { title: "With Retargeting", desc: "Follow them across the web with targeted ads. Stay top of mind. Convert them when they're ready." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="cursor-pointer"
                >
                  <h4 className="mb-4 text-3xl font-bold">{item.title}</h4>
                  <p className="text-xl text-[#1F3A4B]/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 6: Hosting */}
        <div id="hosting" className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-[#C2F84F] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#1F3A4B] cursor-pointer"
          >
            Infrastructure
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-6xl font-medium tracking-[-0.05em] lg:text-8xl"
          >
            Secure, Stable <br />
            Scalable Hosting
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center text-2xl font-medium leading-relaxed text-[#1F3A4B]/80"
          >
            Simple, affordable hosting solutions. We handle CMS updates if you're on WordPress.
          </motion.p>
          <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-4">
            {[
              { icon: Lock, title: "SSL Secured", desc: "Bank-level encryption" },
              { icon: Zap, title: "99.9% Uptime", desc: "Always online" },
              { icon: HardDrive, title: "Daily Backups", desc: "Never lose data" },
              { icon: Rocket, title: "CDN Powered", desc: "Lightning fast globally" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="rounded-3xl border-4 border-[#1F3A4B] bg-white p-8 text-center cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: i * 2 }}
                >
                  <feature.icon className="mx-auto mb-4 h-16 w-16 text-[#C2F84F]" strokeWidth={2.5} />
                </motion.div>
                <h3 className="mb-2 text-2xl font-bold">{feature.title}</h3>
                <p className="text-[#1F3A4B]/70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 7: Team (with team-idea.svg) */}
        <div id="team" className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-[#C2F84F] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#1F3A4B] cursor-pointer"
          >
            Our Team
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-6xl font-medium tracking-[-0.05em] lg:text-8xl"
          >
            Ideas That <br />
            Transform Businesses
          </motion.h2>
          
          <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.img 
                src="/team-idea.svg" 
                alt="Team collaboration" 
                className="w-full"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-4xl font-bold">Collaboration at Our Core</h3>
              <p className="text-xl leading-relaxed text-[#1F3A4B]/80">
                Our team of experts works together to bring innovative solutions to life. From strategy to execution, we're with you every step of the way.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Users, text: "15+ Digital Marketing Experts" },
                  { icon: Award, text: "Award-Winning Campaigns" },
                  { icon: Target, text: "Results-Driven Approach" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 cursor-pointer"
                  >
                    <item.icon className="h-8 w-8 text-[#C2F84F]" strokeWidth={2.5} />
                    <span className="text-lg font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 8: Success Stories (with work-party.svg) */}
        <div id="success" className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-[#C2F84F] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#1F3A4B] cursor-pointer"
          >
            Success Stories
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-6xl font-medium tracking-[-0.05em] lg:text-8xl"
          >
            Celebrating <br />
            Client Success
          </motion.h2>
          
          <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-4xl font-bold">Your Success is Our Success</h3>
              <p className="text-xl leading-relaxed text-[#1F3A4B]/80">
                We measure our achievements by the growth and success of our clients. Every milestone you reach is a victory we celebrate together.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Projects Delivered" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "15+", label: "Years in Business" },
                  { value: "24/7", label: "Support Available" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-center cursor-pointer"
                  >
                    <div className="mb-2 text-4xl font-bold text-[#C2F84F]">{stat.value}</div>
                    <div className="text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.img 
                src="/work-party.svg" 
                alt="Celebrate success" 
                className="w-full"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Final Section - Contact */}
        <div id="contact" className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-12 rounded-3xl bg-[#1F3A4B] py-20 px-8 text-[#FAFDEE]">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-[12vw] font-bold leading-[0.9] tracking-tighter lg:text-[10vw]"
          >
            liqui-site.com
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-5xl font-bold lg:text-6xl">Ready to Get Started?</h2>
            <p className="text-2xl text-[#FAFDEE]/80 max-w-2xl mx-auto">
              Let's build something amazing together and watch your business thrive.
            </p>
            <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center">
              <SendButton />
              <CallButton />
            </div>
          </motion.div>

          <div className="mt-12 flex w-full flex-col items-start gap-5 font-medium lg:flex-row lg:justify-between">
            <div className="flex w-full items-center justify-between gap-12 uppercase lg:w-fit">
              <p className="text-sm">Custom Websites<br />SEO & SEM</p>
              <p className="text-sm">Email Marketing<br />Automation</p>
            </div>
            <div className="flex w-full items-center justify-between gap-12 uppercase lg:w-fit">
              <p className="text-sm">Digital Ads<br />Retargeting</p>
              <p className="text-sm">Web Hosting<br />845-353-7771</p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-[#FAFDEE]/60">
            <p>© 2025 Liqui-Site Designs, an eMazzanti company</p>
            <p className="mt-2">Privacy Policy | Terms of Use | Contact</p>
          </div>
        </div>
      </section>
    </>
  );
};

// Send Button - FIXED hover state
const SendButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border-none bg-[#C2F84F] px-7 py-4 text-xl font-semibold text-[#1F3A4B] transition-all"
    >
      <motion.div
        className="transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45"
      >
        <Send className="h-6 w-6" />
      </motion.div>
      <span className="transition-all duration-300">Get Proposal</span>
    </motion.button>
  );
};

// Expand Button - FIXED hover state
const ExpandButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex h-12 items-center justify-center overflow-hidden rounded-full border-none bg-[#1F3A4B] shadow-lg transition-all duration-300 hover:px-8"
      style={{ width: "48px" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.width = "160px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.width = "48px";
      }}
    >
      <ArrowRight className="absolute left-3 h-5 w-5 text-[#FAFDEE] transition-all duration-300 group-hover:left-5" />
      <span className="ml-8 whitespace-nowrap text-lg font-semibold text-[#FAFDEE] opacity-0 transition-all duration-300 group-hover:opacity-100">
        View Work
      </span>
    </motion.button>
  );
};

// Call Button - FIXED hover state
const CallButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex h-12 items-center justify-center overflow-hidden rounded-full border-4 border-[#C2F84F] bg-transparent shadow-lg transition-all duration-300 hover:bg-[#C2F84F] hover:px-8"
      style={{ width: "48px" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.width = "140px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.width = "48px";
      }}
    >
      <Phone className="absolute left-3 h-5 w-5 text-[#C2F84F] transition-all duration-300 group-hover:left-5 group-hover:text-[#1F3A4B]" />
      <span className="ml-8 whitespace-nowrap text-lg font-semibold text-[#C2F84F] opacity-0 transition-all duration-300 group-hover:text-[#1F3A4B] group-hover:opacity-100">
        Call Us
      </span>
    </motion.button>
  );
};

export default Skiper19;