import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about/about.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d368f] mb-6">
              Tentang Kami
            </h2>
            <div className="w-24 h-1 bg-[#2d368f] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={aboutImg}
                  alt="Nefo Coffee Shop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2d368f] rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-[#2d368f]">
                Nefo Coffee
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kami adalah kedai kopi yang berdedikasi untuk menyajikan pengalaman kopi terbaik. 
                Dengan biji kopi pilihan dan barista berpengalaman, kami menghadirkan cita rasa kopi 
                yang autentik dan berkualitas.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#2d368f]">Jam Operasional</h4>
                  <p className="text-gray-600">Senin - Minggu</p>
                  <p className="text-gray-600">17:00 - 00:00</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#2d368f]">Lokasi</h4>
                  <p className="text-gray-600">Jl. Kusuma Bangsa</p>
                  <p className="text-gray-600">Tarakan, Kalimantan Utara</p>
                </div>
              </div>
              <motion.a
                href="https://instagram.com/nefo.coff"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2d368f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2d368f]/90 transition-all inline-block"
              >
                Kunjungi Kami
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;