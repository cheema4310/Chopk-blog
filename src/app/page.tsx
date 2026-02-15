'use client';

import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import {
  ArrowRight,
  Activity,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  Lock,
  Brain,
  Trophy,
  AlertTriangle,
  CalendarCheck,
  BarChart3,
  Target,
  Dumbbell,
} from 'lucide-react';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  AnimatedSection,
} from '@/components/motion/MotionWrappers';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const heroWords = ['Muscle', 'Kegel'];

function AnimatedWord() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = heroWords[index];
    const fullText = currentWord + ',';
    const typeSpeed = isDeleting ? 75 : 120;
    const pauseTime = 1500;

    const timer = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % heroWords.length);
      } else {
        setText(fullText.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <span className="relative inline-block align-baseline whitespace-nowrap leading-tight">
      {/* Ghost (invisible) – reserves exact width + height of the tallest word (Kegel, has deepest descender 'g') so nothing jumps or clips */}
      <span
        className="invisible pointer-events-none whitespace-nowrap leading-tight"
        aria-hidden="true"
      >
        Kegel,
      </span>

      {/* Visible typing text + cursor – perfectly overlays the ghost */}
      <span className="absolute left-0 top-0 flex items-baseline text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#FF8F50] to-accent-dark whitespace-nowrap leading-tight">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          className="inline-block w-[3px] h-[0.9em] ml-0.5 bg-accent mb-0 align-baseline"
        />
      </span>
    </span>
  );
}

