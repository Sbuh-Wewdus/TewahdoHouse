
import { Cross, Globe, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1a0808] text-[#f4e4bc] py-16 px-4 border-t-4 border-[#ffd700]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Cross className="w-10 h-10 text-[#ffd700]" />
            <span className="font-serif text-2xl tracking-tighter uppercase font-bold">TewahdoHouse</span>
          </div>
          <p className="text-sm md:text-base text-[#f4e4bc]/80 leading-relaxed font-serif">
            A digital sanctuary for the Ethiopian and Eritrean Orthodox Tewahedo Church community, dedicated to preserving our 1,600+ years of spiritual and cultural legacy.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-serif text-[#ffd700] mb-6 uppercase font-bold tracking-wider">Resources</h4>
          <ul className="space-y-4 font-serif">
            <li><a href="#history" className="hover:text-[#ffd700] transition-colors">History & Heritage</a></li>
            <li><a href="#media" className="hover:text-[#ffd700] transition-colors">Divine Liturgy (Qidase)</a></li>
            <li><a href="#media" className="hover:text-[#ffd700] transition-colors">Mezmur & Hymns</a></li>
            <li><a href="#media" className="hover:text-[#ffd700] transition-colors">Sunday School</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-serif text-[#ffd700] mb-6 uppercase font-bold tracking-wider">Community Beta</h4>
          <ul className="space-y-4 font-serif">
            <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#ffd700]" /> contact@tewahdohouse.com</li>
            <li className="flex items-center gap-3"><Globe className="w-5 h-5 text-[#ffd700]" /> www.tewahdohouse.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#f4e4bc]/10 text-center text-[#f4e4bc]/60 text-sm font-serif">
        <p>© {new Date().getFullYear()} TewahdoHouse. Dedicated to the Tewahedo Faith.</p>
      </div>
    </footer>
  );
};
