import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiCode, FiInstagram } from 'react-icons/fi';
import { TbBrandHackerrank } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { SiLeetcode } from "react-icons/si";

const LinkTree = () => {
  const [isDark, setIsDark] = useState(true);
  const [links] = useState([
    { id: 1, icon: <FiGithub />, text: 'GitHub', url: 'https://github.com/softenrj' },
    { id: 1, icon: <SiLeetcode />, text: 'Leetcode', url: 'https://leetcode.com/u/Rajse/' },
    { id: 2, icon: <FiLinkedin />, text: 'LinkedIn', url: 'https://www.linkedin.com/in/raj-sharma-23447527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' },
    { id: 3, icon: <TbBrandHackerrank />, text: 'HackerRank', url: 'https://www.hackerrank.com/profile/rjsharmase' },
    { id: 4, icon: <FiInstagram />, text: 'Instagram', url: 'https://www.instagram.com/raj_s.e?igsh=YjZqZmVsd3kwNWsx' },
    { id: 5, icon: <FaWhatsapp />, text: 'Whatsapp', url: 'https://wa.me/918360206237' },
    { id: 6, icon: <FiMail />, text: 'Contact', url: 'mailto:rjsharmase@gmail.com' },

  ]);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-slate-100'} transition-colors duration-500`}>
      {/* Animated Particles Background */}
      <div className="fixed inset-0 opacity-20">
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50 },
              move: { enable: true, speed: 1 },
              opacity: { value: 0.5 },
              size: { value: 1 },
              color: { value: '#00ff88' },
            },
          }}
        />
      </div>

      {/* Cyberpunk Grid Overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwZmY4ODMzIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIgc3R5bGU9InBhdHRlcm5Vbml0czp1c2VyU3BhY2VPblVzZSIvPjwvc3ZnPg==')]"></div>

      <main className="relative max-w-2xl mx-auto px-4 py-12">
        {/* Dark Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsDark(!isDark)}
          className={`fixed top-6 right-6 p-3 rounded-full ${isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800/20 text-slate-600'}`}
        >
          {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
        </motion.button>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-12 space-y-6"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-500/30 blur-xl rounded-full animate-pulse" />
            <img
              src="./profile.jpg"
              className="w-44 h-44 rounded-full border-4 relative object-cover "
              alt="Profile"
            />
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Raj Sharma
          </h1>

          <div className="text-lg font-mono text-emerald-400">
            <TypeAnimation
              sequence={[
                "Web Developer", 2000,
                "Open Source Contributor", 2000,
                "Tech Enthusiast", 2000,
                "Building Scalable Apps", 2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-xl font-semibold text-emerald-400"
            />

          </div>
        </motion.div>

        {/* Links Container */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center p-4 rounded-xl backdrop-blur-lg transition-all duration-300 ${isDark
                ? 'bg-slate-800/40 hover:bg-slate-800/60 border border-emerald-500/20'
                : 'bg-white/90 hover:bg-white border border-slate-200'
                }`}
            >
              <span className={`text-2xl mr-4 ${isDark ? 'text-emerald-400' : 'text-slate-600'}`}>
                {link.icon}
              </span>
              <span className={`text-lg font-medium ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                {link.text}
              </span>
              <div className={`ml-auto h-2 w-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-slate-600'}`} />
            </motion.a>
          ))}
        </motion.div>

        {/* Animated Footer */}
        <motion.footer
          className="mt-12 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
        >
          <span className={`font-mono ${isDark ? 'text-emerald-400' : 'text-slate-600'}`}>
            {`// CODE ~ ${new Date().getFullYear()} //`}
          </span>
        </motion.footer>
      </main>
    </div>
  );
};

export default LinkTree;