export default function Home() {
  const featuredPost = blogPosts[0];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement
            yRange={20}
            duration={8}
            className="absolute top-[5%] left-[15%] w-[700px] h-[700px] bg-accent/[0.07] rounded-full blur-[150px]"
          />
          <FloatingElement
            yRange={15}
            duration={10}
            delay={2}
            className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-secondary-light/15 rounded-full blur-[130px]"
          />
          <FloatingElement
            yRange={10}
            duration={12}
            delay={4}
            className="absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px]"
          />
        </div>

        {/* Floating glass orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement
            yRange={25}
            duration={7}
            delay={1}
            className="absolute top-[15%] right-[10%] w-24 h-24 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm"
          />
          <FloatingElement
            yRange={18}
            duration={9}
            delay={3}
            className="absolute bottom-[25%] left-[8%] w-16 h-16 rounded-full bg-accent/[0.04] border border-accent/[0.08] backdrop-blur-sm"
          />
          <FloatingElement
            yRange={12}
            duration={6}
            delay={0.5}
            className="absolute top-[60%] right-[25%] w-10 h-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm rotate-45"
          />
        </div>

        <FadeIn duration={0.8} className="max-w-5xl w-full relative z-10">
          <GlassCard
            className="p-10 md:p-20 border-glow flex flex-col items-center text-center gap-10"
            borderGlow
            hover={false}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wider uppercase"
            >
              <Activity className="w-4 h-4" />
              <span>Science-Backed Kegel Training for Men</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="text-4xl py-4 md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-none"
            >
              Train the <AnimatedWord />
              {/* Second line – exact distance controlled by mt- (change the number until it feels perfect) */}
              <span className="block mt-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-sub-text to-white/50">
                No One Talks About
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl py-8 text-sub-text/80 max-w-3xl leading-relaxed font-light"
            >
              The science-backed ChopK app teaches pelvic floor exercises for
              men — so you build real stamina, confidence, and control without
              pills or guesswork. Start with the guided 8-week plan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-5 mt-4 w-full sm:w-auto"
            >
              <Link
                href="https://play.google.com/store/apps/details?id=com.chopk.app"
                target="_blank"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg px-12 py-6"
                >
                  Start Your Pelvic Floor Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="#how-it-works" className="w-full sm:w-auto">
                <Button
                  variant="glass"
                  size="lg"
                  className="w-full sm:w-auto text-lg px-10 py-6"
                >
                  See the 3-Step Method
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-6 flex items-center gap-10 text-sub-text/50 text-sm font-medium"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> 100% Private & Discreet
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" /> Backed by Pelvic Floor Science
              </span>
            </motion.div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* 2. THE HIDDEN STRUGGLE */}
      <AnimatedSection className="py-28 relative">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
              Struggling with control even when you{' '}
              <span className="text-accent">try everything</span>?
            </h2>
          </FadeIn>
          <div className="space-y-7 text-lg md:text-xl text-sub-text/70 leading-relaxed">
            <FadeIn delay={0.1}>
              <p>
                You&apos;ve searched{' '}
                <span className="text-white font-medium">
                  &quot;how to last longer naturally&quot;
                </span>
                . You&apos;ve tried the squeeze technique. You&apos;ve looked up{' '}
                <span className="text-white font-medium">
                  &quot;pelvic floor exercises for men&quot;
                </span>
                .
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                But in the moment, the urge takes over. It&apos;s not just
                mental — it&apos;s a physical response routed through your
                nervous system and pelvic floor muscles. And without proper
                kegel training, that response stays on autopilot.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                Most men think they just need &quot;more willpower.&quot;
                <span className="text-white font-bold block mt-6 text-2xl md:text-3xl">
                  They don&apos;t need willpower — they need a science-backed
                  pelvic floor training system.
                </span>
              </p>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. FEATURES SECTION */}
      <AnimatedSection className="py-28 relative">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="container mx-auto px-4 relative">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Why Men Choose the Science-Backed ChopK App
            </h2>
            <p className="text-sub-text/60 text-lg max-w-2xl mx-auto">
              Pelvic floor kegel exercises designed to fit your life and build
              lasting control
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {[
              {
                icon: Clock,
                title: '5–15 Min Daily Kegel Sessions',
                desc: 'Build pelvic floor strength fast — without disrupting your day.',
              },
              {
                icon: Brain,
                title: 'Smart Pelvic Floor Progression',
                desc: 'Each week adapts to build real muscle coordination and control.',
              },
              {
                icon: Trophy,
                title: 'Streaks & XP Keep You Training',
                desc: 'Game mechanics that make pelvic floor exercises a habit, not a chore.',
              },
              {
                icon: AlertTriangle,
                title: 'Miss a Day? ChopK Notices',
                desc: 'Smart nudges help you stay consistent when motivation dips.',
              },
              {
                icon: CalendarCheck,
                title: 'Daily Training Reminders',
                desc: 'Discreet notifications so you never skip a kegel session.',
              },
              {
                icon: BarChart3,
                title: 'Track Your Control Progress',
                desc: 'Visual stats — private, ad-free, and built for men.',
              },
            ].map((feature, i) => (
              <StaggerItem key={i}>
                <GlassCard
                  className="p-8 flex items-start gap-5 group h-full"
                  borderGlow={false}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-400">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sub-text/60 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* 4. THE 3-STEP PROCESS */}
      <AnimatedSection
        id="how-it-works"
        className="py-28 relative bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"
      >
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Train the Right Muscle, the Smart Way
            </h2>
            <p className="text-sub-text/60 text-lg">
              The science-backed ChopK system: Locate, Engage, Train.
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid md:grid-cols-3 gap-8 mb-20"
            staggerDelay={0.15}
          >
            {[
              {
                icon: Target,
                title: '1. Locate the Right Muscle',
                desc: 'Find the correct pelvic floor muscle — skip this, and training fails.',
              },
              {
                icon: Zap,
                title: '2. Engage Correctly',
                desc: 'Learn what proper kegel activation actually feels like — no guessing.',
              },
              {
                icon: Dumbbell,
                title: '3. Train Smart with ChopK',
                desc: 'Build lasting control with progressive daily pelvic floor workouts.',
              },
            ].map((step, i) => (
              <StaggerItem key={i}>
                <GlassCard
                  className="p-10 flex flex-col items-center text-center gap-6 h-full"
                  borderGlow
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center text-accent mb-2 neon-glow">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sub-text/70 leading-relaxed">
                    {step.desc}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="max-w-3xl mx-auto">
            <GlassCard
              className="p-8 border-l-4 border-accent bg-accent/[0.04]"
              hover={false}
            >
              <h4 className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider mb-4 text-sm">
                <AlertTriangle className="w-5 h-5" /> Why Do Most Men Fail
                Pelvic Floor Training?
              </h4>
              <p className="text-xl text-sub-text/80 leading-relaxed">
                Most men skip <strong className="text-white">Locate</strong> and{' '}
                <strong className="text-white">Engage</strong> — the two steps
                that make kegel exercises actually work. They jump straight to
                squeezing the wrong muscle, see no results, and quit. The
                science-backed ChopK app guides you through all three steps so
                your pelvic floor training compounds over time.
              </p>
            </GlassCard>
          </FadeIn>
        </div>
      </AnimatedSection>

      {/* 5. WHY TRAINING BEATS PILLS (Founder Story Teaser) */}
      <AnimatedSection className="py-28 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute -inset-6 bg-accent/15 blur-[60px] rounded-full opacity-40" />
              <GlassCard
                className="p-10 md:p-14 relative"
                borderGlow
                hover={false}
              >
                <div className="flex items-center gap-3 mb-8 text-accent font-bold uppercase tracking-widest text-xs">
                  <Lock className="w-4 h-4" /> Founder Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  &quot;Why I Built a Pelvic Floor Training App Instead of
                  Relying on Pills&quot;
                </h2>
                <div className="space-y-5 text-sub-text/70 text-lg leading-relaxed">
                  <p>
                    In my early 20s, I searched for answers — but found mostly
                    noise: misleading quick fixes and overhyped remedies.
                  </p>
                  <p>
                    Pills can build dependency and often stop working.
                    Eventually, I discovered the science behind{' '}
                    <strong className="text-white">
                      pelvic floor kegel training for men
                    </strong>{' '}
                    — and everything changed.
                  </p>
                  <p>
                    It wasn&apos;t magic.{' '}
                    <strong className="text-white">It was training.</strong>
                  </p>
                  <p className="text-white font-medium italic border-l-2 border-accent pl-5 my-8 text-xl leading-relaxed">
                    &quot;Most men fail because nobody teaches them a real
                    pelvic floor training process. The science-backed ChopK app
                    is the version I wish existed years ago.&quot;
                  </p>
                </div>
                <div className="mt-10">
                  <Link href="/blog/founder-story">
                    <Button variant="glass" className="w-full">
                      Read Full Story
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-10 pl-0 lg:pl-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Stop masking the problem. <br />{' '}
                <span className="text-accent">
                  Train the root cause with pelvic floor exercises.
                </span>
              </h2>
              <ul className="space-y-7">
                {[
                  'No dependency on medication — just science-backed training',
                  'Permanent physical control that builds over time',
                  'Zero side effects from pelvic floor exercises',
                  'Confidence that comes from real muscle coordination',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-5 text-xl text-sub-text/90"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </AnimatedSection>

      {/* 6. REAL RESULTS */}
      <AnimatedSection className="py-28 relative">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="container mx-auto px-4 text-center relative">
          <FadeIn className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Real Men, Real Pelvic Floor Training Results
            </h2>
          </FadeIn>
          <StaggerContainer
            className="grid md:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            {[
              {
                quote:
                  "I thought it was just how I was wired. Turns out I just had a weak pelvic floor. 8 weeks in and it's night and day.",
                author: 'Mark D.',
                range: '8 Week Streak',
              },
              {
                quote:
                  "The best part isn't even the duration, it's the lack of anxiety. I know I have control now.",
                author: 'Jason K.',
                range: 'Level 12 User',
              },
              {
                quote:
                  'My partner noticed the difference before I even said anything. The app makes it impossible to forget.',
                author: 'Ryan T.',
                range: '3 Month Member',
              },
            ].map((testimonial, i) => (
              <StaggerItem key={i}>
                <GlassCard
                  className="p-8 text-left flex flex-col justify-between h-full"
                  borderGlow={i === 1}
                >
                  <div>
                    <div className="flex gap-1.5 mb-5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className="w-3.5 h-3.5 bg-accent rounded-full shadow-[0_0_10px_rgba(238,112,35,0.4)]"
                        />
                      ))}
                    </div>
                    <p className="text-lg text-white/90 mb-8 leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.06] pt-5">
                    <span className="font-bold text-white">
                      {testimonial.author}
                    </span>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                      {testimonial.range}
                    </span>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* 7. FINAL CTA */}
      <AnimatedSection className="py-36 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.07] via-transparent to-transparent" />
        <FloatingElement
          yRange={8}
          duration={8}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.05] rounded-full blur-[120px]"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              Ready to Build Real Control <br />{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
                — Privately?
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-sub-text/70 mb-14 max-w-2xl mx-auto leading-relaxed">
              Join thousands of men building stamina and confidence with the
              science-backed ChopK pelvic floor training app.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Link
              className="flex items-center justify-center"
              href="https://play.google.com/store/apps/details?id=com.chopk.app"
              target="_blank"
            >
              <Button
                size="lg"
                className="neon-glow px-14 py-7 text-xl rounded-full"
              >
                Start Your Pelvic Floor Journey
              </Button>
            </Link>
            <p className="mt-10 text-sm text-sub-text/40 tracking-wide">
              Science-backed kegel training • No credit card for trial • Cancel
              anytime • 100% Discreet
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>
    </div>
  );
}
