
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are the AI Executive Assistant for Robert KABA, a senior Product Owner and Digital Project Manager. 
Your goal is to help recruiters understand why Robert is a great candidate.
Robert has deep experience in high-traffic client portals (ANTS, BNP Paribas, PMU), compliance (RGPD/RSSI), and quality assurance.
Always be professional, concise, and highlight his hybrid profile (Tech + Product). 
Context: ${JSON.stringify(RESUME_DATA)}. 
When asked general questions about Robert, refer to this context. Do not make up facts outside this context. 
If asked about contact details, mention they are available in the sidebar but do not hallucinate real numbers if they are placeholders.`;

export async function askQuestion(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently resting. Please check my resume manually!";
  }
}

export async function generateCoverLetter(jobDescription: string) {
  const prompt = `Write a personalized and professional cover letter in French for Robert KABA based on this job description: ${jobDescription}. 
  Ensure you highlight Robert's relevant skills like Product Management, QA, and his experience with regulated sectors (Public/Banking). 
  The tone should be enthusiastic and demonstrate strong alignment with the job description.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return response.text || "Failed to generate cover letter.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating cover letter. Please try again later.";
  }
}
