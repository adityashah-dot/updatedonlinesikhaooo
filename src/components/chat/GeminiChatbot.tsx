import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  RotateCcw,
  User,
  GraduationCap,
  Minimize2,
  Maximize2,
} from 'lucide-react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const STARTER_PROMPTS = [
  { label: 'Compare MBA Fees', query: 'Compare MBA fees: LPU vs Amity vs Manipal' },
  { label: 'UGC & Govt Validity', query: 'Are online degrees valid for UPSC & Govt jobs?' },
  { label: 'Top Placements', query: 'Which online university has the highest placement package?' },
  { label: '0% EMI Plans', query: 'How do 0% interest EMI payment plans work?' },
  { label: 'MCA Eligibility', query: 'What is the eligibility criteria for Online MCA?' },
];

interface GeminiChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply?: (courseId?: string) => void;
  initialQuery?: string;
}

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({
  isOpen,
  onClose,
  initialQuery,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = sessionStorage.getItem('siksha_chat_history');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // ignore invalid json
      }
    }
    return [
      {
        id: 'welcome-msg',
        role: 'assistant',
        text: `Hi! How can I help you compare universities, fees, or eligibility today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];
  });
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modelChoice, setModelChoice] = useState<'gemini-3.5-flash' | 'gemini-3.1-flash-lite'>('gemini-3.5-flash');
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    sessionStorage.setItem('siksha_chat_history', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  useEffect(() => {
    if (initialQuery && isOpen) {
      sendMessage(initialQuery);
    }
  }, [initialQuery, isOpen]);

  const generateLocalAnswer = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('upsc') || q.includes('govt') || q.includes('government') || q.includes('valid')) {
      return `**Yes, absolutely.** All online degree programs featured on Online Siksha are entitled under UGC-DEB (Distance Education Bureau) regulations.\n\n- **100% Equivalent**: Under UGC regulations, online degrees hold equal status to conventional on-campus degrees.\n- **Govt & UPSC Validity**: Valid for all central and state government jobs, civil services (UPSC, State PSC), SSC, and public sector banking exams.\n- **International Recognition**: Evaluated by WES (USA & Canada) for Express Entry PR points and global master's programs.`;
    }
    if (q.includes('mba') && (q.includes('fee') || q.includes('cost') || q.includes('lpu') || q.includes('amity'))) {
      return `**Online MBA Comparison & Fee Structures:**\n\n1. **LPU Online**: ₹50,000/sem (Total: ₹2,00,000 for 2 years). 12 specializations (Business Analytics, Finance, Marketing, HR). Highest CTC recorded: ₹54.75 LPA.\n2. **Amity University Online**: ₹45,000 - ₹62,500/sem (Total: ₹1,80,000 - ₹2,50,000). QS Ranked #1 in India with 14 specializations and Harvard Business case studies.\n3. **Chandigarh University (CU)**: ₹37,500/sem (Total: ₹1,50,000). Includes Harvard ManageMentor certifications.\n4. **Manipal University Jaipur**: ₹43,750/sem (Total: ₹1,75,000). Free access to 10,000+ Coursera courses.\n\nAll programs offer **0% interest zero-cost monthly EMI financing** starting around ₹4,500 - ₹6,000/month.`;
    }
    if (q.includes('mca') || q.includes('computer')) {
      return `**Online MCA Degree Highlights:**\n\n- **Duration**: 2 Years (4 Semesters)\n- **Eligibility**: BCA, B.Sc Computer Science/IT, or Bachelor's degree with Mathematics at Class 12 or graduation level.\n- **Specializations**: Cloud Computing, Artificial Intelligence & Machine Learning, Cyber Security, Full-Stack Development.\n- **Fees**: Around ₹33,750 - ₹37,500/sem across top universities (CU Online: ₹1.35L, LPU: ₹1.48L, Manipal: ₹1.50L, Amity: ₹1.40L).\n- **Examinations**: 100% home online proctored.`;
    }
    if (q.includes('emi') || q.includes('installment') || q.includes('loan')) {
      return `**Zero-Cost Monthly EMI Financing:**\n\n- **Interest Rate**: 0% Interest through authorized banking and NBFC partners.\n- **Tenure Options**: 6, 9, 12 and 24 monthly installments.\n- **Processing Fees**: 0% processing charge with zero collateral.\n- **Monthly Starting Rates**: As low as ₹3,750/month for undergraduate degrees and ₹4,500/month for MBA/MCA programs.`;
    }
    return `Welcome to **Online Siksha Advisor**! I am here to help you navigate India's top UGC-entitled online universities including **LPU, Amity, Chandigarh University, Manipal, Jain, and UPES**.\n\nYou can ask me about:\n- Program fees & semester installment breakdowns\n- Zero-cost monthly EMI options (0% interest)\n- UGC & AICTE accreditation and UPSC/Govt job validity\n- Course eligibility criteria for MBA, MCA, BCA, BBA, B.Com\n- Placement statistics, average CTCs, and top recruiters\n- Step-by-step digital admission process\n\nWhat program or university would you like to explore today?`;
  };

  const sendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            text: m.text,
          })),
          modelChoice,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMsg: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          text: data.text || generateLocalAnswer(text),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        const localReply = generateLocalAnswer(text);
        const assistantMsg: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          text: localReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      }
    } catch {
      const localReply = generateLocalAnswer(text);
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: localReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    const welcomeMsg: ChatMessage = {
      id: `welcome-${Date.now()}`,
      role: 'assistant',
      text: `How can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([welcomeMsg]);
    sessionStorage.removeItem('siksha_chat_history');
  };

  if (!isOpen) return null;

  const renderFormattedText = (raw: string) => {
    return raw.split('\n').map((line, idx) => {
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const content = line.trim().substring(2);
        return (
          <li key={idx} className="ml-4 list-disc my-1 text-xs sm:text-[13px] text-[#1a222f] leading-relaxed font-sans">
            <span dangerouslySetInnerHTML={{ __html: formatInline(content) }} />
          </li>
        );
      }
      if (/^\d+\.\s/.test(line.trim())) {
        const content = line.trim().replace(/^\d+\.\s/, '');
        return (
          <li key={idx} className="ml-4 list-decimal my-1 text-xs sm:text-[13px] text-[#1a222f] leading-relaxed font-sans">
            <span dangerouslySetInnerHTML={{ __html: formatInline(content) }} />
          </li>
        );
      }
      if (!line.trim()) {
        return <div key={idx} className="h-1.5" />;
      }
      return (
        <p
          key={idx}
          className="my-1 text-xs sm:text-[13px] text-[#1a222f] leading-relaxed font-sans font-normal"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      );
    });
  };

  function formatInline(str: string): string {
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#000f22]">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-[#1a222f]">$1</em>')
      .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-slate-100 rounded text-xs font-mono text-[#004689]">$1</code>');
  }

  return (
    <div
      className={`fixed z-50 transition-all duration-300 flex flex-col font-sans ${
        isExpanded
          ? 'inset-2 sm:inset-6 md:inset-10 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden'
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-32px)] sm:w-[420px] md:w-[440px] h-[560px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden'
      }`}
    >
      <div className="bg-white text-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#0b2540] text-white flex items-center justify-center shrink-0 shadow-xs">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-semibold text-slate-900 truncate">
                Admissions Desk
              </h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200/70 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-normal truncate">
              UGC-DEB Guidance
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() =>
              setModelChoice(modelChoice === 'gemini-3.5-flash' ? 'gemini-3.1-flash-lite' : 'gemini-3.5-flash')
            }
            className="px-2 py-1 text-[11px] font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-md border border-slate-200 transition-colors cursor-pointer"
            title="Toggle Detailed / Quick answers"
          >
            {modelChoice === 'gemini-3.5-flash' ? 'Detailed' : 'Quick'}
          </button>
          <button
            type="button"
            onClick={clearChat}
            title="Reset conversation"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
            aria-label="Reset conversation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? 'Collapse' : 'Expand'}
            className="hidden sm:block p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#fbfcfe] text-[#111c2d]">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-semibold shadow-2xs ${
                  isUser
                    ? 'bg-[#115eaf] text-white'
                    : 'bg-white text-[#0b2540] border border-slate-200'
                }`}
              >
                {isUser ? <User className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5 text-[#0b2540]" />}
              </div>
              <div
                className={`max-w-[85%] rounded-xl ${
                  isUser
                    ? 'bg-[#0b2540] text-white rounded-tr-xs px-3.5 py-2.5 shadow-2xs font-sans text-xs sm:text-[13px] font-normal leading-relaxed'
                    : 'bg-white border border-slate-200/90 text-[#1a222f] rounded-tl-xs p-3.5 shadow-2xs font-sans text-xs sm:text-[13px] leading-relaxed'
                }`}
              >
                {isUser ? (
                  <p className="my-0.5 text-white leading-relaxed font-sans">{msg.text}</p>
                ) : (
                  renderFormattedText(msg.text)
                )}
                <span
                  className={`block text-[10px] mt-1.5 font-normal font-sans ${
                    isUser ? 'text-slate-300 text-right' : 'text-[#74777e]'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}
        {isLoading && (
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-[#0b2540] flex items-center justify-center shrink-0 shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-[#0b2540]" />
            </div>
            <div className="bg-white border border-slate-200 rounded-xl rounded-tl-xs px-3.5 py-2.5 flex items-center gap-2 text-slate-500 shadow-2xs">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse [animation-delay:0.4s]" />
              </span>
              <span className="text-xs text-slate-500 font-normal font-sans">
                Checking records...
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length <= 2 && !isLoading && (
        <div className="px-3.5 py-2 bg-slate-50/80 border-t border-slate-100 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-1.5 flex-nowrap">
            {STARTER_PROMPTS.map((item, pIdx) => (
              <button
                key={pIdx}
                type="button"
                onClick={() => sendMessage(item.query)}
                className="px-2.5 py-1 bg-white hover:bg-blue-50 text-[#115eaf] border border-slate-200 hover:border-blue-300 rounded-full text-[11px] font-medium whitespace-nowrap transition-colors shrink-0 shadow-2xs font-sans cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 shrink-0"
      >
        <input
          ref={inputRef}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask a question..."
          disabled={isLoading}
          className="flex-1 h-9 px-3 text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#115eaf] focus:ring-1 focus:ring-[#115eaf]/20 rounded-lg font-normal text-slate-900 placeholder:text-slate-400 outline-none font-sans transition-all"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="h-9 px-3 bg-[#115eaf] hover:bg-[#084a8c] disabled:opacity-40 text-white rounded-lg transition-all shadow-xs flex items-center justify-center gap-1 font-semibold text-xs font-sans shrink-0 active:scale-95 cursor-pointer"
          aria-label="Send query"
        >
          <span>Send</span>
          <Send className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};
