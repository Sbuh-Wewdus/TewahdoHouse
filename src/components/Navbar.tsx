
import React from 'react';
import { Cross, Menu, X, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  onVipClick: () => void;
}

export const Navbar = ({ onVipClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-40 bg-[#3d1313]/90 backdrop-blur-sm text-[#f4e4bc] shadow-xl border-b border-[#ffd700]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Cross className="w-8 h-8 text-[#ffd700]" />
            <span className="font-header text-xl md:text-2xl tracking-tighter uppercase font-bold">TewahdoHouse</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollTo('history')} className="hover:text-[#ffd700] transition-colors font-bold uppercase text-xs tracking-widest cursor-pointer">History</button>
              <button onClick={() => scrollTo('media')} className="hover:text-[#ffd700] transition-colors font-bold uppercase text-xs tracking-widest cursor-pointer">Media</button>
              <button onClick={() => scrollTo('media')} className="bg-[#ffd700] text-[#3d1313] px-4 py-2 rounded-sm font-black hover:bg-[#e6c200] transition-colors uppercase text-xs tracking-widest shadow-lg cursor-pointer">Resources</button>
              <button 
                onClick={onVipClick}
                className="flex items-center gap-2 text-[#ffd700] border border-[#ffd700]/30 px-3 py-2 hover:bg-[#ffd700] hover:text-[#3d1313] transition-all font-black uppercase text-xs tracking-widest cursor-pointer"
              >
                <ShieldAlert className="w-4 h-4" /> VIP Portal
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-8 h-8 text-[#ffd700]" /> : <Menu className="w-8 h-8 text-[#ffd700]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#3d1313] border-b border-[#ffd700]/20 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <button onClick={() => scrollTo('history')} className="block w-full px-3 py-4 hover:bg-[#ffd700]/10 font-bold uppercase tracking-widest">History</button>
            <button onClick={() => scrollTo('media')} className="block w-full px-3 py-4 hover:bg-[#ffd700]/10 font-bold uppercase tracking-widest">Media & Resources</button>
            <button onClick={onVipClick} className="block w-full px-3 py-4 text-[#ffd700] font-black uppercase tracking-widest border-t border-[#ffd700]/10 flex items-center justify-center gap-2">
              <ShieldAlert className="w-5 h-5" /> VIP Portal
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
