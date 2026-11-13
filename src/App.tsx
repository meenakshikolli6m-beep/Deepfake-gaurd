/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  BookOpen, 
  HelpCircle, 
  Info, 
  Home, 
  ArrowLeft, 
  ExternalLink, 
  Copy, 
  User, 
  Lock, 
  Zap, 
  ShieldCheck,
  Search,
  MessageSquare,
  Smartphone,
  Cpu,
  Eye,
  Trophy,
  LayoutGrid,
  Key,
  Bell
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 
  | 'home' 
  | 'about-deepfake' 
  | 'cyber-threats' 
  | 'safety-check' 
  | 'safety-toolkit' 
  | 'scam-examples' 
  | 'report' 
  | 'learning-centre' 
  | 'quiz' 
  | 'about-project';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  color: string;
}

// --- Shared Components ---
const Card: React.FC<CardProps> = ({ title, description, icon, onClick, color }) => (
  <motion.button
    whileHover={{ scale: 1.02, translateY: -5 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group relative flex flex-col items-start p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all text-left w-full h-full cursor-pointer overflow-hidden"
  >
    <div className={`p-3 rounded-xl ${color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform`}>
      {React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<any>, { className: `w-8 h-8 ${color.replace('bg-', 'text-')}` })}
    </div>
    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <Zap className="w-4 h-4 text-cyan-400" />
    </div>
  </motion.button>
);

const SectionHeader: React.FC<{ title: string; icon: React.ReactNode; onBack: () => void; onHome: () => void }> = ({ title, icon, onBack, onHome }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
    <div className="flex items-center gap-4">
      <button 
        onClick={onBack}
        className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all"
        title="Go Back"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="p-2 rounded-lg bg-cyan-500/10">
        {React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<any>, { className: "w-6 h-6 text-cyan-400" })}
      </div>
      <h2 className="text-2xl font-bold text-slate-100 tracking-tight">{title}</h2>
    </div>
    <div className="flex items-center gap-2">
      <button 
        onClick={onHome}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all text-sm font-medium"
      >
        <Home className="w-4 h-4" />
        Home
      </button>
    </div>
  </div>
);

// --- Sub-Pages ---

const AboutDeepfake = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-cyan-400">What is a Deepfake?</h3>
        <p className="text-slate-300">
          Deepfakes are synthetic media in which a person in an existing image or video is replaced with someone else's likeness using artificial neural networks.
        </p>
        <p className="text-slate-300">
          While the technology can be used for entertainment, it is often exploited for scams, misinformation, and identity theft.
        </p>
      </div>
      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
        <h4 className="text-lg font-medium text-slate-100 mb-4 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-purple-400" />
          How it Works
        </h4>
        <ul className="space-y-3 text-sm text-slate-400">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono">01.</span>
            <span>Data Collection: Gathering thousands of images/videos of the target.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono">02.</span>
            <span>AI Training: Using Generative Adversarial Networks (GANs) to "learn" facial features.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono">03.</span>
            <span>Replacement: Superimposing the target's face onto another person's video.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono">04.</span>
            <span>Refinement: Smoothing edges and syncing audio to look realistic.</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-900/30">
      <h3 className="text-lg font-semibold text-cyan-400 mb-4">Why should you care?</h3>
      <p className="text-slate-300">
        As AI becomes more advanced, deepfakes are becoming nearly impossible to distinguish from reality. This allows attackers to impersonate loved ones, CEOs, or government officials to steal money or spread panic.
      </p>
    </div>
  </div>
);

