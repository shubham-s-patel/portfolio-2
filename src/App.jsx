import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Cpu, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  MapPin,
  Phone,
  Sun,
  Moon,
  ArrowRight
} from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
};

// Directional Tab Variants
const tabContentVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    filter: 'blur(10px)'
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    filter: 'blur(10px)',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  
  // Tab State with Direction Tracking
  const [activeTabName, setActiveTabName] = useState("Backend & Logic");
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const userData = useMemo(() => ({
    name: "Shubham Patel",
    title: "Software Developer & Backend Architect",
    location: "Lucknow, UP, India",
    email: "shubham.patel.swe@gmail.com",
    phone: "+91 7307377298",
    stats: [
      { label: "Users Impacted", value: "1M+" },
      { label: "Performance Gain", value: "40%" },
      { label: "Bugs Reduced", value: "60%" },
      { label: "Apps Deployed", value: "8+" }
    ],
    skills: {
      "Backend & Logic": {
        index: 0,
        icon: Server,
        list: ["C#", ".NET Core", "ASP.NET MVC", "Java", "C++", "REST APIs"],
      },
      "Databases": {
        index: 1,
        icon: Database,
        list: ["SQL Server", "Stored Procedures", "Query Optimization", "Entity Framework", "LINQ", "Schema Design"],
      },
      "Frontend": {
        index: 2,
        icon: Globe,
        list: ["React", "Angular", "JavaScript", "Tailwind CSS", "Razor Pages", "HTML/CSS"],
      },
      "Tools & Arch": {
        index: 3,
        icon: Cpu,
        list: ["Git/GitHub", "Docker", "System Design", "MVC Architecture", "Layered Architecture", "Caching"],
      }
    },
    experience: [
      {
        company: "Technosys Services Pvt Ltd",
        role: "Software Developer",
        period: "March 2023 - Present",
        description: "Leading development of full-stack government applications, architecting database schemas, and optimizing high-traffic systems.",
        achievements: [
          "Deployed 8+ full-stack web applications supporting 1,000,000+ users.",
          "Reduced data retrieval times by 40% through optimized stored procedures.",
          "Enforced standard engineering practices reducing post-deployment bugs by 60%."
        ]
      }
    ],
    projects: [
      {
        title: "SGFI - School Games Federation of India",
        description: "National sports management platform handling event scheduling and results for 60,000+ participants.",
        tags: [".NET", "SQL Server", "Aadhaar Auth", "DigiLocker"],
        impact: "Integrated secure identity verification and automated certificate distribution."
      },
      {
        title: "Veerangana Portal",
        description: "Women empowerment training program managing automated teacher allocation across districts.",
        tags: ["GPS Validation", "Automation", "Media Scaling"],
        impact: "Saved 5 hours/week of manual processing via automated logic and GPS attendance."
      },
      {
        title: "PrernaUP",
        description: "Teacher training infrastructure with multi-phase assessment and real-time reporting.",
        tags: ["High Concurrency", "Load Balancing", "Real-time Analytics"],
        impact: "Maintained 99.9% uptime during peak usage by massive teacher cohorts."
      }
    ]
  }), []);

  const handleTabChange = (newTab) => {
    const newIndex = userData.skills[newTab].index;
    const currentIndex = userData.skills[activeTabName].index;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTabName(newTab);
  };

  const NavLink = ({ href, children }) => (
    <a 
      href={href} 
      className={`transition-colors duration-300 font-medium ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-blue-500/30 ${darkMode ? 'bg-[#0a0a0c] text-gray-100' : 'bg-[#f8fafc] text-gray-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm') : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-black bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent cursor-default">
            SHUBHAM.
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'Experience', 'Projects', 'Skills'].map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`}>{item}</NavLink>
            ))}
            <button onClick={toggleTheme} className={`p-2.5 rounded-xl transition-all ${darkMode ? 'bg-white/5 text-yellow-400 hover:bg-white/10' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'}`}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href={`mailto:${userData.email}`} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-95">
              Hire Me
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-44 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
              System architect for <br />
              <span className="text-blue-500 italic">high-concurrency</span> apps.
            </h1>
            <p className={`text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              I build robust backends and optimized database systems that power government platforms serving millions of users.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#projects" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center group transition-all hover:bg-blue-500 shadow-xl shadow-blue-500/20">
                View Work <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <div className="flex items-center space-x-4">
                <a href="#" className={`p-5 border rounded-2xl transition-all hover:scale-105 ${darkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-200 shadow-sm hover:border-blue-300'}`}><Github size={24} /></a>
                <a href="#" className={`p-5 border rounded-2xl transition-all hover:scale-105 ${darkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-200 shadow-sm hover:border-blue-300'}`}><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills / Tabs Section */}
      <section id="skills" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Technical Stack</h2>
            <p className={`font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Expertise honed over 3 years of heavy production use</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className={`flex flex-wrap justify-center gap-2 p-2 rounded-[2.5rem] border mb-12 ${darkMode ? 'bg-[#0e0e11] border-white/5' : 'bg-gray-100 border-gray-200 shadow-inner'}`}>
              <LayoutGroup id="skills-tabs">
                {Object.keys(userData.skills).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`relative px-8 py-4 rounded-[2rem] text-sm font-bold transition-colors z-10 ${
                      activeTabName === tab 
                        ? 'text-white' 
                        : (darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-800')
                    }`}
                  >
                    {activeTabName === tab && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-blue-600 rounded-[2rem] -z-10 shadow-lg shadow-blue-500/30"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    {tab}
                  </button>
                ))}
              </LayoutGroup>
            </div>

            {/* Tab Content with Directional Animation */}
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeTabName}
                  custom={direction}
                  variants={tabContentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={`p-10 md:p-14 rounded-[3.5rem] border flex flex-col md:flex-row items-center gap-12 w-full ${
                    darkMode ? 'bg-[#0e0e11] border-white/5 shadow-2xl shadow-black/50' : 'bg-white border-gray-200 shadow-xl shadow-blue-500/5'
                  }`}
                >
                  <div className={`w-28 h-28 rounded-[2rem] flex items-center justify-center shrink-0 shadow-lg ${
                    darkMode ? 'bg-blue-500/10 text-blue-400 shadow-blue-500/5' : 'bg-blue-50 text-blue-600 shadow-blue-500/10'
                  }`}>
                    {React.createElement(userData.skills[activeTabName].icon, { size: 48, strokeWidth: 1.5 })}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold mb-8 tracking-tight">{activeTabName}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                      {userData.skills[activeTabName].list.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className={`flex items-center space-x-3 p-4 rounded-2xl border transition-all hover:border-blue-500/30 ${
                            darkMode ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100 shadow-sm'
                          }`}
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                            <CheckCircle2 size={14} className="text-emerald-500" />
                          </div>
                          <span className="text-sm font-bold tracking-tight">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className={`py-32 ${darkMode ? 'bg-white/[0.01]' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center tracking-tight">Career Journey</h2>
          <div className="space-y-12">
            {userData.experience.map((exp, idx) => (
              <motion.div key={idx} variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className={`p-10 rounded-[3rem] border transition-all hover:border-blue-500/20 ${darkMode ? 'bg-[#0e0e11] border-white/5 shadow-xl' : 'bg-white border-gray-200 shadow-md'}`}>
                <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{exp.company}</h3>
                    <p className="text-blue-500 font-black uppercase tracking-widest text-[10px] mt-2 bg-blue-500/5 px-3 py-1 rounded-full inline-block">{exp.role}</p>
                  </div>
                  <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest self-start ${darkMode ? 'bg-white/5 text-gray-500' : 'bg-gray-100 text-gray-400 border border-gray-200 shadow-sm'}`}>
                    {exp.period}
                  </span>
                </div>
                <div className="space-y-5">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start text-sm leading-relaxed font-medium">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 tracking-tight">High-Impact Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {userData.projects.map((project, idx) => (
              <motion.div key={idx} whileHover={{ y: -12 }} className={`p-10 rounded-[3rem] border group transition-all relative overflow-hidden ${darkMode ? 'bg-[#0e0e11] border-white/5 hover:border-blue-500/30' : 'bg-white border-gray-200 hover:border-blue-500/30 shadow-xl shadow-blue-500/5'}`}>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors tracking-tight">{project.title}</h3>
                <p className={`text-sm mb-8 leading-relaxed font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                <div className={`p-5 rounded-2xl mb-8 border ${darkMode ? 'bg-emerald-500/5 border-emerald-500/10' : 'bg-emerald-50 border-emerald-100'}`}>
                  <p className="text-[10px] font-black uppercase text-emerald-600 mb-2 tracking-widest">Core Impact</p>
                  <p className="text-sm font-bold tracking-tight">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(t => <span key={t} className={`text-[10px] font-black uppercase tracking-tighter p-2.5 rounded-xl ${darkMode ? 'bg-white/5 text-gray-500' : 'bg-gray-100 text-gray-400'}`}>{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className={`p-16 md:p-24 rounded-[4.5rem] border relative overflow-hidden ${darkMode ? 'bg-[#0e0e11] border-white/5 shadow-2xl' : 'bg-white border-gray-200 shadow-2xl shadow-blue-500/5'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Ready to scale <br />your next system?</h2>
            <p className="text-gray-500 mb-14 max-w-xl mx-auto text-lg font-medium leading-relaxed">I'm currently available for full-stack engineering roles and high-performance architecture consulting.</p>
            <a href={`mailto:${userData.email}`} className="inline-block bg-blue-600 text-white px-14 py-7 rounded-[2rem] font-black text-xl hover:scale-105 hover:bg-blue-500 active:scale-95 transition-all shadow-2xl shadow-blue-600/30">
              Let's Connect
            </a>
            <div className="mt-16 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <div className="flex items-center space-x-3"><Mail size={18} className="text-blue-500"/> <span>{userData.email}</span></div>
              <div className="flex items-center space-x-3"><MapPin size={18} className="text-blue-500"/> <span>Lucknow, India</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] border-t border-white/5">
        © {new Date().getFullYear()} Shubham Patel • Engineered for performance
      </footer>
    </div>
  );
};

export default App;
