import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2d368f] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Nefo Coffee</h3>
            <p className="text-white/70">
              Nikmati kopi berkualitas dengan suasana yang nyaman dan modern
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/nefo.coff"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com/nefo.coff"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/nefocoffee"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Menu Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#location" className="text-white/70 hover:text-white transition-colors">
                  Lokasi
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Kontak</h4>
            <ul className="space-y-2">
              <li className="text-white/70">
                Jl. Kusuma Bangsa
              </li>
              <li className="text-white/70">
                Tarakan, Kalimantan Utara
              </li>
              <li className="text-white/70">
                +62 8958-1978-1674
              </li>
              <li className="text-white/70">
                nefo.coff@gmail.com
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Jam Operasional</h4>
            <ul className="space-y-2">
              <li className="text-white/70">
                Senin - Minggu: 17:00 - 00:00
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 text-center text-white/50"
        >
          <p>&copy; {new Date().getFullYear()} Nefo Coffee. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;