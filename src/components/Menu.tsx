import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { menuData } from '../data/menuData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DrinkCarousel = ({ title, items }: { title: string; items: any[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="mb-16 relative">
      <h3 className="text-3xl font-bold text-[#2d368f] mb-8 text-center capitalize">{title}</h3>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%]"
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-72 relative overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">{item.name}</h4>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#2d368f]">Rp {item.price}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-[#2d368f] hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-[#2d368f] hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('drinks');

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="menu" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#2d368f] mb-6"
          >
            Menu Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-xl mx-auto text-lg"
          >
            Temukan berbagai pilihan kopi spesial dan kue lezat kami, dibuat dengan cinta untuk kenikmatan Anda.
          </motion.p>
        </div>

        {/* Menu category tabs */}
        <div className="flex justify-center mb-12">
          <motion.div 
            className="bg-white p-1 rounded-full shadow-lg inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setActiveCategory('drinks')}
              className={`px-8 py-3 rounded-full font-medium text-base transition-all duration-300 ${
                activeCategory === 'drinks'
                  ? 'bg-[#2d368f] text-white shadow-md'
                  : 'text-[#2d368f] hover:bg-[#2d368f]/10'
              }`}
            >
              Minuman
            </button>
            <button
              onClick={() => setActiveCategory('cookies')}
              className={`px-8 py-3 rounded-full font-medium text-base transition-all duration-300 ${
                activeCategory === 'cookies'
                  ? 'bg-[#2d368f] text-white shadow-md'
                  : 'text-[#2d368f] hover:bg-[#2d368f]/10'
              }`}
            >
              Kue
            </button>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {/* Drinks Sections */}
          {activeCategory === 'drinks' && (
            <motion.div 
              key="drinks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              <DrinkCarousel 
                title="Minuman Spesial" 
                items={menuData.drinks.signature}
              />
              <DrinkCarousel 
                title="Espresso Base" 
                items={menuData.drinks["espresso base"]}
              />
              <DrinkCarousel 
                title="Non Coffee" 
                items={menuData.drinks["non coffee"]}
              />
            </motion.div>
          )}

          {/* Cookies menu */}
          {activeCategory === 'cookies' && (
            <motion.div 
              key="cookies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              {menuData.cookies.map((cookie, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <motion.div 
                    className="bg-white rounded-2xl shadow-lg overflow-hidden h-full"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="h-72 relative overflow-hidden">
                      <motion.img
                        src={cookie.image}
                        alt={cookie.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{cookie.name}</h3>
                        <p className="text-white/90 text-sm">{cookie.description}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-3">
                        {cookie.sizes?.map((size, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-gray-600">{size.weight}</span>
                            <span className="text-xl font-bold text-[#2d368f]">Rp {size.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;