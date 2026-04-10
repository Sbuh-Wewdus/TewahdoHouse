
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-10000"
        style={{ 
          backgroundImage: "url('/images/hero-church.jpg')",
          filter: "brightness(0.35) contrast(1.1)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3d1313]/40 via-transparent to-[#1a0808]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-block">
            <span className="bg-red-600 text-white text-xs font-black px-3 py-1 uppercase tracking-widest animate-pulse rounded-full shadow-lg">
              Beta Phase: Helping Us Build the Digital Library
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-header text-[#ffd700] mb-4 tracking-tighter uppercase font-extrabold drop-shadow-2xl flex flex-col items-center">
            <span className="text-4xl md:text-6xl mb-2">TewahdoHouse</span>
            <span className="text-2xl md:text-4xl opacity-90">Ethiopian & Eritrean</span>
            <span className="text-2xl md:text-4xl">Orthodox Tewahedo</span>
          </h1>
          <p className="text-xl md:text-3xl text-[#f4e4bc] font-serif italic mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Preserving the ancient traditions of the Ethiopian and Eritrean Orthodox Church through the centuries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-[#ffd700] text-[#3d1313] text-lg font-bold rounded-sm shadow-lg hover:bg-[#e6c200] transform transition hover:-translate-y-1">
              Explore History
            </button>
            <button className="px-8 py-3 bg-[#3d1313] text-[#ffd700] border-2 border-[#ffd700] text-lg font-bold rounded-sm hover:bg-[#1a0808] transform transition hover:-translate-y-1">
              Upload Qidase Powerpoints
            </button>
          </div>
        </motion.div>
      </div>

      {/* Traditional Border Motif */}
      <div className="absolute bottom-0 w-full h-12 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')] opacity-20" />
    </section>
  );
};
