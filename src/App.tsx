
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Heart, Scroll, Music, Calendar, Clock, Download, ExternalLink, ShieldCheck, FileText, Star, ChevronRight, Globe, Upload } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
import { VipPortal } from './components/VipPortal';
import { CHURCH_DATA } from './data/churchData';

function App() {
  const [isVipOpen, setIsVipOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredMediaItems = selectedCategory === 'All' 
    ? CHURCH_DATA.mediaItems 
    : CHURCH_DATA.mediaItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen font-serif bg-[#f4e4bc] text-[#3d1313] selection:bg-[#ffd700] selection:text-[#3d1313]">
      <Navbar onVipClick={() => setIsVipOpen(true)} />
      <VipPortal isOpen={isVipOpen} onClose={() => setIsVipOpen(false)} />
      
      <Hero />

      {/* Intro for both churches */}
      <Section 
        title="Unified in Faith, Rich in Tradition" 
        variant="light"
        subtitle="Exploring the rich heritage of the Ethiopian and Eritrean Orthodox Tewahedo Churches."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f4e4bc] p-8 border-l-8 border-red-600 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold uppercase tracking-tighter">Ethiopian Orthodox</h3>
            </div>
            <p className="text-lg leading-relaxed mb-4">The largest of the Oriental Orthodox Christian churches, with a presence dating back to the 4th century. Known for its rock-hewn churches and deep spiritual history.</p>
            <div className="flex gap-2">
              <span className="w-4 h-4 bg-green-600 rounded-full"></span>
              <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
              <span className="w-4 h-4 bg-red-600 rounded-full"></span>
            </div>
          </div>

          <div className="bg-[#f4e4bc] p-8 border-l-8 border-blue-600 shadow-xl flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold uppercase tracking-tighter">Eritrean Orthodox</h3>
            </div>
            <p className="text-lg leading-relaxed mb-4">Granted autocephaly in 1998, the Eritrean Orthodox Tewahedo Church maintains the same liturgy, rites, and traditions as its Ethiopian counterpart, tracing its roots to the Aksumite Empire.</p>
            <div className="mt-auto flex items-center justify-between gap-4">
              <div className="flex gap-2">
                <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
                <span className="w-4 h-4 bg-red-600 rounded-full"></span>
                <span className="w-4 h-4 bg-green-600 rounded-full"></span>
              </div>
              <img src="/images/eritrean-monastery.jpg" alt="Eritrean Monastery" className="w-20 h-20 md:w-28 md:h-28 object-cover border-4 border-white shadow-md rounded-sm rotate-3" />
            </div>
          </div>
        </div>
      </Section>

      {/* History Section */}
      <Section 
        id="history"
        title={CHURCH_DATA.history.title} 
        variant="parchment"
        className="parchment-texture"
        subtitle="One of the world's oldest continuous Christian communities."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed text-[#3d1313]">
              {CHURCH_DATA.history.content}
            </p>
            <div className="space-y-6">
              {CHURCH_DATA.history.milestones.map((milestone, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start group"
                >
                  <div className="text-3xl font-extrabold text-[#ffd700] bg-[#3d1313] px-3 py-1 rounded-sm border-2 border-[#ffd700] whitespace-nowrap group-hover:bg-[#ffd700] group-hover:text-[#3d1313] transition-all">
                    {milestone.year}
                  </div>
                  <p className="text-lg md:text-xl font-bold leading-tight pt-2">
                    {milestone.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <img 
              src="/images/orthodox-icon.jpg" 
              alt="Ethiopian Orthodox Iconography" 
              className="rounded-sm shadow-2xl border-8 border-white group-hover:border-[#ffd700] transition-colors"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#3d1313] text-[#ffd700] p-6 shadow-xl border-t-4 border-l-4 border-[#ffd700]">
              <Scroll className="w-10 h-10 mb-2" />
              <p className="text-sm font-bold uppercase tracking-widest">Iconography & Manuscripts</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pillars Section */}
      <Section title="The Five Pillars of Mystery" variant="dark" className="bg-[#3d1313] text-[#f4e4bc]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          {[
            { name: "Mistera Sillassie", meaning: "Mystery of the Trinity", icon: ShieldCheck },
            { name: "Mistera Segawi", meaning: "Mystery of Incarnation", icon: Heart },
            { name: "Mistera Timket", meaning: "Mystery of Baptism", icon: Clock },
            { name: "Mistera Kurban", meaning: "Mystery of Holy Communion", icon: Calendar },
            { name: "Mistera Tinsa'e", meaning: "Mystery of Resurrection", icon: Music },
          ].map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-[#ffd700]/20 hover:border-[#ffd700] transition-all rounded-sm bg-[#1a0808]/50 flex flex-col items-center"
            >
              <pillar.icon className="w-12 h-12 text-[#ffd700] mb-6" />
              <h4 className="text-xl font-extrabold text-[#ffd700] mb-2">{pillar.name}</h4>
              <p className="text-sm italic opacity-80">{pillar.meaning}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Liturgy & Music */}
      <Section title="Divine Liturgy & Zema" variant="parchment">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white/50 p-8 shadow-xl border-t-4 border-[#3d1313] rounded-sm flex flex-col items-center text-center">
            <Music className="w-12 h-12 text-[#3d1313] mb-6" />
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Saint Yared</h3>
            <p className="text-lg mb-6 opacity-90">The 6th-century saint who composed the sacred chants (Degua) used in the church to this day, featuring three distinct melodies: Ge'ez, Ezel, and Araray.</p>
            <button className="mt-auto px-6 py-2 border-2 border-[#3d1313] font-bold hover:bg-[#3d1313] hover:text-white transition-all">Listen to Zema</button>
          </div>
          
          <div className="bg-white/50 p-8 shadow-xl border-t-4 border-[#3d1313] rounded-sm flex flex-col items-center text-center">
            <Book className="w-12 h-12 text-[#3d1313] mb-6" />
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Holy Qidase</h3>
            <p className="text-lg mb-6 opacity-90">{CHURCH_DATA.liturgy.description}</p>
            <ul className="text-left space-y-2 mb-6 w-full italic font-bold">
              {CHURCH_DATA.liturgy.aspects.map((a, i) => <li key={i}>• {a}</li>)}
            </ul>
            <button className="mt-auto px-6 py-2 border-2 border-[#3d1313] font-bold hover:bg-[#3d1313] hover:text-white transition-all">Read the Anaphoras</button>
          </div>

          <div className="bg-white/50 p-8 shadow-xl border-t-4 border-[#3d1313] rounded-sm flex flex-col items-center text-center">
            <Calendar className="w-12 h-12 text-[#3d1313] mb-6" />
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">The Ge'ez Calendar</h3>
            <p className="text-lg mb-6 opacity-90">Based on the ancient Alexandrian calendar, it consists of 13 months: 12 months of 30 days and a 13th month of 5 or 6 days.</p>
            <button 
              onClick={() => alert("The Ge'ez calendar is currently in the 2016-2017 year. Our community calendar feature is coming soon in the next beta release.")}
              className="mt-auto px-6 py-2 border-2 border-[#3d1313] font-bold hover:bg-[#3d1313] hover:text-white transition-all"
            >
              Explore Calendar
            </button>
          </div>
        </div>
      </Section>

      {/* Media & Resources Section */}
      <Section title="Liturgical Archive (BETA)" variant="dark" id="media">
        <div className="mb-12 bg-[#ffd700] text-[#3d1313] p-8 border-4 border-[#3d1313] relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-black uppercase mb-4 leading-none">We Need Your Qidase Powerpoints!</h3>
              <p className="text-lg font-serif italic">The user who requested this site mentioned having Qidase powerpoints and audios. If that's you, please use the button below to upload them and become a VIP contributor.</p>
            </div>
            <button 
              onClick={() => setIsVipOpen(true)}
              className="px-10 py-5 bg-[#3d1313] text-[#ffd700] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl group-hover:scale-105"
            >
              Upload Now
            </button>
          </div>
          <Upload className="absolute -bottom-10 -right-10 w-48 h-48 text-[#3d1313]/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Recent Contributions Display */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-header font-bold text-[#ffd700] border-b-2 border-[#ffd700]/20 pb-4 flex items-center gap-3 uppercase">
              <Star className="w-8 h-8" /> Community Library (BETA)
            </h3>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 py-4">
              <button 
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-1 text-xs font-bold uppercase transition-all border-2 ${selectedCategory === 'All' ? 'bg-[#ffd700] text-[#3d1313] border-[#ffd700]' : 'text-[#ffd700] border-[#ffd700]/20 hover:border-[#ffd700]'}`}
              >
                All
              </button>
              {CHURCH_DATA.categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1 text-xs font-bold uppercase transition-all border-2 ${selectedCategory === cat ? 'bg-[#ffd700] text-[#3d1313] border-[#ffd700]' : 'text-[#ffd700] border-[#ffd700]/20 hover:border-[#ffd700]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredMediaItems?.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#1a0808]/50 border-2 border-[#ffd700]/10 p-6 hover:border-[#ffd700]/60 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-[#ffd700] text-[#3d1313]">
                      {item.type === 'powerpoint' ? <FileText className="w-6 h-6" /> : <Music className="w-6 h-6" />}
                    </div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#ffd700]/60">{item.date}</span>
                  </div>
                  <div className="mb-2">
                    <span className="bg-[#ffd700]/10 text-[#ffd700] text-[10px] px-2 py-0.5 font-bold border border-[#ffd700]/20 uppercase tracking-widest">
                      {item.category || "General"}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[#ffd700] mb-1 group-hover:text-white transition-colors capitalize">{item.title}</h4>
                  <div className="flex items-center gap-2 mb-4">
                    {item.url ? (
                      <span className="text-[10px] bg-blue-900/40 text-blue-300 px-2 py-0.5 font-bold border border-blue-400/20 uppercase tracking-widest flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Verified Archive
                      </span>
                    ) : (
                      <span className="text-[10px] bg-green-900/40 text-green-400 px-2 py-0.5 font-bold border border-green-400/20 uppercase tracking-widest">Community Beta</span>
                    )}
                    <p className="text-[10px] italic opacity-70 text-white uppercase tracking-widest">by {item.contributor}</p>
                  </div>
                  {item.url ? (
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#ffd700] hover:translate-x-1 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" /> View Resource <ChevronRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button 
                      onClick={() => alert("As we are in the beta version, these community uploads are currently being compiled. Please upload your own or sign in to contribute.")}
                      className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white/40 cursor-not-allowed"
                    >
                      <Download className="w-4 h-4" /> Pending Verification <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#ffd700]/5 -mr-8 -mt-8 rotate-45 group-hover:bg-[#ffd700]/10 transition-all"></div>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#ffd700] text-[#3d1313] p-8 border-4 border-[#3d1313] relative">
              <div className="absolute top-0 right-0 bg-[#3d1313] text-[#ffd700] px-3 py-1 text-[10px] font-black uppercase tracking-widest">BETA: Contributor Drive</div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="p-4 bg-[#3d1313] text-[#ffd700] rounded-full">
                   <Upload className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Help Us Populate Our Library</h4>
                  <p className="text-lg font-serif italic mb-4">We are currently in Beta and actively seeking contributions for the following sections: <strong>Qidase, Mezmur, Dogma, History, and Sunday School.</strong></p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {CHURCH_DATA.categories.slice(0, 5).map(cat => (
                      <span key={cat} className="text-[10px] bg-[#3d1313] text-[#ffd700] px-2 py-1 font-bold uppercase">{cat}</span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => setIsVipOpen(true)}
                  className="px-8 py-4 bg-[#3d1313] text-[#ffd700] font-black uppercase tracking-widest hover:bg-black transition-all flex-shrink-0 shadow-lg flex items-center gap-2"
                >
                  Upload & Get VIP Access <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links / Official Sources */}
          <div className="space-y-8">
            <h3 className="text-3xl font-header font-bold text-[#ffd700] border-b-2 border-[#ffd700]/20 pb-4 uppercase">
              Official Sources
            </h3>
            <div className="space-y-4">
              {CHURCH_DATA.externalSources.slice(0, 4).map((source, idx) => (
                <a 
                  key={idx}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 border border-[#ffd700]/10 hover:bg-[#ffd700]/5 hover:border-[#ffd700] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-[#ffd700] text-lg uppercase tracking-tight">{source.name}</h4>
                    <ExternalLink className="w-4 h-4 text-[#ffd700]/40 group-hover:text-[#ffd700]" />
                  </div>
                  <p className="text-sm opacity-70 text-gray-300 leading-snug">{source.description}</p>
                </a>
              ))}
            </div>
            
            <div className="p-6 border-4 border-[#ffd700]/20 bg-[#3d1313] relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="text-xl font-black uppercase mb-3">Spiritual Library</h4>
                 <p className="text-sm italic mb-6">Help us grow our catalog of liturgical resources. We are building a central archive for both Ethiopian and Eritrean traditions.</p>
                 <button 
                  onClick={() => setIsVipOpen(true)}
                  className="w-full py-3 border-2 border-[#ffd700] text-[#ffd700] font-bold uppercase hover:bg-[#ffd700] hover:text-[#3d1313] transition-all"
                >
                    Contribute a Resource
                 </button>
               </div>
               <Scroll className="absolute -bottom-4 -right-4 w-32 h-32 text-[#ffd700]/5 rotate-12" />
            </div>
          </div>
        </div>
      </Section>

      <Section title="The Ark & The Nine Saints" variant="light" className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 relative">
            <img 
              src="/images/aksum.jpg" 
              alt="Axum Stelae" 
              className="rounded-sm shadow-2xl border-4 border-[#3d1313]/10"
            />
            <div className="absolute top-4 left-4 bg-[#ffd700] text-[#3d1313] px-4 py-2 font-black text-sm uppercase tracking-widest shadow-lg">
              Our Holy Heritage
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-header font-bold text-[#3d1313] tracking-tighter uppercase border-b-2 border-[#3d1313]/10 pb-2">The Tabot</h2>
            <p className="text-lg leading-relaxed text-gray-700 italic">
              A unique tradition of the Tewahedo Church is the presence of the Tabot in every parish. The Tabot is a replica of the Ark of the Covenant, representing the presence of God among His people.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              The original Ark is believed to be kept in the Chapel of the Tablet at the Church of Our Lady Mary of Zion in Axum, Ethiopia, guarded by a single monk who never leaves the compound.
            </p>
            <div className="p-6 bg-[#f4e4bc] border-l-8 border-[#3d1313] rounded-sm italic font-bold text-[#3d1313]">
              "But the LORD is in his holy temple; let all the earth keep silence before him." — Habakkuk 2:20
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="md:col-span-2 space-y-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-header font-bold text-[#3d1313] tracking-tighter uppercase border-b-2 border-[#3d1313]/10 pb-2">The Nine Saints (Tese'atu Kidusan)</h2>
                  <p className="text-lg leading-relaxed mt-4">The Nine Saints were a group of missionaries who were instrumental in the initial growth of Christianity in what is now Ethiopia and Eritrea during the late 5th century. They came from various parts of the Byzantine Empire (Syria, Constantinople, Rome) and translated the Bible and other religious works into Ge'ez.</p>
                </div>
                <div className="w-full lg:w-64 h-48 lg:h-auto">
                  <img src="/images/manuscript.jpg" alt="Ancient Ge'ez Manuscript" className="w-full h-full object-cover border-4 border-[#3d1313]/10 shadow-lg" />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                 {['Abba Aftse', 'Abba Alef', 'Abba Aragawi', 'Abba Garima', 'Abba Guba', 'Abba Liqanos', 'Abba Pantelewon', 'Abba Sehma', 'Abba Yem’ata'].map((saint) => (
                   <div key={saint} className="bg-white p-3 border border-[#3d1313]/5 text-sm font-bold shadow-sm flex items-center gap-2">
                     <span className="w-2 h-2 bg-[#ffd700] rounded-full"></span> {saint}
                   </div>
                 ))}
              </div>
           </div>
           <div className="bg-[#3d1313] text-[#ffd700] p-8 flex flex-col justify-center items-center text-center">
              <Book className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold uppercase mb-2">Translation of the Word</h3>
              <p className="text-sm italic opacity-80">Their work in translating the Septuagint into Ge'ez remains one of the greatest linguistic and theological achievements of the ancient church.</p>
           </div>
        </div>
      </Section>

      <Section title="Sources & Study" variant="parchment" className="parchment-texture">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CHURCH_DATA.externalSources.map((source, idx) => (
            <motion.a 
              key={idx}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border-b-4 border-[#3d1313] hover:border-[#ffd700] hover:bg-white/50 transition-all flex flex-col items-center text-center group"
            >
              <ExternalLink className="w-8 h-8 text-[#3d1313] mb-4 group-hover:text-[#ffd700] transition-colors" />
              <h4 className="text-xl font-extrabold uppercase mb-2 tracking-tighter">{source.name}</h4>
              <p className="text-sm opacity-80">{source.description}</p>
            </motion.a>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
