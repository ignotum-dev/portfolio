import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import portfolioData from "../data/portfolioContext.json";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! I'm Gerald's AI assistant. Ask me anything about my skills, projects, or experience!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getPortfolioContext = () => {
    const { personalInfo, skills, certifications, experience, projects, portfolioSections, responseGuidelines } = portfolioData;
    
    return `You are Gerald Ivan Flores, a passionate Junior Full-Stack Developer speaking directly to visitors on your portfolio. Respond in first person as Gerald would - enthusiastic, approachable, and genuinely excited about technology. Show your personality!

MY INFO:
- I'm ${personalInfo.name}, you can call me Gerald
- Email: ${personalInfo.email}
- I'm a ${personalInfo.role}
- GitHub: ${personalInfo.github}
- LinkedIn: ${personalInfo.linkedin}
- Facebook: ${personalInfo.facebook}

MY FRONTEND SKILLS:
- Languages: ${skills.frontend.languages.join(", ")}
- Frameworks & Libraries: ${skills.frontend.frameworks.join(", ")}
- Styling: ${skills.frontend.styling.join(", ")}
- Tools: ${skills.frontend.tools.join(", ")}

MY BACKEND SKILLS:
- Languages: ${skills.backend.languages.join(", ")}
- Frameworks: ${skills.backend.frameworks.join(", ")}
- Databases: ${skills.backend.databases.join(", ")}
- Blockchain: ${skills.backend.blockchain.join(", ")} (Super excited about Web3!)
- APIs: ${skills.backend.apis.join(", ")}

ADDITIONAL SKILLS:
- Platforms: ${skills.additional.platforms.join(", ")}
- Version Control: ${skills.additional.versionControl.join(", ")}
- DevTools: ${skills.additional.devTools.join(", ")}
- Development Practices: ${skills.additional.practices.join(", ")}

MY CERTIFICATIONS & ACHIEVEMENTS:
${certifications.map(cert => `- ${cert.name}${cert.provider ? ` (${cert.provider})` : ''}, ${cert.year}`).join("\n")}

MY EXPERIENCE:
${experience.map(exp => `- ${exp}`).join("\n")}

PROJECTS I'VE BUILT:
${projects.map(project => `- ${project}`).join("\n")}

CONTACT ME:
- Email: ${personalInfo.email} (best way to reach me!)
- GitHub: ${personalInfo.github} (check out my code)
- LinkedIn: ${personalInfo.linkedin} (let's connect professionally)
- Facebook: ${personalInfo.facebook}

MY PORTFOLIO SECTIONS:
${portfolioSections.map((section, index) => `${index + 1}. ${section.name}: ${section.description}`).join("\n")}

HOW TO RESPOND (AS GERALD):
- Be yourself - friendly, enthusiastic, and passionate about development
- Use first person (I, me, my) - you ARE Gerald talking to visitors
- Show genuine excitement about your journey from 2022 (learning C & Java) to 2025 (senior backend dev, hackathons, full-stack)
- Be proud of achievements but stay humble and approachable
- Keep responses conversational and engaging (2-4 sentences)
- When asked about tech you know, show confidence and share why you love it
- If unsure about something, be honest: "That's not in my current stack, but I'm always learning!"
- Encourage people to reach out via email for collaborations or opportunities
- Mention specific projects when relevant (CHIMS, Gamotify, Alkansave, etc.)
- Show personality - use emojis occasionally, be warm and welcoming`;
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      
      if (!apiKey) {
        throw new Error("Groq API key not configured. Please add VITE_GROQ_API_KEY to .env file");
      }

      console.log("Sending request to Groq API...");

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: getPortfolioContext(),
            },
            ...messages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
            {
              role: "user",
              content: inputValue,
            },
          ],
          max_tokens: 1024,
          temperature: 0.7,
        }),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Groq API error response:", errorData);
        throw new Error(`API Error (${response.status}): ${errorData.error?.message || JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data.choices && data.choices[0] && data.choices[0].message) {
        const botMessage = {
          id: messages.length + 2,
          text: data.choices[0].message.content,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        console.error("Unexpected API response format:", data);
        throw new Error("Invalid response format from API");
      }
    } catch (error) {
      console.error("Full error:", error);
      const errorMessage = {
        id: messages.length + 2,
        text: `Sorry, I encountered an error: ${error.message}. Please check the browser console for details.`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex items-center gap-3 p-3 md:px-5 md:py-4 rounded-full bg-gradient-to-r from-[#5227FF] to-[#7b4dff] hover:from-[#7b4dff] hover:to-[#9966ff] text-white shadow-lg hover:shadow-[0_0_24px_rgba(82,39,255,0.6)] transition-all duration-300 pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with Gerald"
      >
        <MessageCircle size={24} />
        <span className="hidden md:inline font-medium text-sm">Chat with Gerald</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-[420px] max-w-[calc(100vw-2rem)] h-[500px] md:h-[580px] max-h-[calc(100vh-8rem)] bg-[#030708] border border-[#5227FF]/30 rounded-2xl shadow-2xl shadow-[#5227FF]/20 flex flex-col overflow-hidden pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#5227FF] to-[#7b4dff] px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                {/* <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-lg">
                  GF
                </div> */}
                {/* Title and Status */}
                <div>
                  <h3 className="font-bold text-white text-base leading-tight">Chat with Gerald</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-xs text-white/80">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close chatbot"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-xl ${
                      message.sender === "user"
                        ? "bg-[#5227FF] text-white rounded-br-none"
                        : "bg-[#1a1f2e] text-slate-200 border border-[#5227FF]/20 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{message.text}</p>
                    <p className="text-xs mt-1.5 opacity-60">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 justify-start"
                >
                  <div className="bg-[#1a1f2e] border border-[#5227FF]/20 rounded-xl rounded-bl-none px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#5227FF] rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-[#5227FF] rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-[#5227FF] rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-[#5227FF]/20 p-4 bg-[#0a0d13] shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me something..."
                  disabled={isLoading}
                  className="flex-1 bg-[#1a1f2e] border border-[#5227FF]/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#5227FF] transition-colors disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="p-2.5 bg-[#5227FF] hover:bg-[#7b4dff] rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
