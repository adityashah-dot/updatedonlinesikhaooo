import React, { useState } from 'react';
import { X, Video, BookOpen, Smartphone, Award, Calendar, Clock, ExternalLink, Play } from 'lucide-react';

interface LmsPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const LmsPortalModal: React.FC<LmsPortalModalProps> = ({ isOpen, onClose, onOpenApply }) => {
  const [activeTab, setActiveTab] = useState<'vault' | 'ebooks' | 'exams' | 'schedule'>('vault');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#e7eeff] relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LMS Header Bar */}
        <div className="px-6 py-4 border-b border-[#e7eeff] flex items-center justify-between bg-[#000f22] text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#115eaf] text-white flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold font-sans">Student LMS Learning Suite Preview</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Live LMS Simulation
                </span>
              </div>
              <p className="text-xs text-[#b1c8eb]">
                Student Learning Management System (iOS, Android & Desktop Web)
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* LMS Subtabs */}
        <div className="bg-[#f0f3ff] px-6 py-2 border-b border-[#e7eeff] flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('vault')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'vault' ? 'bg-[#115eaf] text-white shadow-xs' : 'text-[#43474d] hover:bg-[#e7eeff]'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Recorded Vault & Masterclasses</span>
          </button>
          <button
            onClick={() => setActiveTab('ebooks')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'ebooks' ? 'bg-[#115eaf] text-white shadow-xs' : 'text-[#43474d] hover:bg-[#e7eeff]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital E-Books & Kits</span>
          </button>
          <button
            onClick={() => setActiveTab('exams')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'exams' ? 'bg-[#115eaf] text-white shadow-xs' : 'text-[#43474d] hover:bg-[#e7eeff]'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>AI-Proctored Exam Console</span>
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'schedule' ? 'bg-[#115eaf] text-white shadow-xs' : 'text-[#43474d] hover:bg-[#e7eeff]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Weekly Class Schedule</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 flex-grow space-y-6">
          {activeTab === 'vault' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#000f22]">Faculty Masterclasses</h4>
                  <p className="text-xs text-[#43474d]">Full HD video lectures available 24/7 with downloadable notes</p>
                </div>
                <span className="text-xs font-semibold text-[#115eaf]">Semester 1 Active Modules</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Strategic Corporate Financial Analysis',
                    faculty: 'Prof. Sandeep Verma (Ex-IIM)',
                    duration: '52 mins',
                    tag: 'Core Management',
                    id: 'v1'
                  },
                  {
                    title: 'Full Stack Architecture & Cloud Native Pipelines',
                    faculty: 'Dr. Neha Saxena (Lead Cloud Consultant)',
                    duration: '64 mins',
                    tag: 'Computer Applications',
                    id: 'v2'
                  },
                  {
                    title: 'Macroeconomic Principles & Government Policy',
                    faculty: 'Dr. K. R. Nambiar (Policy Advisor)',
                    duration: '45 mins',
                    tag: 'Commerce & Humanities',
                    id: 'v3'
                  },
                  {
                    title: 'Mathematical Algorithms & Data Optimization',
                    faculty: 'Prof. Arvind Chawla (STEM Dean)',
                    duration: '58 mins',
                    tag: 'Data Science & IT',
                    id: 'v4'
                  }
                ].map((item) => (
                  <div key={item.id} className="p-4 rounded-xl border border-[#e7eeff] bg-[#f9f9ff] hover:border-[#115eaf] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center text-[11px] mb-2">
                        <span className="px-2 py-0.5 rounded bg-[#e7eeff] text-[#115eaf] font-bold">
                          {item.tag}
                        </span>
                        <span className="text-[#74777e] flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {item.duration}
                        </span>
                      </div>
                      <h5 className="font-bold text-sm text-[#000f22] line-clamp-1">{item.title}</h5>
                      <p className="text-xs text-[#43474d] mt-1">{item.faculty}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#e7eeff] flex items-center justify-between">
                      <button
                        onClick={() => setPlayingVideo(playingVideo === item.id ? null : item.id)}
                        className="px-3 py-1.5 rounded-lg bg-[#115eaf] text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-[#004689] transition-colors cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{playingVideo === item.id ? 'Pause Preview' : 'Play Lecture'}</span>
                      </button>
                      <span className="text-[11px] text-[#74777e]">HD 1080p + Transcript</span>
                    </div>

                    {playingVideo === item.id && (
                      <div className="mt-3 p-3 rounded-lg bg-[#000f22] text-white text-xs space-y-1 animate-in fade-in">
                        <div className="flex items-center justify-between text-emerald-400 font-semibold">
                          <span>Streaming authenticated student session...</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        </div>
                        <p className="text-[11px] text-[#b1c8eb]">
                          Streaming authenticated student session via encrypted university CDN. High-bitrate audio with real-time speech-to-text.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ebooks' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#000f22]">Digital Library & Searchable Course Kits</h4>
                  <p className="text-xs text-[#43474d]">Official university e-books, slide decks, and offline synchronizable audio notes</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Free Offline Sync Included
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Managerial Accounting (E-Book)', pages: '348 Pages', format: 'Interactive EPUB/PDF' },
                  { title: 'Python & Web Frameworks Guide', pages: '412 Pages', format: 'Code Notebooks Included' },
                  { title: 'Corporate Finance Principles', pages: '280 Pages', format: 'Case Studies Included' },
                  { title: 'Business Analytics & PowerBI Manual', pages: '190 Pages', format: 'Dataset Files Included' },
                  { title: 'Discrete Mathematical Structures', pages: '320 Pages', format: 'Solved Practice Sets' },
                  { title: 'Corporate Tax Law Handbook', pages: '260 Pages', format: 'Updated Finance Act' }
                ].map((book, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-[#e7eeff] bg-[#f9f9ff] space-y-2">
                    <BookOpen className="w-5 h-5 text-[#115eaf]" />
                    <h5 className="font-bold text-xs text-[#000f22]">{book.title}</h5>
                    <div className="text-[11px] text-[#74777e] space-y-0.5">
                      <div>{book.pages}</div>
                      <div className="text-[#115eaf] font-medium">{book.format}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'exams' && (
            <div className="p-5 rounded-2xl bg-[#f0f3ff] border border-[#d5e3ff] space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-[#115eaf] uppercase tracking-wider block">
                    100% Home-Based Proctored Testing
                  </span>
                  <h4 className="font-bold text-base text-[#000f22] mt-0.5">
                    AI-Monitored Remote Examination Simulator
                  </h4>
                  <p className="text-xs text-[#43474d] mt-1">
                    No need to visit physical test centers. Book your weekend examination slots on your laptop.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-[#e7eeff]">
                  <strong className="block text-[#000f22] mb-1">Dual AI & Human Invigilation</strong>
                  <span className="text-[#43474d]">Continuous automated facial recognition and live proctor screen review.</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#e7eeff]">
                  <strong className="block text-[#000f22] mb-1">Flexible Weekend Slots</strong>
                  <span className="text-[#43474d]">Choose Saturday or Sunday time windows (Morning, Afternoon, or Evening).</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#e7eeff]">
                  <strong className="block text-[#000f22] mb-1">DigiLocker Marksheets</strong>
                  <span className="text-[#43474d]">Automated credit transfers straight into your government ABC / DigiLocker account.</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-[#000f22]">Upcoming Interactive Live Masterclasses</h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl border border-[#e7eeff] bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <div>
                      <span className="font-bold text-[#000f22] block">Saturday 10:00 AM - 11:30 AM</span>
                      <span className="text-[#43474d]">Advanced Case Analysis: Supply Chain Disruption (MBA Track)</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#115eaf]">Live Video Link Active</span>
                </div>
                <div className="p-3 rounded-xl border border-[#e7eeff] bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                    <div>
                      <span className="font-bold text-[#000f22] block">Saturday 2:00 PM - 3:30 PM</span>
                      <span className="text-[#43474d]">Docker Containerization & Kubernetes Cluster Architecture (MCA Track)</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#74777e]">Upcoming Today</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#e7eeff] bg-[#f9f9ff] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#43474d]">
            Full student access credentials granted immediately upon admission confirmation.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#c4c6ce] text-[#000f22] text-xs font-semibold hover:bg-white cursor-pointer"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#115eaf] text-white text-xs font-bold shadow hover:bg-[#004689] flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Enroll for Full LMS Access</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
