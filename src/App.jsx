import { useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Phone,
  ServerCog,
  ShieldCheck,
  X,
  Zap,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import heroImage from './assets/hero.png'

const profile = {
  name: 'Shubham Patel',
  role: 'Full-Stack .NET Developer with 3+ Years Experience',
  location: 'Lucknow, UP, India',
  email: 'shubham.patel.swe@gmail.com',
  phone: '+91 7307377298',
  linkedin: 'https://www.linkedin.com/in/shubham-patel-swe/',
  github: 'https://github.com/shubham-s-patel',
  resume: '/Shubham_Patel_Resume.pdf',
}

const navItems = ['Work', 'Skills', 'Experience', 'Contact']

const metrics = [
  { value: '1M+', label: 'users served' },
  { value: '8+', label: 'apps deployed' },
  { value: '40%', label: 'query latency cut' },
  { value: '99.9%', label: 'peak uptime' },
]

const skills = [
  {
    title: 'Backend',
    icon: ServerCog,
    items: ['ASP.NET Core', 'ASP.NET MVC', 'C#', 'REST APIs', 'JWT/OAuth', 'ADO.NET', 'LINQ'],
  },
  {
    title: 'Database',
    icon: Database,
    items: ['SQL Server', 'Stored Procedures', 'Query Optimization', 'Schema Design', 'Indexing', 'In-Memory Caching'],
  },
  {
    title: 'Frontend',
    icon: Globe2,
    items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Razor Pages', 'Responsive UI'],
  },
  {
    title: 'Systems',
    icon: ShieldCheck,
    items: ['Layered Architecture', 'System Design', 'Docker', 'Git/GitHub', 'Postman', 'Production Debugging'],
  },
]

const projects = [
  {
    title: 'SGFI',
    subtitle: 'School Games Federation of India',
    summary:
      'National sports management platform for event scheduling, host allocation, results tracking, secure registration, and certificate distribution.',
    impact: ['60,000+ players managed annually', 'Aadhaar, DigiLocker, payment gateway integrations', '100,000+ record datasets optimized'],
    stack: ['.NET', 'SQL Server', 'REST APIs', 'Caching'],
  },
  {
    title: 'Veerangana Portal',
    subtitle: 'Women empowerment training platform',
    summary:
      'State-wide training platform with teacher allocation, multi-phase evaluation, GPS attendance, payment automation, and media workflows.',
    impact: ['4-5 hours/week manual work reduced', 'District-wide training workflows automated', 'YouTube API and secure uploads integrated'],
    stack: ['ASP.NET MVC', 'GPS APIs', 'SQL', 'YouTube API'],
  },
  {
    title: 'PrernaUP',
    subtitle: 'FLN teacher training program',
    summary:
      'High-concurrency teacher training infrastructure with assessment logic, validation rules, and real-time district/block reporting.',
    impact: ['99.9% uptime during peak periods', 'Load-balanced infrastructure supported', 'Real-time reporting from large relational data'],
    stack: ['.NET Core', 'SQL Server', 'Reports', 'Validation'],
  },
]

const services = [
  'Full-stack web application development',
  'ASP.NET Core/MVC modernization',
  'SQL performance tuning and reporting',
  'API integrations and secure workflow automation',
]

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Shubham Patel home">
          <span className="brand-avatar">
            <img src="/shubham.jpeg" alt="" />
          </span>
          Shubham Patel
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a className="primary-action" href={`mailto:${profile.email}`}>
            <Mail size={17} />
            Hire me
          </a>
        </div>

        <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-background" aria-hidden="true">
            <img src={heroImage} alt="" />
          </div>

          <div className="hero-content">
            <div className="availability">
              <span />
              Open to full-time roles and freelance builds
            </div>

            <h1>{profile.name}</h1>
            <p className="hero-kicker">{profile.role}</p>
            <p className="hero-copy">
              I build reliable government-scale web applications with strong .NET backends, optimized SQL systems, secure
              integrations, and clean frontends that hold up under real production load.
            </p>

            <div className="hero-actions">
              <a className="primary-action large" href="#work">
                View work
                <ArrowUpRight size={18} />
              </a>
              <a className="secondary-action" href={profile.resume} target="_blank" rel="noreferrer">
                <Download size={18} />
                Resume
              </a>
            </div>

            <div className="contact-strip" aria-label="Contact information">
              <a href={`mailto:${profile.email}`}>
                <Mail size={16} />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                <Phone size={16} />
                {profile.phone}
              </a>
              <span>
                <MapPin size={16} />
                {profile.location}
              </span>
            </div>
          </div>

          <div className="metric-row" aria-label="Resume highlights">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="focus-band">
          <div className="focus-content">
            <div>
              <span>Engineering focus</span>
              <h2>Production systems, not demo screens.</h2>
            </div>
            <p>
              My strongest work is where backend rules, database performance, identity verification, reporting, and
              frontend usability all have to operate together without slowing the user down.
            </p>
          </div>
        </section>

        <section className="section" id="work">
          <SectionHeading
            eyebrow="Selected work"
            title="Government platforms with measurable outcomes"
            text="Built at Technosys Services for national and state-level programs."
          />

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project.title}
                style={{ '--card-index': index }}
              >
                <div className="project-topline">
                  <span>{project.title}</span>
                  <Code2 size={19} />
                </div>
                <h3>{project.subtitle}</h3>
                <p>{project.summary}</p>
                <ul className="impact-list">
                  {project.impact.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section muted-section" id="skills">
          <SectionHeading
            eyebrow="Technical stack"
            title="Full-stack delivery with backend depth"
            text="Comfortable across product UI, APIs, SQL-heavy systems, integrations, and production support."
          />

          <div className="skill-grid">
            {skills.map((group) => {
              const Icon = group.icon

              return (
                <article className="skill-card" key={group.title}>
                  <div className="skill-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section split-section" id="experience">
          <SectionHeading
            eyebrow="Experience"
            title="3+ years building high-traffic web systems"
            text="Currently developing production platforms across ASP.NET, SQL Server, React, Angular, and secure third-party APIs."
          />

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-marker">
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <div className="timeline-heading">
                  <div>
                    <h3>Software Developer</h3>
                    <p>Technosys Services Pvt Ltd, Lucknow</p>
                  </div>
                  <span>Mar 2023 - Present</span>
                </div>
                <ul className="experience-list">
                  <li>Engineered and deployed 8+ full-stack applications serving 1,000,000+ users.</li>
                  <li>Reduced reporting query latency by 40% through stored procedures, indexing, caching, and rewrites.</li>
                  <li>Integrated Aadhaar, DigiLocker, payment gateways, YouTube API, and GPS workflows.</li>
                  <li>Cut post-deployment bugs by 60% through code reviews and engineering standards.</li>
                  <li>Resolved SQL bottlenecks, API failures, and deployment issues on load-balanced infrastructure.</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="education-grid">
            <article>
              <span>2023 - Jun 2026 expected</span>
              <h3>B.Tech, Computer Science Engineering</h3>
              <p>Dr. M.C. Saxena Group of Colleges, Lucknow</p>
            </article>
            <article>
              <span>2019 - 2022</span>
              <h3>Diploma, Information Technology</h3>
              <p>Chatrapati Sahuji Maharaj Government Polytechnic, Ambedkar Nagar</p>
            </article>
          </div>
        </section>

        <section className="section services-section">
          <SectionHeading
            eyebrow="Freelance"
            title="Useful where performance and delivery both matter"
            text="Available for focused builds, modernization work, integrations, and SQL-heavy business applications."
          />

          <div className="service-grid">
            {services.map((service) => (
              <div className="service-item" key={service}>
                <Zap size={18} />
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <span>Contact</span>
            <h2>Let's build something that survives real users.</h2>
            <p>Reach out for full-time software roles, freelance .NET work, API integrations, or SQL performance projects.</p>
          </div>

          <div className="contact-actions">
            <a className="primary-action large" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Email me
            </a>
            <a className="secondary-action dark" href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
              LinkedIn
            </a>
            <a className="secondary-action dark" href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub />
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
