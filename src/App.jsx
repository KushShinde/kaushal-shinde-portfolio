import React, { useState } from 'react';
import { 
  Shield, Terminal, Cpu, Network, Lock, Server, Code, 
  ExternalLink, Mail, Phone, MapPin, Linkedin, Award, Briefcase, GraduationCap 
} from 'lucide-react';

const resumeData = {
  name: "Kaushal Shinde",
  title: "SOC Analyst (L1) | Network & Security Engineer",
  location: "Mumbai, India",
  email: "kushshinde123@gmail.com",
  phone: "9503962122",
  linkedin: "https://linkedin.com/in/kaushal-shinde-822a88195",
  summary: "Network & Security Engineer with 2+ years of experience specializing in Cisco LAN/WAN infrastructure, Palo Alto firewalls, and network optimization. Strong expertise in Layer 2/3 switching, Infoblox (DNS, DHCP, IPAM), IDS/IPS, and SIEM. Hands-on SOC L1 exposure with Splunk, Cortex XSOAR, and HarfangLab.",
  certifications: [
    { title: "CCNA 201-301", issuer: "Cisco" },
    { title: "Certified Ethical Hacker (CEH v13)", issuer: "EC-Council", id: "ECC2759480136" }
  ],
  skills: {
    Networking: ["Routers", "Switches", "LAN/WAN", "Wireless", "VLANs", "Subnetting", "TCP/IP", "SSH"],
    SIEM_SOAR: ["Splunk", "Elasticsearch", "Cortex XSOAR"],
    Security_EDR: ["HarfangLab", "Palo Alto Firewalls", "IDS/IPS", "Infoblox (DNS/DHCP/IPAM)"],
    Monitoring: ["Centreon", "Dynatrace", "Hypervisor", "Wireshark", "Nmap"],
    Automation_OS: ["Ansible (Semaphore)", "Python", "Bash", "Linux", "Windows", "AWS"]
  },
  experience: [
    {
      role: "Network & Security Engineer",
      company: "Safran India Pvt. Ltd.",
      period: "Apr 2023 - Present",
      points: [
        "Managed and monitored enterprise LAN/WAN infrastructure and performed SIEM-based security monitoring (SOC L1).",
        "Worked with Splunk for log analysis and basic correlation.",
        "Supported incident response using Cortex XSOAR and ServiceNow.",
        "Handled EDR monitoring using HarfangLab.",
        "Implemented Infoblox DDI changes (Normal & Standard) and processed small FOF requests on Palo Alto firewalls.",
        "Monitored infrastructure using Centreon and Dynatrace; analyzed traffic via Wireshark and Nmap."
      ]
    }
  ],
  projects: [
    {
      title: "SIEMShield – Security Monitoring Framework",
      tech: ["Elastic Stack", "Splunk", "Cortex XSOAR"],
      description: "Log analysis and threat detection framework using Elastic Stack, featuring integrated SOC workflow exposure with Splunk and Cortex XSOAR."
    },
    {
      title: "Docker Container Security with Monitoring",
      tech: ["Docker", "Jenkins CI/CD", "IDS/IPS", "Nagios"],
      description: "Designed secure Docker deployments with automated CI/CD pipelines, integrated IDS/IPS rules, and real-time Nagios-based monitoring."
    }
  ],
  education: [
    { degree: "PG Diploma in IT (CDAC) – System & Security", school: "Sunbeam Institute, Pune", year: "2023" },
    { degree: "B.Tech – Electrical & Electronics Engineering", school: "Sandip University, Nashik", year: "2022" },
    { degree: "Diploma in Engineering", school: "Government Polytechnic, Dhule", year: "2018" }
  ],
  extras: {
    languages: ["English", "Hindi", "Marathi"],
    hobbies: ["Hiking", "Photography", "Adventure Riding"],
    hackathons: ["Hackit Hackathon (Mumbai)", "Hackit CTF – 2024 & 2025"]
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState("All");
  const [terminalMode, setTerminalMode] = useState(false);

  const allSkills = Object.values(resumeData.skills).flat();

  return (
    <div className={`min-h-screen transition-colors duration-300 font-mono ${terminalMode ? 'bg-black text-green-400' : 'bg-slate-950 text-slate-100'}`}>
      
      {/* Top Bar / Header Nav */}
      <nav className="border-b border-slate-800 p-4 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-lg text-emerald-400">
            <Shield className="w-5 h-5" />
            <span>{resumeData.name.toLowerCase().replace(" ", "_")}.sec</span>
          </div>
          <button 
            onClick={() => setTerminalMode(!terminalMode)}
            className="flex items-center gap-2 border border-slate-700 px-3 py-1.5 rounded-md text-xs hover:border-emerald-500 hover:text-emerald-400 transition"
          >
            <Terminal className="w-4 h-4" />
            {terminalMode ? "Exit Cyber Mode" : "Cyber Mode"}
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Hero Section */}
        <section className="space-y-6 border-b border-slate-800 pb-12">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-full">
            ● SOC L1 Analyst & Network Specialist
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            {resumeData.name}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl font-sans">
            {resumeData.title}
          </p>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed font-sans">
            {resumeData.summary}
          </p>

          {/* Quick Info & Social Links */}
          <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-2">
            <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400"/> {resumeData.location}</div>
            <a href={`mailto:${resumeData.email}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition"><Mail className="w-4 h-4 text-emerald-400"/> {resumeData.email}</a>
            <div className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-emerald-400"/> {resumeData.phone}</div>
            <a href={resumeData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-emerald-400 hover:underline">
              <Linkedin className="w-4 h-4"/> LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Certifications Badge Bar */}
          <div className="flex flex-wrap gap-3 pt-4">
            {resumeData.certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg text-xs">
                <Award className="w-4 h-4 text-amber-400" />
                <div>
                  <span className="text-white font-semibold">{cert.title}</span>
                  {cert.id && <span className="text-slate-500 text-[10px] block">ID: {cert.id}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Skills Matrix */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-emerald-400" /> Security & Tech Stack
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {["All", ...Object.keys(resumeData.skills)].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-3 py-1 rounded-md text-xs font-mono transition ${
                  activeTab === category 
                    ? "bg-emerald-500 text-slate-950 font-bold" 
                    : "bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {category.replace("_", " ")}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-2">
            {(activeTab === "All" ? allSkills : resumeData.skills[activeTab]).map((skill, index) => (
              <span 
                key={index} 
                className="bg-slate-900 border border-slate-800 text-emerald-300 px-3 py-1.5 rounded-lg text-xs hover:border-emerald-500/50 transition cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-emerald-400" /> Professional Experience
          </h2>
          <div className="space-y-8">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-emerald-500/40 space-y-2">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
                </div>
                <p className="text-emerald-400 text-sm font-medium">{exp.company}</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs font-sans leading-relaxed pt-2">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Code className="w-5 h-5 text-emerald-400" /> Key Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.projects.map((proj, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/50 transition group space-y-4">
                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition">{proj.title}</h3>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & CTFs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" /> Education
            </h2>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-lg space-y-1">
                  <h3 className="text-xs font-bold text-white">{edu.degree}</h3>
                  <p className="text-xs text-slate-400">{edu.school}</p>
                  <p className="text-[10px] text-emerald-400">{edu.year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTF & Activities */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-400" /> CTF & Activities
            </h2>
            <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-lg space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block font-semibold mb-1">Hackathons & CTFs:</span>
                <div className="flex flex-wrap gap-2">
                  {resumeData.extras.hackathons.map((h, i) => (
                    <span key={i} className="bg-slate-800 text-emerald-300 px-2 py-1 rounded text-[11px]">{h}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-1">Languages:</span>
                <p className="text-slate-300">{resumeData.extras.languages.join(", ")}</p>
              </div>
            </div>
          </section>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Kaushal Shinde. Built with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}
