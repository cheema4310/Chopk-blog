import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { ArrowRight, Activity, Zap, Shield, Clock, TrendingUp, CheckCircle, Lock, Brain, Trophy, AlertTriangle, CalendarCheck, BarChart3, Target, Dumbbell } from "lucide-react";

export default function Home() {
  const featuredPost = blogPosts[0];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-20">
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[8000ms]" />
          <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-secondary-light/20 rounded-full blur-[100px] mix-blend-screen" />
        </div>

        <GlassCard className="max-w-5xl w-full p-8 md:p-16 border-glow flex flex-col items-center text-center gap-10 relative z-10" borderGlow>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wide uppercase">
            <Activity className="w-4 h-4" />
            <span>Science-Backed Control</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            Performance Starts <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sub-text to-white/50">From Within</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sub-text/90 max-w-3xl leading-relaxed font-light">
            ChopK is a discreet pelvic floor muscle training app for men who want better strength, control and confidence — without guesswork or awkwardness.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 w-full sm:w-auto">
            <Link href="https://play.google.com/store/apps/details?id=com.chopk.app" target="_blank" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto neon-glow text-lg px-10 py-6">
                Start Training Now
                <ArrowRight className="w-6 h-6" />
              </Button>
            </Link>
            <Link href="#how-it-works" className="w-full sm:w-auto">
              <Button variant="glass" size="lg" className="w-full sm:w-auto text-lg px-10 py-6">
                Read the Guide
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 flex items-center gap-8 text-sub-text/60 text-sm font-medium">
             <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Private & Secure</span>
             <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Science-Based</span>
          </div>
        </GlassCard>
      </section>

      {/* 2. THE HIDDEN STRUGGLE */}
      <section className="py-24 relative">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
               If you finish too fast even when you <span className="text-accent">try to slow down</span>…
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-sub-text/80 leading-relaxed">
               <p>
                  You’ve googled <span className="text-white font-medium">"how to last longer"</span>. 
                  You’ve tried the squeeze technique. You’ve looked up <span className="text-white font-medium">"kegel for men"</span>.
               </p>
               <p>
                  But in the heat of the moment, the urge takes over. 
                  It’s not just in your head—it’s a physical response. 
                  And it’s routed through your nervous system and pelvic floor muscles.
               </p>
               <p>
                  Most men think they just need "more willpower." 
                  <span className="text-white font-bold block mt-4 text-2xl">They’re wrong. They need training.</span>
               </p>
            </div>
         </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section className="py-24 relative bg-white/5">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built for Real Results</h2>
               <p className="text-sub-text/70 text-lg">Quick, smart, and designed to keep you consistent</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                  { icon: Clock, title: "Quick guided sessions", desc: "Only 5–15 minutes a day." },
                  { icon: Brain, title: "Smart Progression", desc: "Weeks that get smarter to build strength." },
                  { icon: Trophy, title: "Game Mechanics", desc: "Streaks and XP keep you locked in." },
                  { icon: AlertTriangle, title: "Miss a day?", desc: "The app notices — helps you stay sharp." },
                  { icon: CalendarCheck, title: "Daily Reminders", desc: "Gentle nudges to keep you consistent." },
                  { icon: BarChart3, title: "Visual Progress", desc: "Trackable, discreet, and ad-free." }
               ].map((feature, i) => (
                  <GlassCard key={i} className="p-8 flex items-start gap-4 hover:bg-white/10 transition-colors group" borderGlow={false}>
                     <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-sub-text/70 leading-snug">{feature.desc}</p>
                     </div>
                  </GlassCard>
               ))}
            </div>
         </div>
      </section>

      {/* 4. THE 3-STEP PROCESS */}
      <section id="how-it-works" className="py-24 relative bg-gradient-to-b from-transparent via-white/5 to-transparent">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The 3-Step Process Most Men Get Wrong</h2>
               <p className="text-sub-text/70 text-lg">Simple. Repeatable. Effective.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
               {[
                  { icon: Target, title: "1. Locate", desc: "Find the correct pelvic floor muscle. Most men never do this properly." },
                  { icon: Zap, title: "2. Engage", desc: "Learn what correct activation actually feels like without using other muscles." },
                  { icon: Dumbbell, title: "3. Train", desc: "Build strength and control with smart, progressive daily workouts." }
               ].map((step, i) => (
                  <GlassCard key={i} className="p-10 flex flex-col items-center text-center gap-6 hover:bg-white/10" borderGlow>
                     <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-4 neon-glow">
                        <step.icon className="w-8 h-8" />
                     </div>
                     <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                     <p className="text-sub-text/80 leading-relaxed">{step.desc}</p>
                  </GlassCard>
               ))}
            </div>

            <div className="max-w-3xl mx-auto">
               <GlassCard className="p-8 border-l-4 border-accent bg-accent/5">
                  <h4 className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider mb-4">
                     <AlertTriangle className="w-5 h-5" /> Why Most Fail
                  </h4>
                  <p className="text-xl text-sub-text/90 leading-relaxed">
                     Most men fail because they skip <strong className="text-white">Locate</strong> and <strong className="text-white">Engage</strong>. 
                     They jump straight to training the wrong muscle, see no results, get demotivated, or even hurt themselves. 
                     ChopK guides you through all three steps so you actually succeed.
                  </p>
               </GlassCard>
            </div>
         </div>
      </section>

      {/* 4. WHY TRAINING BEATS PILLS (Founder Story Teaser) */}
      <section className="py-24 container mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
               <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-50" />
               <GlassCard className="p-8 md:p-12 relative" borderGlow>
                  <div className="flex items-center gap-3 mb-6 text-accent font-bold uppercase tracking-wider text-sm">
                     <Lock className="w-4 h-4" /> Founder Story
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                     "Pills? That never felt practical to me."
                  </h2>
                  <div className="space-y-4 text-sub-text/80 text-lg leading-relaxed">
                     <p>
                        In my early 20s, the internet was mostly noise: misleading quick fixes and overhyped remedies.
                     </p>
                     <p>
                        Pills can build dependency and often stop working unless you keep increasing the dose. 
                        Eventually, I stumbled on something different: <strong>pelvic floor training</strong>.
                     </p>
                     <p>
                        It wasn’t magic. <strong>It was training.</strong>
                     </p>
                     <p className="text-white font-medium italic border-l-2 border-accent pl-4 my-6">
                        "Most men fail because nobody teaches them a real process. ChopK is the version I wish existed in my late teens and early 20s."
                     </p>
                  </div>
                  <div className="mt-8">
                     <Link href="/blog/founder-story">
                        <Button variant="glass" className="w-full">Read Full Story</Button>
                     </Link>
                  </div>
               </GlassCard>
            </div>
            
            <div className="space-y-8 pl-0 lg:pl-12">
               <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Stop masking the problem. <br/> <span className="text-accent">Fix the root cause.</span>
               </h2>
               <ul className="space-y-6">
                  {[
                     "No dependency on medication",
                     "Permanent physical control over time",
                     "Zero side effects",
                     "Confidence that comes from within"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-xl text-sub-text">
                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 neon-glow" />
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>

      {/* 5. REAL RESULTS */}
      <section className="py-24 relative bg-white/5">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-16">Results You Can Feel</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { quote: "I thought it was just how I was wired. Turns out I just had a weak pelvic floor. 8 weeks in and it's night and day.", author: "Mark D.", range: "8 Week Streak" },
                  { quote: "The best part isn't even the duration, it's the lack of anxiety. I know I have control now.", author: "Jason K.", range: "Level 12 User" },
                  { quote: "My partner noticed the difference before I even said anything. The app makes it impossible to forget.", author: "Ryan T.", range: "3 Month Member" }
               ].map((testimonial, i) => (
                  <GlassCard key={i} className="p-8 text-left flex flex-col justify-between" borderGlow={i === 1}>
                     <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(star => <div key={star} className="w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_rgba(238,112,35,0.5)]" />)}
                     </div>
                     <p className="text-lg text-white mb-6">"{testimonial.quote}"</p>
                     <div className="flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="font-bold text-white">{testimonial.author}</span>
                        <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">{testimonial.range}</span>
                     </div>
                  </GlassCard>
               ))}
            </div>
         </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
               Ready to take control <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">in private?</span>
            </h2>
            <p className="text-2xl text-sub-text/80 mb-12 max-w-2xl mx-auto">
               Join thousands of men mastering their performance with ChopK.
            </p>
            <Link href="https://play.google.com/store/apps/details?id=com.chopk.app" target="_blank">
               <Button size="lg" className="neon-glow px-12 py-8 text-xl rounded-full">
                  Get ChopK App
               </Button>
            </Link>
            <p className="mt-8 text-sm text-sub-text/50">
               No credit card required for trial • Cancel anytime • 100% Discreet
            </p>
         </div>
      </section>
    </div>
  );
}
