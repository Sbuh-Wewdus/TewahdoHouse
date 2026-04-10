
import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ 
  title, 
  subtitle, 
  children, 
  id,
  className = "", 
  variant = "light" 
}: { 
  title: string; 
  subtitle?: string; 
  children: React.ReactNode; 
  id?: string;
  className?: string;
  variant?: "light" | "dark" | "parchment";
}) => {
  const themes = {
    light: "bg-white text-gray-800",
    dark: "bg-[#1a0808] text-[#f4e4bc]",
    parchment: "bg-[#f4e4bc] text-[#3d1313]"
  };

  return (
    <section id={id} className={`py-16 md:py-24 px-4 ${themes[variant]} ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-header text-inherit mb-4 border-b-2 border-[#ffd700] pb-4 inline-block tracking-tighter uppercase font-bold">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-600 font-serif italic max-w-2xl mx-auto mt-4 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};
