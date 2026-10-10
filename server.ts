import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { WEBSITE_KNOWLEDGE_SUMMARY } from './src/data/chatbotKnowledge';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Server-side initialization of Gemini SDK
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Server-side Chat API with Gemini
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages, modelChoice = 'gemini-3.5-flash' } = req.body;

      if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Messages array is required.' });
      }

      // Model selection per guidelines
      let selectedModel = 'gemini-3.5-flash';
      if (modelChoice === 'gemini-3.1-flash-lite') {
        selectedModel = 'gemini-3.1-flash-lite';
      } else if (modelChoice === 'gemini-3.1-pro-preview') {
        selectedModel = 'gemini-3.1-pro-preview';
      } else {
        selectedModel = 'gemini-3.5-flash';
      }

      // If no API key is attached in environment, provide high-quality grounded answer from knowledge base
      if (!process.env.GEMINI_API_KEY) {
        console.warn('GEMINI_API_KEY not found in environment. Using grounded fallback assistant.');
        const lastUserMsg = messages[messages.length - 1]?.text || '';
        const fallbackAnswer = generateKnowledgeFallback(lastUserMsg);
        return res.json({
          text: fallbackAnswer,
          model: 'grounded-dataset-knowledge',
        });
      }

      // Convert conversation history into Gemini contents format
      const contents = messages.map((m: { role: string; text: string }) => ({
        role: m.role === 'model' || m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.text }],
      }));

      const response = await ai.models.generateContent({
        model: selectedModel,
        contents,
        config: {
          systemInstruction: WEBSITE_KNOWLEDGE_SUMMARY,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "I'm here to help with any university admission, course, or fee questions. Please ask away!";

      return res.json({
        text: replyText,
        model: selectedModel,
      });
    } catch (err: any) {
      console.error('Error generating Gemini chat response:', err);
      // Fallback gracefully so student experience is never interrupted
      const lastUserMsg = req.body?.messages?.[req.body.messages.length - 1]?.text || '';
      const fallbackAnswer = generateKnowledgeFallback(lastUserMsg);
      return res.json({
        text: fallbackAnswer,
        model: 'grounded-dataset-fallback',
        notice: 'Served via verified institutional dataset.',
      });
    }
  });

  // Intelligent fallback matcher based on website dataset
  function generateKnowledgeFallback(query: string): string {
    const q = query.toLowerCase();

    if (q.includes('upsc') || q.includes('govt') || q.includes('government') || q.includes('valid')) {
      return `**Yes, absolutely.** All online degree programs featured on Online Siksha are entitled under UGC-DEB (Distance Education Bureau) regulations.\n\n- **100% Equivalent**: Under UGC regulations, online degrees hold equal status to conventional on-campus degrees.\n- **Govt & UPSC Validity**: Valid for all central and state government jobs, civil services (UPSC, State PSC), SSC, and public sector banking exams.\n- **International Recognition**: Evaluated by WES (USA & Canada) for Express Entry PR points and global master's programs.`;
    }

    if (q.includes('mba') && (q.includes('fee') || q.includes('cost') || q.includes('lpu') || q.includes('amity'))) {
      return `**Online MBA Comparison & Fee Structures:**\n\n1. **LPU Online**: ₹50,000/sem (Total: ₹2,00,000 for 2 years). 12 specializations (Business Analytics, Finance, Marketing, HR). Highest CTC recorded: ₹54.75 LPA.\n2. **Amity University Online**: ₹45,000 – ₹62,500/sem (Total: ₹1,80,000 – ₹2,50,000). QS Ranked #1 in India with 14 specializations and Harvard Business case studies.\n3. **Chandigarh University (CU)**: ₹37,500/sem (Total: ₹1,50,000). Includes Harvard ManageMentor certifications.\n4. **Manipal University Jaipur**: ₹43,750/sem (Total: ₹1,75,000). Free access to 10,000+ Coursera courses.\n\nAll programs offer **0% interest zero-cost monthly EMI financing** starting around ₹4,500–₹6,000/month.`;
    }

    if (q.includes('mca') || q.includes('computer')) {
      return `**Online MCA Degree Highlights:**\n\n- **Duration**: 2 Years (4 Semesters)\n- **Eligibility**: BCA, B.Sc Computer Science/IT, or Bachelor's degree with Mathematics at Class 12 or graduation level.\n- **Specializations**: Cloud Computing, Artificial Intelligence & Machine Learning, Cyber Security, Full-Stack Development.\n- **Fees**: Around ₹33,750 – ₹37,500/sem across top universities (CU Online: ₹1.35L, LPU: ₹1.48L, Manipal: ₹1.50L, Amity: ₹1.40L).\n- **Examinations**: 100% home online proctored.`;
    }

    if (q.includes('emi') || q.includes('installment') || q.includes('loan')) {
      return `**Zero-Cost Monthly EMI Financing:**\n\n- **Interest Rate**: 0% Interest through authorized banking and NBFC partners.\n- **Tenure Options**: 6, 9, and 12 monthly installments.\n- **Processing Fees**: 0% processing charge with zero collateral.\n- **Monthly Starting Rates**: As low as ₹3,750/month for undergraduate degrees and ₹4,500/month for MBA/MCA programs.`;
    }

    if (q.includes('placement') || q.includes('package') || q.includes('salary')) {
      return `**Placement Records Across Partner Universities:**\n\n- **LPU Online**: Highest package: ₹54.75 LPA | Average: ₹4.5 LPA | 90% Placement assistance.\n- **Amity Online**: Highest package: ₹20 LPA | Average: ₹6.2 LPA | 500+ Hiring partners (KPMG, Amazon, TCS, Deloitte).\n- **CU Online**: Highest package: ₹28 LPA | Average: ₹4.8 LPA | 300+ Recruiters.\n- **Manipal Online**: Highest package: ₹24 LPA | Average: ₹7.5 LPA | 92% Placement rate.\n\nAll online universities organize virtual job fairs, 1-on-1 resume building, and corporate interview prep for enrolled students.`;
    }

    return `Welcome to **Online Siksha Advisor**! I am here to help you navigate India's top UGC-entitled online universities including **LPU, Amity, Chandigarh University, Manipal, Jain, and UPES**.\n\nYou can ask me about:\n- Program fees & semester installment breakdowns\n- Zero-cost monthly EMI options (0% interest)\n- UGC & AICTE accreditation and UPSC/Govt job validity\n- Course eligibility criteria for MBA, MCA, BCA, BBA, B.Com\n- Placement statistics, average CTCs, and top recruiters\n- Step-by-step digital admission process\n\nWhat program or university would you like to explore today?`;
  }

  // Vite development middleware or static production serve
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Online Siksha server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
