import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = Number(process.env.PORT || 3101);

app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, message: 'Online Siksha API is running.' });
});

app.post('/api/chat', async (req, res) => {
  const { messages, modelChoice } = req.body || {};

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({
      text: 'The Gemini API key is not configured. Please add a valid GEMINI_API_KEY in the environment.',
    });
  }

  const conversation = Array.isArray(messages) ? messages : [];
  if (!conversation.length) {
    return res.status(400).json({ text: 'No chat messages were provided.' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const selectedModel = modelChoice === 'gemini-3.1-flash-lite'
      ? 'gemini-2.0-flash-lite'
      : 'gemini-2.5-flash';

    const prompt = conversation
      .filter((message) => message && typeof message.text === 'string')
      .map((message) => `${message.role === 'assistant' ? 'Assistant' : 'User'}: ${message.text}`)
      .join('\n');

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents: prompt,
    });

    const text = typeof response?.text === 'string' && response.text.trim()
      ? response.text
      : 'I’m here to help compare universities, fees, and eligibility for online degree programs.';

    return res.json({ text });
  } catch (error) {
    console.error('Gemini API request failed:', error);
    return res.status(500).json({
      text: 'I am unable to reach the AI advisor right now. Please try again in a moment.',
    });
  }
});

const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Online Siksha API server running at http://localhost:${port}`);
});
