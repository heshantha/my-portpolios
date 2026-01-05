'use client'

import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [showContactPopup, setShowContactPopup] = useState(false)

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-lg shadow-blue-500/30">
              <Image src="/Heshantha.png" alt="Heshantha" width={160} height={160} className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="text-blue-400 text-lg mb-2 font-medium">Hi, I'm Heshantha Laskshitha Abeykoon</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Senior Front end 
            </span>
            <br />
            <span className="text-gradient" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Developer
            </span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            Building Intelligent Solutions | Driving Innovation & Business Growth
          </p>
          <p className="text-sm text-gray-500 mb-8">
            14 years of excellence in delivering clients tools applicable and serving<br />
            along with apply new technologies to the projects
          </p>

          <div className="flex gap-4 justify-center">
            <a href="/Heshantha Abeykoon.pdf" download="Heshantha_Abeykoon_CV.pdf" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30 inline-block">
              <Download className="inline mr-2 w-5 h-5" />
              Download CV
            </a>
            <button onClick={() => setShowContactPopup(true)} className="border border-blue-600 hover:bg-blue-600/10 px-8 py-3 rounded-lg font-semibold transition-all">
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mt-8">
            <a href="https://github.com/heshantha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/uiconsultantsrilanka" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:heshantha.l@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            Dedicated and innovative Senior Front-End Developer with over a decade of experience in crafting engaging user interfaces and seamless user experiences. Proficient in a variety of front-end frameworks and technologies, including React, Vue.js, Next.js, and Angular. Skilled in translating design concepts into responsive, high-performance web applications.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="card-glass rounded-xl p-8 animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <h3 className="text-2xl font-bold">Technical Expertise</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 font-semibold">Frontend Development</span>
                    <span className="text-gray-400">95%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">HTML</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">CSS</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">TypeScript</span>
                  </div>
                </div>

                {/* Frameworks & Libraries */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 font-semibold">Frameworks & Libraries</span>
                    <span className="text-gray-400">95%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">React.js</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Next.js</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Vue.js</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Angular</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Redux</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Zustand</span>
                  </div>
                </div>

                {/* CSS & UI Frameworks */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 font-semibold">CSS & UI Frameworks</span>
                    <span className="text-gray-400">90%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Sass</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Less</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Bootstrap</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Material UI</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Shadcn UI</span>
                  </div>
                </div>

                {/* UI/UX & Design Tools */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 font-semibold">UI/UX & Design</span>
                    <span className="text-gray-400">88%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Figma</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Adobe XD</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Photoshop</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Illustrator</span>
                  </div>
                </div>

                {/* Backend & Database */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 font-semibold">Backend & Database</span>
                    <span className="text-gray-400">75%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Node.js</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Express.js</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">REST APIs</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">GraphQL</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">MongoDB</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">MySQL</span>
                  </div>
                </div>

                {/* Tools & Cloud */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 font-semibold">Cloud & DevOps</span>
                    <span className="text-gray-400">80%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">AWS</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">firebase</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Git</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">CI/CD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Journey */}
            <div className="card-glass rounded-xl p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <h3 className="text-2xl font-bold">Professional Journey</h3>
              </div>

              <div className="space-y-6">
                {/* APIG Pvt Ltd */}
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">Senior Front-End Developer</h4>
                    <span className="text-sm text-gray-400 whitespace-nowrap">May 2025 - Present</span>
                  </div>
                  <p className="text-blue-400 text-xs mb-2">APIG Pvt Ltd</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Developed and maintained responsive web applications using Next.js, Shadcn UI, TypeScript and Tailwind CSS</li>
                    <li>• Contributed to Apigenie product (WMS, carriers, eCommerce platform) and Wildwood inventory management system</li>
                    <li>• Significantly improved Apigenie performance and optimized codebase</li>
                  </ul>
                </div>

                {/* Talphsolutions Pvt Ltd */}
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">Senior Front-End Developer</h4>
                    <span className="text-sm text-gray-400 whitespace-nowrap">Jul 2024 - May 2025</span>
                  </div>
                  <p className="text-blue-400 text-xs mb-2">Talphsolutions Pvt Ltd</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Developed responsive web applications using Next.js, Material-UI, and Tailwind CSS</li>
                    <li>• Contributed to Medispec project (patient appointment system for UK hospital)</li>
                    <li>• Enhanced functionality and UI/UX for CityHire platform built on Umbraco and JavaScript</li>
                  </ul>
                </div>

                {/* Codehouse Pvt Ltd */}
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">Senior Front-End Developer</h4>
                    <span className="text-sm text-gray-400 whitespace-nowrap">Jan 2024 - Jul 2024</span>
                  </div>
                  <p className="text-blue-400 text-xs mb-2">Codehouse Pvt Ltd</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Created and modified Sitecore components, optimized code for better performance</li>
                    <li>• Successfully launched urgent project within short timeframe</li>
                    <li>• Improved performance and code reusability by optimizing scripts and CSS</li>
                  </ul>
                </div>

                {/* Sana Commerce Pvt Ltd */}
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">Associated Tech Lead</h4>
                    <span className="text-sm text-gray-400 whitespace-nowrap">Nov 2018 - Nov 2023</span>
                  </div>
                  <p className="text-blue-400 text-xs mb-2">Sana Commerce Pvt Ltd</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Led team of 3 Front-end developers, achieved 40% increase in project customizations</li>
                    <li>• Managed multiple B2B/B2C e-commerce project customizations for USA, Euro, and Australia regions</li>
                    <li>• Successfully secured two major customers by addressing their concerns effectively</li>
                  </ul>
                </div>
                {/* EasyBooking Pvt Ltd */}
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">Senior Front-End Developer</h4>
                    <span className="text-sm text-gray-400 whitespace-nowrap">Nov 2015 - Nov 2018</span>
                  </div>
                  <p className="text-blue-400 text-xs mb-2">EasyBooking Pvt Ltd</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Lead a team responsible for web and mobile application development</li>
                    <li>• Provided innovative products and digital solutions to help businesses navigate complex
                    markets.</li>
                  </ul>
                </div>
                  {/* 3PRG Pvt Ltd */}
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg"> Front-End Developer</h4>
                    <span className="text-sm text-gray-400 whitespace-nowrap">Nov 2014 - Nov 2015</span>
                  </div>
                  <p className="text-blue-400 text-xs mb-2">EasyBooking Pvt Ltd</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Oversee the development and delivery of effective user interfaces for various client websites.</li>
                    <li>• Ensured complex information was presented in a compelling manner.</li>
                  </ul>
                </div>
                {/* Victory Information (Pvt) Ltd */}
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">UI Engineer</h4>
                    <span className="text-sm text-gray-400 whitespace-nowrap">Mar 2013 - Oct 2014</span>
                  </div>
                  <p className="text-blue-400 text-xs mb-2">Victory Information (Pvt) Ltd</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Contributed as a UI Engineer to the leading software development company in Sri Lanka.</li>
                    <li>• Worked with a diverse team of developers, designers, QA engineers, and marketers.</li>
                  </ul>
                </div>
                {/* Ranomark International (Pvt) Ltd  */}
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">Training UI Engineer / UI Engineer</h4>
                    <span className="text-sm text-gray-400 whitespace-nowrap">Aug 2011 - Mar 2013</span>
                  </div>
                  <p className="text-blue-400 text-xs mb-2">Ranomark International (Pvt) Ltd</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Progressed from trainee UI Designer to UI Engineer at a Total IT solutions company.</li>
                    <li>• Supported businesses of all sizes with successful web solutions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="card-glass rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Mission Statement</h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
            To design and build high-quality, innovative digital solutions that solve real business problems, delight users, and create long-term value for clients—while continuously learning, sharing knowledge, and raising the standard of frontend development.
            </p>
          </div>

          {/* Education Section */}
          <div className="card-glass rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <h3 className="text-2xl font-bold">Education & Certifications</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="font-bold text-lg mb-1">Bachelor of Information Technology (BIT)</h4>
                <p className="text-blue-400 text-sm mb-2">Sri Lankan Institute of Information Technology</p>
                <span className="text-sm text-gray-400">2010 - 2013</span>
              </div>

              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="font-bold text-lg mb-1">Web Development using PHP/MySQL</h4>
                <p className="text-blue-400 text-sm mb-2">Sri Lanka Institute of Information Technology</p>
                <span className="text-sm text-gray-400">2016</span>
              </div>

              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="font-bold text-lg mb-1">Diploma in Computer Studies</h4>
                <p className="text-blue-400 text-sm mb-2">Tertiary and Vocational Education Commission of Sri Lanka</p>
                <span className="text-sm text-gray-400">2004</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-dark-800/30" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">
            Showcasing real-world applications with measurable impact and cutting-edge technology
          </p>

          {/* Filter Buttons */}
          {/* <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button className="px-6 py-2 bg-blue-600 rounded-full font-semibold transition-all hover:bg-blue-700">
              All
            </button>
            <button className="px-6 py-2 bg-dark-700 rounded-full font-semibold transition-all hover:bg-dark-600">
              Machine Learning
            </button>
            <button className="px-6 py-2 bg-dark-700 rounded-full font-semibold transition-all hover:bg-dark-600">
              Full Stack
            </button>
            <button className="px-6 py-2 bg-dark-700 rounded-full font-semibold transition-all hover:bg-dark-600">
              Featured
            </button>
          </div> */}

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-glass rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
            <div className="relative h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl"><img src="/project/integria-web-logo.png" alt="integria-web-logo" className="w-full h-full object-cover" /></div>
                <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">
                    E-commerce
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Integria Healthcare</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Integria Healthcare E-commerce Platform</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Developed a comprehensive e-commerce platform for Integria Healthcare, a leading natural healthcare company in Australia. Built a responsive, user-friendly online store with product catalog, shopping cart, and secure checkout functionality.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">KEY FEATURES:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Full-featured e-commerce platform with product management</li>
                    <li>• Responsive design optimized for all devices</li>
                    <li>• Advanced product filtering and search functionality</li>
                    <li>• Secure payment integration and checkout process</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">TECH STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">HTML5</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">CSS3</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">jQuery</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">E-commerce</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://www.integria.com/en-au" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
            <div className="relative h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl"><img src="/project/isuzu-australia.png" alt="isuzu" className="w-full h-full object-cover" /></div>
                <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">
                    React Js
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Isuzu UTE Australia</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Isuzu UTE Australia Website</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Developed a comprehensive corporate website for Isuzu UTE Australia featuring their D-MAX ute and MU-X SUV vehicle lines. Built with modern front-end technologies and Sitecore CMS for content management and scalability.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">KEY FEATURES:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Interactive vehicle configurator and build & quote tools</li>
                    <li>• Dealer locator and test drive booking system</li>
                    <li>• Responsive design optimized for all devices</li>
                    <li>• Dynamic content management with Sitecore CMS</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">TECH STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">React.js</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">SCSS</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Sitecore</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">JavaScript</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://www.isuzuute.com.au/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
            <div className="relative h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl"><img src="/project/city-hire-logo.png" alt="cityhire" className="w-full h-full object-cover" /></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">
                    CMS Development
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">CityHire UK</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">CityHire Equipment Rental Platform</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Developed and enhanced the CityHire equipment rental platform built on Umbraco CMS. Improved functionality, user experience, and implemented modern UI/UX design for one of UK's leading equipment hire services.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">KEY FEATURES:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Equipment catalog with advanced search and filtering</li>
                    <li>• Responsive design optimized for mobile and desktop</li>
                    <li>• Dynamic content management with Umbraco CMS</li>
                    <li>• Enhanced user interface with modern styling</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">TECH STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Umbraco</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">HTML5</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://www.cityhire.co.uk/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <div className="relative h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl"><img src="/project/waverley-mills.png" alt="waverley-mills" className="w-full h-full object-cover" /></div>
                <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">
                    Word Press
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Waverley Mills Australia</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Waverley Mills E-commerce Store</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Developed a premium e-commerce platform for Waverley Mills, Australia's heritage wool mill. Built with WordPress and custom theming for a luxurious shopping experience featuring wool blankets, throws, and home accessories.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">KEY FEATURES:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Full e-commerce functionality with secure checkout</li>
                    <li>• Custom WordPress theme with elegant design</li>
                    <li>• Product catalog with advanced filtering by material and category</li>
                    <li>• Responsive design optimized for mobile shopping</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">TECH STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">WordPress</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">WooCommerce</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Custom Theming</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">PHP</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">JavaScript</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://waverleymills.com/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <div className="relative h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl"><img src="/project/mustad-logo.png" alt="mustad" className="w-full h-full object-cover" /></div>
                <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">
                    B2B E-commerce
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Mustad EMEA</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Mustad B2B Dealer Webshop</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Developed a comprehensive B2B dealer e-commerce platform for Mustad EMEA Distribution. Built a secure, login-based webshop with multi-language support for authorized dealers across Europe, Middle East, and Africa regions.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">KEY FEATURES:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Secure B2B dealer authentication and access control</li>
                    <li>• Multi-language support (EN, DE, ES, FR, IT)</li>
                    <li>• Custom pricing and product catalog for dealers</li>
                    <li>• Responsive design for seamless ordering experience</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">TECH STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">HTML5</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">CSS3</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">jQuery</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">E-commerce</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://dealershop.mustad.com/en-us/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <div className="relative h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl"><img src="/project/larsonjuhl-logo.png" alt="larsonjuhl" className="w-full h-full object-cover" /></div>
                <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">
                    B2B E-commerce
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Larson Juhl UK</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Larson Juhl E-commerce Platform</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Developed a comprehensive e-commerce platform for Larson Juhl UK, a leading supplier of picture framing products and mouldings. Built a professional platform with extensive product catalog and seamless ordering experience for trade customers.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">KEY FEATURES:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Extensive product catalog with detailed specifications</li>
                    <li>• Advanced search and filtering for framing products</li>
                    <li>• Secure e-commerce with trade customer pricing</li>
                    <li>• Responsive design optimized for professional users</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">TECH STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">HTML5</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">CSS3</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">jQuery</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">E-commerce</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://larsonjuhl.co.uk/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <div className="relative h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl"><img src="/project/sfs-logo.png" alt="sfs" className="w-full h-full object-cover" /></div>
                <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">
                    E-commerce
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">SFS Group UK</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">SFS UK E-commerce Platform</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Developed a comprehensive e-commerce platform for SFS Group UK, a leading manufacturer of mechanical fastening systems and precision components. Built a professional B2B/B2C platform with advanced product catalog and ordering capabilities.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">KEY FEATURES:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Comprehensive product catalog with technical specifications</li>
                    <li>• Advanced search and filtering for industrial components</li>
                    <li>• Secure e-commerce functionality with order management</li>
                    <li>• Responsive design optimized for B2B users</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">TECH STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">HTML5</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">CSS3</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">jQuery</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">E-commerce</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://uk.sfs.com/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <div className="relative h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl"><img src="/project/powerhousegroup-logo.png" alt="powerhousegroup" className="w-full h-full object-cover" /></div>
                <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">
                    Corporate Website
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">PowerHouse Group Australia</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">PowerHouse Group Corporate Website</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Developed a professional corporate website for PowerHouse Group Australia, a leading provider of business solutions and services. Built a modern, responsive platform showcasing their services, expertise, and company values with engaging user experience.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">KEY FEATURES:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Modern corporate design with professional aesthetics</li>
                    <li>• Service showcase with detailed information architecture</li>
                    <li>• Responsive layout optimized for all devices</li>
                    <li>• Contact forms and lead generation functionality</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">TECH STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">HTML5</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">CSS3</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">jQuery</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Responsive Design</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://www.powerhousegroup.com.au/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <div className="relative h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl"><img src="/project/fastlinecarpetcleaning-logo.png" alt="fastlinecarpetcleaning" className="w-full h-full object-cover" /></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">
                    Word Press
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Fastline Carpet Cleaning Melbourne</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Fastline Carpet Cleaning Website</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Developed a comprehensive service website for Fastline Carpet Cleaning, a professional cleaning company serving Melbourne and surrounding areas. Built a user-friendly platform showcasing their cleaning services with online booking and quote functionality.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">KEY FEATURES:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Complete service catalog with detailed descriptions</li>
                    <li>• Online booking and quote request forms</li>
                    <li>• Responsive design for mobile and desktop users</li>
                    <li>• Service area locator and customer testimonials</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">TECH STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">WordPress</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">PHP</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">CSS3</span>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs">Responsive Design</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://www.fastlinecarpetcleaning.com.au/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">
            Ready to transform your ideas into reality? Let's discuss how I can help you build intelligent, scalable solutions! Let's discuss your project and business growth.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card-glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <h3 className="text-xl font-bold">Get In Touch</h3>
                </div>
                
                <div className="space-y-4">
                  <a href="mailto:khizerhayat345@gmail.com" className="flex items-center gap-4 p-4 rounded-lg hover:bg-dark-700 transition-all group">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-all">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">EMAIL</p>
                      <p className="font-semibold">heshantha.l@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+94719412688" className="flex items-center gap-4 p-4 rounded-lg hover:bg-dark-700 transition-all group">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-all">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">WHATSAPP</p>
                      <p className="font-semibold">+94 71 941 2688</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LOCATION</p>
                      <p className="font-semibold">Remote / Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-glass rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Availability Status</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Currently accepting new opportunities.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name *</label>
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject *</label>
                  <input 
                    type="text" 
                    placeholder="What is this about?"
                    className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-dark-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Heshantha Laskshitha Abeykoon</h3>
              <p className="text-gray-400 text-sm">
                Building intelligent solutions and driving innovation through front end development and new technologies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold text-white">Email:</span><br />
                  heshantha.l@gmail.com
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold text-white">Status:</span><br />
                  Open for new opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Heshantha. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Made with ❤️ using <span className="text-blue-400">Next.js</span> and <span className="text-blue-400">TypeScript</span>
            </p>
          </div>
        </div>
      </footer>
      {showContactPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in" onClick={() => setShowContactPopup(false)}>
          <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 border border-blue-500/30 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl shadow-blue-500/20 animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowContactPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
              <p className="text-gray-400 mb-6">Call me directly for any inquiries</p>
              
              <a 
                href="tel:+94719412688"
                className="block bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-lg font-semibold text-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30 mb-4"
              >
                <Phone className="inline mr-2 w-5 h-5" />
                +94 71 941 2688
              </a>
              
              <p className="text-gray-500 text-sm">
                Available for calls and consultations
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
