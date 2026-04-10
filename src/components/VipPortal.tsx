
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, User, Lock, Upload, FileText, Music, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { CHURCH_DATA } from '../data/churchData';

interface VipPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VipPortal = ({ isOpen, onClose }: VipPortalProps) => {
  const [mode, setMode] = useState<'login' | 'join'>('join');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password. Please use "admin" and "1234" for demo.');
    }
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    // Simulate upload and then becoming VIP
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setTimeout(() => {
        setIsLoggedIn(true);
        setUsername(fullName || 'New VIP Member');
      }, 1500);
    }, 2500);
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-2xl bg-[#f4e4bc] border-4 border-[#ffd700] p-8 rounded-sm shadow-2xl my-8"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#3d1313] hover:text-red-600 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        {!isLoggedIn ? (
          <div className="space-y-6">
            <div className="text-center relative">
              <div className="absolute -top-4 -right-4 bg-red-600 text-white text-[10px] font-black px-2 py-1 rotate-12 shadow-md animate-pulse flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> BETA VERSION
              </div>
              <h2 className="text-4xl font-header font-bold text-[#3d1313] uppercase tracking-tighter">VIP Contributor Portal</h2>
              <p className="text-gray-600 italic mt-2">We are currently looking for <strong>Qidase Powerpoints</strong> and liturgical audios. Share what you have to help our community grow.</p>
            </div>

            <div className="flex border-b-2 border-[#3d1313]/10">
              <button 
                onClick={() => setMode('join')}
                className={`flex-1 py-3 font-bold uppercase tracking-wider transition-all ${mode === 'join' ? 'bg-[#3d1313] text-[#ffd700]' : 'bg-transparent text-[#3d1313] hover:bg-[#3d1313]/5'}`}
              >
                Upload & Join VIP
              </button>
              <button 
                onClick={() => setMode('login')}
                className={`flex-1 py-3 font-bold uppercase tracking-wider transition-all ${mode === 'login' ? 'bg-[#3d1313] text-[#ffd700]' : 'bg-transparent text-[#3d1313] hover:bg-[#3d1313]/5'}`}
              >
                Existing VIP Sign In
              </button>
            </div>

            {mode === 'join' ? (
              <form onSubmit={handleJoin} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#3d1313] mb-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white/50 border-2 border-[#3d1313]/20 p-2 focus:border-[#3d1313] outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#3d1313] mb-1">Email (Optional)</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/50 border-2 border-[#3d1313]/20 p-2 focus:border-[#3d1313] outline-none"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="p-4 bg-[#3d1313]/5 border-2 border-dashed border-[#3d1313]/20 text-center">
                  <h3 className="font-bold text-[#3d1313] mb-2 flex items-center justify-center gap-2">
                    <Upload className="w-5 h-5" /> Upload Your First Resource
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">Upload a Qidase PowerPoint, Audio file, or PDF source to qualify for VIP status.</p>
                  
                  <div className="space-y-3">
                    <input type="text" placeholder="Resource Title (e.g. Kidase Maria)" className="w-full p-2 text-sm bg-white border border-[#3d1313]/10" required />
                    <select className="w-full p-2 text-sm bg-white border border-[#3d1313]/10" required>
                      <option value="">-- Select EOTC/ErOTC Section --</option>
                      {CHURCH_DATA.categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#3d1313] file:text-[#ffd700] hover:file:bg-black" required />
                  </div>
                </div>

                {isUploading && (
                  <div className="w-full bg-white/30 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.5 }}
                      className="h-full bg-red-600"
                    />
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isUploading}
                  className={`w-full py-4 font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 ${
                    isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#3d1313] text-[#ffd700] hover:bg-black'
                  }`}
                >
                  {isUploading ? (
                    <>Uploading to EOTC Archive...</>
                  ) : (
                    <>Upload & Join VIP Circle</>
                  )}
                </button>
                {uploadSuccess && (
                  <div className="text-green-600 font-bold text-center flex items-center justify-center gap-2 animate-bounce">
                    <CheckCircle className="w-5 h-5" /> Success! You are now a VIP Contributor.
                  </div>
                )}
              </form>
            ) : (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-[#3d1313] mb-2">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3d1313]/50 w-5 h-5" />
                    <input 
                      type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full bg-white/50 border-2 border-[#3d1313]/20 p-3 pl-10 focus:border-[#3d1313] outline-none transition-all"
                      placeholder="Enter your VIP username"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-[#3d1313] mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3d1313]/50 w-5 h-5" />
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white/50 border-2 border-[#3d1313]/20 p-3 pl-10 focus:border-[#3d1313] outline-none transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 font-bold bg-red-100 p-3 border-l-4 border-red-600">
                    <AlertCircle className="w-5 h-5" />
                    {error}
                  </div>
                )}

                <button 
                  type="submit"
                  className="w-full bg-[#3d1313] text-[#ffd700] py-4 font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl"
                >
                  Sign In to Dashboard
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-between items-end border-b-2 border-[#3d1313]/10 pb-4">
              <div>
                <h2 className="text-4xl font-header font-bold text-[#3d1313] uppercase tracking-tighter">Contributor Dashboard</h2>
                <p className="text-gray-600 italic">Welcome back, {username}!</p>
              </div>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="text-sm font-bold underline hover:text-[#ffd700]"
              >
                Sign Out
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/40 p-6 border-2 border-[#3d1313]/10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Upload className="w-5 h-5" /> Upload Material
                </h3>
                <form onSubmit={handleUpload} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase mb-1">Title</label>
                    <input type="text" className="w-full p-2 border-2 border-[#3d1313]/10 outline-none focus:border-[#3d1313]" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase mb-1">Type</label>
                    <select className="w-full p-2 border-2 border-[#3d1313]/10 outline-none focus:border-[#3d1313]">
                      <option>Powerpoint (.pptx)</option>
                      <option>Audio (.mp3)</option>
                      <option>Document (.pdf)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase mb-1">EOTC Section</label>
                    <select className="w-full p-2 border-2 border-[#3d1313]/10 outline-none focus:border-[#3d1313]" required>
                      {CHURCH_DATA.categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase mb-1">File</label>
                    <input type="file" className="text-xs" />
                  </div>
                  <button 
                    disabled={isUploading}
                    className={`w-full py-3 font-bold uppercase tracking-widest transition-all ${
                      isUploading ? 'bg-gray-400' : 'bg-[#3d1313] text-[#ffd700] hover:bg-black'
                    }`}
                  >
                    {isUploading ? 'Uploading...' : 'Submit to Database'}
                  </button>
                  {uploadSuccess && (
                    <div className="text-green-600 font-bold flex items-center gap-2 justify-center">
                      <CheckCircle className="w-4 h-4" /> Material uploaded successfully!
                    </div>
                  )}
                </form>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold border-b border-[#3d1313]/10 pb-2 mb-4">Your Recent Contributions</h3>
                  <div className="space-y-3">
                    {[
                      { title: 'Kidase Araray Part 1', type: 'audio' },
                      { title: 'Anaphora of Apostles', type: 'ppt' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/40 p-3 border border-[#3d1313]/5">
                        <div className="flex items-center gap-3">
                          {item.type === 'audio' ? <Music className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                          <span className="text-sm font-medium">{item.title}</span>
                        </div>
                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded">Approved</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-600/10 border-2 border-red-600/20 p-4">
                  <h4 className="text-sm font-black uppercase text-red-700 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> Critical Sections Needed (BETA)
                  </h4>
                  <p className="text-xs text-red-800 mb-3 italic">We are low on resources for these specific EOTC categories:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Sunday School', 'Hagiography', 'Ge’ez Manuscripts', 'Commentaries'].map(need => (
                      <span key={need} className="text-[10px] bg-red-600 text-white px-2 py-0.5 font-bold">{need}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
