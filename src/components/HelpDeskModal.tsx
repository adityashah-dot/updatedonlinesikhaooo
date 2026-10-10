import React, { useState } from 'react';
import { X, Phone, Mail, Clock, MapPin, CheckCircle, Headphones } from 'lucide-react';
import { INSTITUTION_HIGHLIGHTS } from '../data/institutionalData';

interface HelpDeskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpDeskModal: React.FC<HelpDeskModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-[#e7eeff] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#e7eeff] flex items-center justify-between bg-[#f0f3ff]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#115eaf] text-white flex items-center justify-center shadow-xs">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#000f22] font-sans">
                Online Siksha Help Desk
              </h3>
              <p className="text-xs text-[#43474d]">
                Authorized UGC-DEB Admissions & Student Guidance Helpline
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

        <div className="p-6 space-y-6">
          {/* Quick Direct Contacts */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <a 
              href="tel:18008894422" 
              className="p-3.5 rounded-xl border border-[#e7eeff] bg-[#f9f9ff] hover:border-[#115eaf] transition-all flex flex-col items-center text-center group"
            >
              <Phone className="w-5 h-5 text-[#115eaf] mb-1 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#000f22]">Toll-Free Hotline</span>
              <span className="text-[11px] text-[#115eaf] font-semibold mt-0.5">1800-889-4422</span>
            </a>
            <a 
              href="mailto:helpdesk@onlinesiksha.com" 
              className="p-3.5 rounded-xl border border-[#e7eeff] bg-[#f9f9ff] hover:border-[#115eaf] transition-all flex flex-col items-center text-center group"
            >
              <Mail className="w-5 h-5 text-[#115eaf] mb-1 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#000f22]">Direct Email</span>
              <span className="text-[11px] text-[#115eaf] font-semibold mt-0.5 truncate max-w-[120px]">
                helpdesk@onlinesiksha.com
              </span>
            </a>
          </div>

          {/* Request Callback Form */}
          <div className="p-4 rounded-xl bg-[#f0f3ff] border border-[#d5e3ff]">
            <h4 className="font-bold text-xs text-[#000f22] uppercase tracking-wider mb-2">
              Request Instant Counselor Callback
            </h4>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full px-3 py-2 rounded-lg border border-[#c4c6ce] bg-white focus:border-[#115eaf] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit Mobile Number"
                    className="w-full px-3 py-2 rounded-lg border border-[#c4c6ce] bg-white focus:border-[#115eaf] outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#115eaf] text-white font-bold hover:bg-[#004689] transition-all shadow-xs cursor-pointer"
                >
                  Schedule Callback (Within 15 Mins)
                </button>
              </form>
            ) : (
              <div className="py-3 text-center space-y-1">
                <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
                <span className="font-bold text-xs text-[#000f22] block">Advisor Assigned!</span>
                <p className="text-[11px] text-[#43474d]">We will call +91 {phone} shortly.</p>
              </div>
            )}
          </div>

          {/* Operational Hours & Center Address */}
          <div className="space-y-2 text-xs text-[#43474d]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#115eaf] shrink-0" />
              <span>Monday to Saturday: 9:00 AM - 7:00 PM IST</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#115eaf] shrink-0 mt-0.5" />
              <span>{INSTITUTION_HIGHLIGHTS.address}</span>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[#e7eeff] bg-[#f9f9ff] text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl border border-[#c4c6ce] text-xs font-bold text-[#000f22] hover:bg-white cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
