import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Check, 
  Copy, 
  Send, 
  Terminal, 
  ArrowUpRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/socials';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-16">
      {/* HEADER */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 light:text-teal-700">
          <span>04 // OPEN A CHANNEL</span>
          <span className="w-12 h-[1px] bg-cyan-500/30 light:bg-teal-500/30"></span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7FA] light:text-[#111318]">
          Let's Build Something Interesting.
        </h1>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed light:text-gray-600 font-sans">
          Whether it's a software project, interface design, technical discussion, or an interesting idea, feel free to reach out.
        </p>
      </div>

      {/* TWO COLUMN GRID: FORM & METADATA/TERMINAL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: CONTACT FORM */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#242830] bg-[#101216] p-8 space-y-6 shadow-xl light:bg-white light:border-[#E2E5E9]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#242830] font-mono text-xs light:border-gray-200">
              <span className="text-gray-400">TRANSMIT PACKET // INQUIRY FORM</span>
              <span className="text-cyan-400 light:text-teal-700">READY</span>
            </div>

            {/* Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-mono text-gray-400 light:text-gray-600">
                Name <span className="text-cyan-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#15181D] border border-[#242830] text-[#F5F7FA] placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors light:bg-gray-50 light:border-gray-200 light:text-black light:placeholder:text-gray-400"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-mono text-gray-400 light:text-gray-600">
                Email <span className="text-cyan-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="e.g. alex@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#15181D] border border-[#242830] text-[#F5F7FA] placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors light:bg-gray-50 light:border-gray-200 light:text-black light:placeholder:text-gray-400"
              />
            </div>

            {/* Subject Input */}
            <div className="space-y-1.5">
              <label htmlFor="subject" className="block text-xs font-mono text-gray-400 light:text-gray-600">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="e.g. Collaboration on App Architecture"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#15181D] border border-[#242830] text-[#F5F7FA] placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors light:bg-gray-50 light:border-gray-200 light:text-black light:placeholder:text-gray-400"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-mono text-gray-400 light:text-gray-600">
                Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Write your technical query, project proposal, or feedback here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#15181D] border border-[#242830] text-[#F5F7FA] placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none light:bg-gray-50 light:border-gray-200 light:text-black light:placeholder:text-gray-400"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                  status === 'sending'
                    ? 'bg-cyan-500/50 text-black cursor-wait'
                    : status === 'sent'
                    ? 'bg-emerald-500 text-black'
                    : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] light:bg-teal-600 light:text-white light:hover:bg-teal-700'
                }`}
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    <span>Sending...</span>
                  </>
                ) : status === 'sent' ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>Message Sent ✓</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: CONTACT METADATA & CONNECTION TERMINAL */}
        <div className="lg:col-span-5 space-y-6">
          {/* Metadata Card */}
          <div className="rounded-2xl border border-[#242830] bg-[#101216] p-6 space-y-5 light:bg-white light:border-[#E2E5E9]">
            <div className="flex items-center justify-between pb-3 border-b border-[#242830] font-mono text-xs light:border-gray-200">
              <span className="text-gray-400 uppercase tracking-wider">DIRECT CHANNELS</span>
              <span className="text-emerald-400 light:text-emerald-700">ONLINE</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#15181D] border border-[#242830] light:bg-gray-50 light:border-gray-200">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyan-400 light:text-teal-700" />
                  <div>
                    <span className="text-gray-500 uppercase block text-[10px]">EMAIL</span>
                    <span className="text-gray-200 font-semibold light:text-gray-900">{PERSONAL_INFO.email}</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded hover:bg-[#242830] text-gray-400 hover:text-white transition-colors light:hover:bg-gray-200"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#15181D] border border-[#242830] hover:border-cyan-500/50 transition-colors light:bg-gray-50 light:border-gray-200"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-cyan-400 light:text-teal-700" />
                  <div>
                    <span className="text-gray-500 uppercase block text-[10px]">GITHUB</span>
                    <span className="text-gray-200 font-semibold light:text-gray-900">{PERSONAL_INFO.githubUsername}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#15181D] border border-[#242830] hover:border-cyan-500/50 transition-colors light:bg-gray-50 light:border-gray-200"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <div>
                    <span className="text-gray-500 uppercase block text-[10px]">LINKEDIN</span>
                    <span className="text-gray-200 font-semibold light:text-gray-900">{PERSONAL_INFO.linkedinUsername}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500" />
              </a>

              {/* Location */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#15181D] border border-[#242830] light:bg-gray-50 light:border-gray-200">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="text-gray-500 uppercase block text-[10px]">LOCATION</span>
                    <span className="text-gray-200 font-semibold light:text-gray-900">{PERSONAL_INFO.location} ({PERSONAL_INFO.timezone})</span>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400">Available</span>
              </div>
            </div>
          </div>

          {/* Mini Terminal Visual: Connection status */}
          <div className="rounded-2xl border border-[#242830] bg-[#0A0C0E] p-5 font-mono text-xs space-y-2 text-cyan-400 shadow-xl light:bg-gray-900">
            <div className="flex items-center gap-2 text-gray-500 pb-2 border-b border-[#242830] text-[10px]">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>CHANNEL_DIAGNOSTIC_DAEMON</span>
            </div>

            <div className="space-y-1 text-gray-300">
              <div>&gt; connection.status = <span className="text-emerald-400">"open"</span>;</div>
              <div>&gt; latency = <span className="text-yellow-400">"3.2ms"</span>;</div>
              <div>&gt; encryption = <span className="text-purple-400">"TLS_1.3_STRICT"</span>;</div>
              <div className="text-cyan-400 pt-1">&gt; waiting_for_message...</div>
            </div>

            <div className="pt-2 text-[10px] text-gray-500 border-t border-[#242830]">
              Active listener awaiting incoming transmission.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
