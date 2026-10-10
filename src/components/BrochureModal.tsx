import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { X, Download, FileText, CheckCircle, ShieldCheck } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: Course | null;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  selectedCourse
}) => {
  const [courseId, setCourseId] = useState<string>(selectedCourse ? selectedCourse.id : 'all');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  if (!isOpen) return null;

  const currentCourse = COURSES_DATA.find(c => c.id === courseId) || selectedCourse;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloaded(true);
    const officialBrochureUrl = 'https://images.degreefyd.com//lpu-online-brochure.pdf';
    const link = document.createElement('a');
    link.href = officialBrochureUrl;
    link.target = '_blank';
    link.download = currentCourse ? currentCourse.brochurePdfName : 'LPU_Online_Complete_Brochure_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setIsDownloaded(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-[#e7eeff] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#e7eeff] flex items-center justify-between bg-[#f0f3ff]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#115eaf] text-white flex items-center justify-center shadow-xs">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#000f22] font-sans">
                {currentCourse ? `Download ${currentCourse.code} Syllabus PDF` : 'Download Complete Fee Brochure'}
              </h3>
              <p className="text-xs text-[#43474d]">
                Official curriculum handbook with semester credit breakdown
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#74777e] hover:text-[#000f22] rounded-lg hover:bg-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!isDownloaded ? (
            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#000f22] uppercase tracking-wider mb-1.5">
                  Select Program Curriculum
                </label>
                <select
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c4c6ce] text-sm font-semibold text-[#000f22] focus:outline-none focus:border-[#115eaf] cursor-pointer"
                >
                  <option value="all">Complete University Prospectus & All 9 Syllabi</option>
                  {COURSES_DATA.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#000f22] uppercase tracking-wider mb-1.5">
                  Email Address (To receive PDF copy) *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c4c6ce] text-sm text-[#000f22] focus:outline-none focus:border-[#115eaf]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#000f22] uppercase tracking-wider mb-1.5">
                  Mobile Number (For SMS Download Link) *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit Mobile Number"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c4c6ce] text-sm text-[#000f22] focus:outline-none focus:border-[#115eaf]"
                />
              </div>

              <div className="p-3 rounded-xl bg-[#f0f3ff] border border-[#e7eeff] flex items-center gap-2 text-xs text-[#43474d]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Free Instant Download. No credit card required.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#115eaf] text-white font-bold text-sm shadow hover:bg-[#004689] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download Brochure Now</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#000f22] font-sans">
                  Download Started!
                </h4>
                <p className="text-xs text-[#43474d] mt-1">
                  Your PDF copy has also been dispatched to <strong>{email}</strong>.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#115eaf] text-white font-bold text-xs shadow hover:bg-[#004689] transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
