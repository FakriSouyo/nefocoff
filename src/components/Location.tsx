import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d368f] mb-6">
            Lokasi Kami
          </h2>
          <div className="w-24 h-1 bg-[#2d368f] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.95119242508198!2d117.60007673329824!3d3.295853973458962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32138a573de01411%3A0xad828d3d21ea370b!2sGn.%20Lingkas%2C%20Kec.%20Tarakan%20Tim.%2C%20Kota%20Tarakan%2C%20Kalimantan%20Utara!5e0!3m2!1sid!2sid!4v1746991308539!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#2d368f] mb-6">
                Informasi Kontak
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2d368f]/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-[#2d368f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d368f] mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      Jl. Kusuma Bangsa<br />
                      Tarakan, Kalimantan Utara
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2d368f]/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-[#2d368f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d368f] mb-1">Telepon</h4>
                    <p className="text-gray-600">+62 8958-1978-1674</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2d368f]/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-[#2d368f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d368f] mb-1">Email</h4>
                    <p className="text-gray-600">nefo.coff@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2d368f]/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-[#2d368f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d368f] mb-1">Jam Operasional</h4>
                    <p className="text-gray-600">
                      Senin - Minggu<br />
                      17:00 - 00:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              href="https://www.google.com/maps/place/Jl.+Kusuma+Bangsa/@3.2958044,117.6000211,19.41z/data=!4m7!3m6!1s0x32138a588cde8679:0x318cc932c6ba0943!4b1!8m2!3d3.2981103!4d117.6020977!16s%2Fg%2F12vrf96_3?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#2d368f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2d368f]/90 transition-all inline-block text-center"
            >
              Dapatkan Arah
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;