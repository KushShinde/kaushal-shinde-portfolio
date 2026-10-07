import React, { useState } from 'react';
import { 
  Shield, Terminal, Cpu, Network, Lock, Server, Code, 
  ExternalLink, Mail, Phone, MapPin, Linkedin, Award, Briefcase, GraduationCap 
} from 'lucide-react';

const resumeData = {
  name: "SHINDE KAUSHAL DASHRATH",

  title: "Cybersecurity, Network & Cloud Security Engineer",

  location: "Mumbai, India",

  email: "kushshshinde123@gamil.com",

  phone: "+919503962122",

  linkedin: "https://www.linkedin.com/in/Kaushal-shinde-822a88195",

  website: "https://kaushal-shinde-portolio.vercel.app",

  summary:
    "Cybersecurity, Network & Cloud Security Engineer with 3+ years of experience in network operations, security operations, and infrastructure implementation across enterprise environments. Hands-on experience with Palo Alto and Fortinet Firewalls, IDS/IPS, SIEM, SD-WAN, Cisco LAN/WAN and Wireless, Load Balancers, and Layer 2/Layer 3 networking. Skilled in Infoblox DNS, DHCP, and IPAM, network automation using Ansible Semaphore, and AWS cloud technologies, with exposure to automation, infrastructure security, and secure network implementation. Experienced in troubleshooting, security monitoring, infrastructure operations, and technical project coordination, with a strong interest in Cloud Security, DevOps, and DevSecOps practices.",

  certifications: [
    {
      title: "CCNA 201-301",
      issuer: "Cisco"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS"
    },
    {
      title: "CompTIA Pentest+",
      issuer: "In Progress"
    }
  ],

  skills: {
    "Networking & Security": [
      "Cisco Routing & Switching",
      "LAN/WAN",
      "VLAN",
      "VPN",
      "OSPF",
      "EIGRP",
      "BGP",
      "Palo Alto",
      "Fortinet",
      "F5 LTM",
      "Infoblox",
      "SD-WAN"
    ],

    "Cloud": [
      "AWS",
      "AWS Lambda",
      "VPC",
      "Load Balancer",
      "IAM",
      "S3",
      "AWS GuardDuty",
      "SNS"
    ],

    "SOC & Security": [
      "Splunk",
      "Cortex XSOAR",
      "HarfangLab EDR",
      "OpenVAS",
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "Metasploit"
    ],

    "Automation": [
      "Ansible Semaphore",
      "Bash",
      "Python"
    ],

    "Operating Systems": [
      "Ubuntu",
      "Kali Linux",
      "Fedora",
      "RHEL",
      "Windows",
      "Mac",
      "SQL"
    ]
  },

  experience: [
    {
      role: "Network & Security Engineer (L2)",
      company: "Safran India Pvt Ltd, Mumbai",
      period: "April 2024 – Present",

      points: [
        "Managed the operation, implementation, and troubleshooting of LAN/WAN devices, including incident handling and resolution.",

        "Configured and optimized Palo Alto and Fortinet firewall rules, implemented security policies and network segmentation, and created objects, templates, and profiles in Panorama.",

        "Monitored firewall logs and traffic flows, performed backups, and supported firmware/OS upgrades.",

        "Managed Wireless LAN Controllers (WLC) and Wi-Fi infrastructure, including incident troubleshooting, Access Point onboarding, and creation and validation of tags and profiles.",

        "Managed Infoblox DNS, DHCP, and IPAM by creating and maintaining zones, sub-zones, hosts/records, networks, containers, and DHCP pools.",

        "Supported AWS server and container migrations.",

        "Monitored network security using Splunk and AWS-integrated SIEM tools to identify, investigate, and respond to potential security incidents, threats, and vulnerabilities.",

        "Managed day-to-day Cisco SD-WAN operations, ensuring end-to-end connectivity across routing, LAN/WAN, firewalls, and security infrastructure.",

        "Used Ansible Semaphore for network automation, including device backups and firmware/OS upgrades.",

        "Supported F5 LTM load-balancing operations and request management.",

        "Managed incident and change activities using ServiceNow and Cortex XSOAR, including incident response, workflow handling, and dashboard creation.",

        "Worked on infrastructure projects involving Wireless, Infoblox, and Palo Alto firewall upgrades, supporting implementation, testing, and operational transition."
      ]
    },

    {
      role: "Network & Security Engineer (L1)",
      company: "Safran India Pvt Ltd, Mumbai",
      period: "April 2023 – March 2024",

      points: [
        "Monitored LAN/WAN, firewalls, network and infrastructure devices using Centreon, Dynatrace, Grafana, Splunk, Hypervisor, and Cortex XSOAR.",

        "Managed incident, change, and RMA operations, including incident creation, updates, criticality categorization, and coordination with Orange Business Services (OBS) and NTT.",

        "Planned and scheduled device maintenance activities during approved downtime windows.",

        "Prepared daily monitoring and device status reports, tracked operational incidents, and raised OSS requests to support timely resolution and infrastructure operations.",

        "Supported device decommissioning and CMDB maintenance, ensuring accurate asset records, lifecycle updates, and closure of infrastructure changes."
      ]
    }
  ],

  projects: [
    {
      title: "Docker Container Security with Nagios Monitoring",

      tech: [
        "Docker",
        "Jenkins",
        "Linux",
        "Nagios",
        "IDS/IPS",
        "Firewall"
      ],

      description:
        "Implemented continuous integration using Jenkins pipeline in Linux environment. Configured containerization for website isolation and enhanced security. Deployed multi-factor authentication and firewall rules to manage network traffic. Utilized IDS/IPS tools for vulnerability detection and Nagios for real-time monitoring."
    },

    {
      title: "Threat Detection with AWS GuardDuty",

      tech: [
        "AWS GuardDuty",
        "Terraform",
        "S3",
        "EventBridge",
        "SNS",
        "Lambda",
        "IAM"
      ],

      description:
        "Deployed an AWS GuardDuty detector using Terraform with S3 protection enabled. Built an event-driven alert pipeline routing high-severity findings through EventBridge to SNS email notifications. Implemented a Lambda function to automatically quarantine compromised IAM credentials by attaching a deny-all policy."
    },

    {
      title: "SIEM Shield – SIEM & Security Monitoring Framework",

      tech: [
        "Elastic Stack",
        "Elasticsearch",
        "Kibana",
        "MISP",
        "VirusTotal"
      ],

      description:
        "Developed a SIEM and security monitoring framework for log analysis and threat detection using the Elastic Stack. Logs are parsed, filtered, and stored in Elasticsearch. Kibana provides analytics and dashboards with integration of MISP and VirusTotal."
    }
  ],

  education: [
    {
      degree:
        "Post Graduate Diploma in IT Infrastructure, Systems & Security (PG-DITISS)",
      school: "Sunbeam Institute, Pune",
      year: "2023",
      details:
        "CDAC Advanced Computing and Training Program. Specialization in Cybersecurity. Overall Percentage: 60.35%. Key Modules: Security Concepts, PKI & Cyber Forensics, Network Defense & Countermeasures."
    },

    {
      degree:
        "Bachelor of Technology in Electrical & Electronics Engineering",
      school: "School of Engineering Technology, Sandip University, Nashik",
      year: "2022",
      details: "Overall Percentage: 70.68%."
    },

    {
      degree: "Diploma in Engineering",
      school: "Government Polytechnic, Dhule | MSBTE",
      year: "2018"
    }
  ],

  extras: {
    languages: [
      "English (Professional)",
      "Hindi (Professional)",
      "Marathi (Native)",
      "French (Beginner)"
    ],

    hobbies: [
      "Hiking",
      "Photography",
      "Adventure Riding"
    ],

    hackathons: []
  }
};


function App() {
  return (
    <div>
      <h1>{resumeData.name}</h1>
      <h2>{resumeData.title}</h2>
      <p>{resumeData.summary}</p>
    </div>
  );
}

export default App;