const CyberThreats = () => (
  <div className="space-y-6">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        { title: 'Phishing', desc: 'Fraudulent emails or messages to steal data.', icon: <Search /> },
        { title: 'Identity Theft', desc: 'Impersonating others using stolen info.', icon: <User /> },
        { title: 'Ransomware', desc: 'Locking files until a ransom is paid.', icon: <Lock /> },
        { title: 'Vishing', desc: 'Voice phishing using AI voice cloning.', icon: <Smartphone /> },
        { title: 'Social Engineering', desc: 'Manipulating people into giving secrets.', icon: <MessageSquare /> },
        { title: 'Fake News', desc: 'Spreading lies using realistic videos.', icon: <AlertTriangle /> },
      ].map((threat, i) => (
        <div key={i} className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all">
          <div className="p-2 w-fit rounded-lg bg-purple-500/10 mb-3 text-purple-400">
            {React.isValidElement(threat.icon) && React.cloneElement(threat.icon as React.ReactElement<any>, { className: "w-5 h-5" })}
          </div>
          <h4 className="font-bold text-slate-100 mb-1">{threat.title}</h4>
          <p className="text-sm text-slate-400">{threat.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const SafetyCheck = () => {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [result, setResult] = useState<string | null>(null);

  const questions = [
    "Does the person blink naturally?",
    "Is there a strange blur around the edges of the face?",
    "Does the skin texture look too smooth or 'plastic'?",
    "Does the audio sync perfectly with the lip movements?",
    "Is the lighting consistent across the entire face?",
    "Are there any weird glitches when they turn their head?"
  ];

  const handleCheck = () => {
    const score = Object.values(answers).filter(v => v).length;
    if (score >= 4) {
      setResult("High Risk: This video shows multiple signs of being a deepfake. Exercise extreme caution.");
    } else if (score >= 2) {
      setResult("Moderate Risk: Some inconsistencies detected. Verify the source independently.");
    } else {
      setResult("Low Risk: The video appears consistent, but always stay vigilant.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group">
            <img 
              src="/src/assets/images/safety_check_scanner_1794496552162.jpg" 
              alt="Deepfake Analysis Scanner" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-sm text-slate-400 italic">
            "Use our visual verification guide to manually scan for synthetic artifacts that automated tools might miss."
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
            <Search className="w-5 h-5 text-cyan-400" />
            Detection Checklist
          </h3>
          {questions.map((q, i) => (
            <label key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-900"
                onChange={(e) => setAnswers(prev => ({ ...prev, [i]: e.target.checked }))}
              />
              <span className="text-slate-300 group-hover:text-slate-100 transition-colors">{q}</span>
            </label>
          ))}
          <button 
            onClick={handleCheck}
            className="w-full mt-6 py-3 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all shadow-lg shadow-cyan-900/20"
          >
            Analyze Results
          </button>
        </div>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl border ${result.includes('High') ? 'bg-red-950/20 border-red-900/50 text-red-400' : result.includes('Moderate') ? 'bg-amber-950/20 border-amber-900/50 text-amber-400' : 'bg-green-950/20 border-green-900/50 text-green-400'}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6" />
              <h4 className="font-bold text-lg">Analysis Summary</h4>
            </div>
            <p className="font-medium">{result}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SafetyToolkit = () => {
  const [tools, setTools] = useState([
    { id: 1, name: 'Two-Factor Authentication (2FA)', done: false, desc: 'Add an extra layer of security to your accounts.', icon: <Smartphone /> },
    { id: 2, name: 'Check Privacy Settings', done: false, desc: 'Limit who can see your photos and videos online.', icon: <Lock /> },
    { id: 3, name: 'Use Secure Passwords', done: false, desc: 'Unique passwords for every service, use a manager.', icon: <Key /> },
    { id: 4, name: 'Verify Information', done: false, desc: 'Always double-check suspicious news from multiple sources.', icon: <Search /> },
    { id: 5, name: 'Enable Fraud Alerts', done: false, desc: 'Get notified of unusual activity on your bank accounts.', icon: <Bell /> },
  ]);

  const progress = Math.round((tools.filter(t => t.done).length / tools.length) * 100);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        <div className="space-y-6">
          <div className="aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            <img 
              src="/src/assets/images/safety_toolkit_3d_1794496551871.jpg" 
              alt="Digital Safety Toolkit" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-100">Toolkit Progress</h3>
            <p className="text-slate-400 text-sm">Complete all steps to achieve maximum digital immunity.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400 text-sm font-medium">Your Safety Score</span>
              <span className="text-cyan-400 font-bold">{progress}% Secured</span>
            </div>
            <div className="relative h-3 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="space-y-3">
            {tools.map(tool => (
              <div 
                key={tool.id} 
                className={`p-4 rounded-xl border transition-all ${tool.done ? 'bg-cyan-950/10 border-cyan-500/30' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}
              >
                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="mt-1">
                    <input 
                      type="checkbox" 
                      checked={tool.done}
                      onChange={() => setTools(prev => prev.map(t => t.id === tool.id ? { ...t, done: !t.done } : t))}
                      className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <div className={`p-2 rounded-lg ${tool.done ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                    {React.isValidElement(tool.icon) && React.cloneElement(tool.icon as React.ReactElement<any>, { className: "w-5 h-5" })}
                  </div>
                  <div className="flex-grow">
                    <h4 className={`font-bold transition-colors ${tool.done ? 'text-cyan-400' : 'text-slate-100'}`}>{tool.name}</h4>
                    <p className="text-sm text-slate-400">{tool.desc}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ScamExamples = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {[
      { 
        title: "The CEO Fraud", 
        desc: "An employee receives a voice call from their 'CEO' (cloned voice) demanding an urgent $250k transfer for a secret acquisition.", 
        impact: "$243,000 stolen", 
        prevention: "Always verify urgent requests via a second, known communication channel." 
      },
      { 
        title: "The 'Grandkid' in Trouble", 
        desc: "An elderly person gets a call from their 'grandson' using a voice deepfake, claiming to be in jail and needing bail money immediately.", 
        impact: "Thousands lost by families", 
        prevention: "Set up a family 'secret word' for emergencies." 
      },
      { 
        title: "Political Misinformation", 
        desc: "Fake videos of world leaders making controversial statements are released to influence elections or cause stock market crashes.", 
        impact: "Social unrest & financial loss", 
        prevention: "Check official news outlets before sharing viral clips." 
      },
      { 
        title: "Romance Scams", 
        desc: "Scammers use deepfake video calls to convince victims they are talking to their long-distance partner, eventually asking for money.", 
        impact: "Emotional & financial ruin", 
        prevention: "Never send money to someone you haven't met in person." 
      }
    ].map((ex, i) => (
      <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col h-full">
        <h4 className="text-xl font-bold text-slate-100 mb-3">{ex.title}</h4>
        <p className="text-slate-400 mb-4 flex-grow">{ex.desc}</p>
        <div className="space-y-2 mt-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
            <AlertTriangle className="w-3 h-3" /> Impact: {ex.impact}
          </div>
          <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20 text-green-400 text-sm">
            <CheckCircle2 className="w-4 h-4 inline mr-2 mb-1" />
            <strong>Prevention:</strong> {ex.prevention}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ReportSection = () => {
  const [copied, setCopied] = useState(false);

  const copyNumber = () => {
    navigator.clipboard.writeText('1930');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[320px] aspect-square group">
            <div className="absolute inset-0 bg-red-500/20 blur-3xl group-hover:bg-red-500/30 transition-colors" />
            <img 
              src="/src/assets/images/cyber_report_seal_1794496552464.jpg" 
              alt="National Cyber Crime Reporting Agency Seal" 
              className="relative w-full h-full object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-br from-red-900/20 to-slate-900 border border-red-900/30 text-center md:text-left">
          <Shield className="w-12 h-12 text-red-500 mb-6 mx-auto md:mx-0" />
          <h3 className="text-2xl font-bold text-slate-100 mb-4">Emergency Cybercrime Hotline</h3>
          <p className="text-slate-400 mb-8">If you have been a victim of cybercrime, call the national helpline immediately for technical assistance and reporting.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-red-900/50 min-w-[200px]">
              <span className="text-4xl font-black text-red-500 tracking-widest">1930</span>
              <button 
                onClick={copyNumber}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400"
                title="Copy Number"
              >
                {copied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <a 
          href="https://www.cybercrime.gov.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col items-center text-center"
        >
          <div className="p-4 rounded-2xl bg-cyan-500/10 mb-6 group-hover:scale-110 transition-transform">
            <ExternalLink className="w-8 h-8 text-cyan-400" />
          </div>
          <h4 className="text-xl font-bold text-slate-100 mb-2">Cybercrime.gov.in</h4>
          <p className="text-sm text-slate-400">File an official report with the Indian Cybercrime Portal. This is the primary portal for cyber financial frauds and women/children related crimes.</p>
        </a>
        <div className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col items-center text-center">
          <div className="p-4 rounded-2xl bg-purple-500/10 mb-6 group-hover:scale-110 transition-transform">
            <MessageSquare className="w-8 h-8 text-purple-400" />
          </div>
          <h4 className="text-xl font-bold text-slate-100 mb-2">Local Police</h4>
          <p className="text-sm text-slate-400">Visit your nearest cyber cell or police station for serious identity theft, deepfake harassment, or physical safety threats.</p>
        </div>
      </div>
    </div>
  );
};

const LearningCentre = () => (
  <div className="space-y-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Video Verification", type: "Guide", time: "5 min", level: "Beginner" },
        { title: "Voice Clone Awareness", type: "Case Study", time: "8 min", level: "Intermediate" },
        { title: "Advanced GAN Tech", type: "Tech Spec", time: "12 min", level: "Advanced" },
        { title: "Digital Footprint", type: "Workshop", time: "15 min", level: "Beginner" },
        { title: "Social Media Safety", type: "Guide", time: "6 min", level: "Beginner" },
        { title: "AI Ethics", type: "Essay", time: "10 min", level: "Advanced" },
      ].map((item, i) => (
        <div key={i} className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded-full">{item.type}</span>
            <span className="text-xs text-slate-500">{item.time}</span>
          </div>
          <h4 className="text-lg font-bold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors">{item.title}</h4>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <div className="w-2 h-2 rounded-full bg-slate-700" />
            <span>Difficulty: {item.level}</span>
          </div>
        </div>
      ))}
    </div>
    
    <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
      <h3 className="text-xl font-bold text-slate-100 mb-6">Expert Tips</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-bold">
            <CheckCircle2 className="w-4 h-4" /> Tip #1
          </div>
          <p className="text-slate-400 text-sm">Pay attention to the background. Deepfakes often struggle to keep background elements stable around moving people.</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-bold">
            <CheckCircle2 className="w-4 h-4" /> Tip #2
          </div>
          <p className="text-slate-400 text-sm">Look at the teeth. Deepfakes often render teeth as a single white block instead of individual teeth.</p>
        </div>
      </div>
    </div>
  </div>
);

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      q: "What is the primary technology behind deepfakes?",
      options: ["Blockchain", "Generative Adversarial Networks (GANs)", "Quantum Computing", "5G Networks"],
      correct: 1
    },
    {
      q: "Which of these is a common sign of a deepfake video?",
      options: ["Perfect lighting", "Inconsistent blinking", "High definition 4K", "Background music"],
      correct: 1
    },
    {
      q: "What should you do if a 'loved one' calls and urgently asks for money via a new number?",
      options: ["Send it immediately", "Ask for their ID", "Call their original known number to verify", "Post about it on social media"],
      correct: 2
    },
    {
      q: "The term 'Vishing' refers to what?",
      options: ["Visual Phishing", "Voice Phishing", "Virtual Fishing", "Verified Phishing"],
      correct: 1
    }
  ];

  const handleAnswer = (idx: number) => {
    if (idx === questions[currentStep].correct) {
      setScore(s => s + 1);
    }
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(c => c + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-12 h-12 text-cyan-400" />
        </div>
        <h3 className="text-3xl font-bold text-slate-100">Quiz Complete!</h3>
        <p className="text-slate-400">You scored <span className="text-cyan-400 font-bold text-2xl">{score}</span> out of {questions.length}</p>
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-sm text-slate-400">
            {score === questions.length ? "Master! You are well-equipped to spot deepfakes." : "Good effort! Keep learning to stay ahead of cyber threats."}
          </p>
        </div>
        <button 
          onClick={() => { setCurrentStep(0); setScore(0); setFinished(false); }}
          className="w-full py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold transition-all"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex justify-between items-center text-sm font-medium text-slate-500">
        <span>Question {currentStep + 1} of {questions.length}</span>
        <span>Score: {score}</span>
      </div>
      
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
        <h3 className="text-xl font-bold text-slate-100 mb-8">{questions[currentStep].q}</h3>
        <div className="grid gap-3">
          {questions[currentStep].options.map((opt, i) => (
            <button 
              key={i}
              onClick={() => handleAnswer(i)}
              className="w-full text-left p-4 rounded-xl border border-slate-700 bg-slate-950 hover:bg-slate-800 hover:border-cyan-500/50 transition-all text-slate-300 hover:text-cyan-400 font-medium"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutProject = () => (
  <div className="max-w-3xl mx-auto space-y-12">
    <div className="text-center space-y-4">
      <h3 className="text-3xl font-bold text-slate-100">Our Mission</h3>
      <p className="text-lg text-slate-400 leading-relaxed">
        Deepfake Guard was built to democratize cybersecurity awareness. In a world where reality can be manufactured, knowledge is the ultimate shield.
      </p>
    </div>
    
    <div className="grid sm:grid-cols-2 gap-8">
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <h4 className="text-lg font-bold text-cyan-400 mb-4">The Vision</h4>
        <p className="text-sm text-slate-400">
          We believe that every individual should have the tools to verify the information they consume and protect their digital identity from sophisticated AI attacks.
        </p>
      </div>
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <h4 className="text-lg font-bold text-purple-400 mb-4">The Impact</h4>
        <p className="text-sm text-slate-400">
          By educating thousands of users, we aim to reduce the success rate of deepfake-based scams and build a more resilient digital society.
        </p>
      </div>
    </div>

    <div className="flex flex-col items-center gap-4 py-8 border-t border-slate-800">
      <div className="flex items-center gap-4">
        <ShieldCheck className="w-12 h-12 text-cyan-500" />
        <div>
          <h4 className="text-xl font-bold text-slate-100">Stay Secure</h4>
          <p className="text-slate-500">Version 1.0.0 · © 2024 Deepfake Guard</p>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Application ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [history, setHistory] = useState<Page[]>([]);

  const navigateTo = (page: Page) => {
    setHistory(prev => [...prev, currentPage]);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    if (history.length > 0) {
      const last = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      setCurrentPage(last);
    } else {
      setCurrentPage('home');
    }
  };

  const resetToHome = () => {
    setHistory([]);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const navItems = [
    { id: 'about-deepfake', title: 'About Deepfake', desc: 'Learn the basics of AI synthesis.', icon: <Info />, color: 'bg-blue-500' },
    { id: 'cyber-threats', title: 'Cyber Threats', desc: 'Understand modern digital dangers.', icon: <AlertTriangle />, color: 'bg-amber-500' },
    { id: 'safety-check', title: 'Safety Check', desc: 'Scan media for deepfake signs.', icon: <Eye />, color: 'bg-green-500' },
    { id: 'safety-toolkit', title: 'Safety Toolkit', desc: 'Interactive security checklist.', icon: <ShieldCheck />, color: 'bg-cyan-500' },
    { id: 'scam-examples', title: 'Scam Examples', desc: 'Real-world case studies.', icon: <BookOpen />, color: 'bg-purple-500' },
    { id: 'report', title: 'Report Crime', desc: 'Contact official authorities.', icon: <Shield />, color: 'bg-red-500' },
    { id: 'learning-centre', title: 'Learning Centre', desc: 'Deep dive into security topics.', icon: <Search />, color: 'bg-indigo-500' },
    { id: 'quiz', title: 'Security Quiz', desc: 'Test your digital knowledge.', icon: <Trophy />, color: 'bg-yellow-500' },
    { id: 'about-project', title: 'About Project', desc: 'Our mission and vision.', icon: <User />, color: 'bg-slate-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          <button 
            onClick={resetToHome}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="p-2 rounded-lg bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <Shield className="w-6 h-6 text-slate-950" />
            </div>
            <h1 className="text-xl font-black tracking-tighter uppercase">
              Deepfake <span className="text-cyan-400">Guard</span>
            </h1>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            <button 
              onClick={resetToHome}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === 'home' ? 'bg-slate-900 text-cyan-400' : 'text-slate-400 hover:text-slate-100'}`}
            >
              Home
            </button>
            <div className="w-px h-4 bg-slate-800 mx-2" />
            <button 
              onClick={() => navigateTo('about-project')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === 'about-project' ? 'bg-slate-900 text-cyan-400' : 'text-slate-400 hover:text-slate-100'}`}
            >
              About
            </button>
          </nav>

          <button 
            onClick={() => navigateTo('report')}
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-red-900/20"
          >
            <Shield className="w-3 h-3" />
            Report Crime
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div className="max-w-3xl space-y-4">
                <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
                  Your Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Immunity</span> Starts Here.
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl">
                  Deepfake Guard is your all-in-one platform to detect, understand, and protect yourself against AI-powered threats and cybercrimes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {navItems.map((item) => (
                  <Card 
                    key={item.id}
                    title={item.title}
                    description={item.desc}
                    icon={item.icon}
                    color={item.color}
                    onClick={() => navigateTo(item.id as Page)}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentPage === 'about-deepfake' && (
                <>
                  <SectionHeader title="About Deepfake" icon={<Info />} onBack={goBack} onHome={resetToHome} />
                  <AboutDeepfake />
                </>
              )}
              {currentPage === 'cyber-threats' && (
                <>
                  <SectionHeader title="Cyber Threats" icon={<AlertTriangle />} onBack={goBack} onHome={resetToHome} />
                  <CyberThreats />
                </>
              )}
              {currentPage === 'safety-check' && (
                <>
                  <SectionHeader title="Safety Check" icon={<Eye />} onBack={goBack} onHome={resetToHome} />
                  <SafetyCheck />
                </>
              )}
              {currentPage === 'safety-toolkit' && (
                <>
                  <SectionHeader title="Safety Toolkit" icon={<ShieldCheck />} onBack={goBack} onHome={resetToHome} />
                  <SafetyToolkit />
                </>
              )}
              {currentPage === 'scam-examples' && (
                <>
                  <SectionHeader title="Scam Examples" icon={<BookOpen />} onBack={goBack} onHome={resetToHome} />
                  <ScamExamples />
                </>
              )}
              {currentPage === 'report' && (
                <>
                  <SectionHeader title="Report Cyber Crime" icon={<Shield />} onBack={goBack} onHome={resetToHome} />
                  <ReportSection />
                </>
              )}
              {currentPage === 'learning-centre' && (
                <>
                  <SectionHeader title="Learning Centre" icon={<Search />} onBack={goBack} onHome={resetToHome} />
                  <LearningCentre />
                </>
              )}
              {currentPage === 'quiz' && (
                <>
                  <SectionHeader title="Security Quiz" icon={<Trophy />} onBack={goBack} onHome={resetToHome} />
                  <QuizSection />
                </>
              )}
              {currentPage === 'about-project' && (
                <>
                  <SectionHeader title="About Project" icon={<User />} onBack={goBack} onHome={resetToHome} />
                  <AboutProject />
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900 px-6 py-12 mt-24 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="font-bold tracking-tight uppercase">Deepfake Guard</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Securing the digital world through education and advanced safety tools.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <button onClick={resetToHome} className="hover:text-cyan-400 transition-colors">Home</button>
            <button onClick={() => navigateTo('about-project')} className="hover:text-cyan-400 transition-colors">About</button>
            <button onClick={() => navigateTo('report')} className="hover:text-cyan-400 transition-colors">Contact</button>
          </div>

          <p className="text-slate-600 text-[10px] font-mono tracking-widest uppercase">
            © 2024 DEEPFAKE GUARD // ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}
