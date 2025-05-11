import React from 'react';
import { motion } from 'framer-motion';
import ww from '../assets/herosection/ww.jpg';
import sticker1 from '../assets/sticker/sticker1.png';
import sticker2 from '../assets/sticker/Sticker2.png';
import sticker3 from '../assets/sticker/Sticker3.png';
import sticker4 from '../assets/sticker/Sticker4.png';
import sticker5 from '../assets/sticker/Sticker5.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image dengan Parallax Effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={ww}
          alt="Hero Background"
          className="w-full h-full object-cover object-center md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </motion.div>

      {/* Stickers dengan Animasi */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img
          src={sticker1}
          alt="Sticker 1"
          className="absolute top-20 left-10 w-16 h-16 md:w-24 md:h-24"
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.img
          src={sticker2}
          alt="Sticker 2"
          className="absolute bottom-40 right-10 w-14 h-14 md:w-20 md:h-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.img
          src={sticker3}
          alt="Sticker 3"
          className="absolute top-40 right-20 w-12 h-12 md:w-16 md:h-16"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.img
          src={sticker4}
          alt="Sticker 4"
          className="absolute bottom-20 left-20 w-20 h-20 md:w-28 md:h-28"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src={sticker5}
          alt="Sticker 5"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Selamat Datang di <br />
            <span className="text-[#2d368f]">Nefo Coffee</span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nikmati kopi berkualitas dengan suasana yang nyaman dan modern
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button 
              onClick={() => scrollToSection('menu')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2d368f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2d368f]/90 transition-all text-lg shadow-lg hover:shadow-xl"
            >
              Lihat Menu
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all text-lg"
            >
              Hubungi Kami
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;