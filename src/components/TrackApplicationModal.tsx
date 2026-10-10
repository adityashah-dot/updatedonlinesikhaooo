import React, { useState } from 'react';
import { X, Search, CheckCircle, Clock } from 'lucide-react';

interface TrackApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackApplicationModal: React.FC<TrackApplicationModalProps> = ({ isOpen, onClose }) => {
  const [applicationId, setApplicationId] = useState('');
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-[#e7eeff] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-[#e7eeff] flex items-center justify-between bg-[#f0f3ff]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#000f22] font-sans">
                Track Application Status
              </h3>
              <p className="text-xs text-[#43474d]">
                Enter your application ID to check status
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
          {!searched ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#000f22] mb-1.5">Application ID</label>
                <input
                  type="text"
                  value={applicationId}
                  onChange={(e) => setApplicationId(e.target.value)}
                  placeholder="e.g. OS-LPU-2026-4892"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d5e3ff] text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 active:scale-[0.98] transition-all shadow cursor-pointer"
              >
                Track Application
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#f0f3ff] border border-[#d5e3ff] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#000f22]">Application ID</span>
                  <span className="text-xs font-mono text-[#115eaf] font-bold">{applicationId}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-700">Documents Verified - Provisional Offer Issued</span>
                </div>
                <p className="text-xs text-[#43474d] leading-relaxed">
                  Your admission credentials and eligibility are verified. Your assigned counselor will contact you for roll number and LMS credentials activation.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSearched(false)}
                  className="flex-1 py-2.5 bg-[#f0f3ff] text-[#115eaf] border border-[#d5e3ff] rounded-xl text-sm font-semibold hover:bg-[#e0ecff] transition-all cursor-pointer"
                >
                  Track Another
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
