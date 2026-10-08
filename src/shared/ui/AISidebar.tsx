"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

type Message = { id: string; role: "user" | "ai"; content: string };
import { MessageSquare, X, Send, Bot, GripVertical } from "lucide-react";

export const AISidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(350);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "ai", content: "Hi there! 👋 I'm Ajay's AI assistant. Feel free to ask me about his experience, projects, or skills!" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const popupCount = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Check initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tooltip animation & sound logic
  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
      return;
    }

    let initialTimer: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    
    // We wait for the user to interact with the page (click, scroll, mousemove)
    // before starting the popups, otherwise the browser will block the notification sound!
    const startSequence = () => {
      // Remove listeners so it only triggers once
      window.removeEventListener('click', startSequence);
      window.removeEventListener('scroll', startSequence);
      
      const triggerPopup = () => {
        if (popupCount.current >= 3) return;
        popupCount.current++;
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 5000); // Show for 5 seconds
      };

      // Initial pop 1 second after interaction
      initialTimer = setTimeout(triggerPopup, 1000);
      // Then pop every 15 seconds, up to 3 times total
      interval = setInterval(triggerPopup, 15000);
    };

    window.addEventListener('click', startSequence);
    window.addEventListener('scroll', startSequence);

    return () => {
      window.removeEventListener('click', startSequence);
      window.removeEventListener('scroll', startSequence);
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Play sound when tooltip appears
  useEffect(() => {
    if (showTooltip) {
      const audio = new Audio("/dragon-notificatoin.mp3");
      audio.volume = 0.4;
      audio.play().catch(e => console.log("Browser auto-play policy blocked notification sound."));
    }
  }, [showTooltip]);

  // Sync width to CSS variable to push main content
  useEffect(() => {
    if (isOpen && !isMobile) {
      document.documentElement.style.setProperty("--ai-sidebar-width", `${width}px`);
    } else {
      document.documentElement.style.setProperty("--ai-sidebar-width", "0px");
    }
  }, [isOpen, isMobile, width]);

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isMobile) {
      // Swipe down to close
      if (info.offset.y > 100 || info.velocity.y > 500) {
        setIsOpen(false);
      }
    }
  };

  const handleResizeDrag = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Delta X is negative when moving left. So we subtract delta.x to increase width
    setWidth((prev) => Math.min(Math.max(prev - info.delta.x, 300), 800));
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          >
            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 15, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 15, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Apple-style smooth ease-out
                  onClick={() => setIsOpen(true)}
                  className="bg-card text-foreground border border-border/50 shadow-xl rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2.5 cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Talk to AI Assistant
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-foreground text-background shadow-lg shadow-foreground/10 hover:shadow-xl hover:shadow-foreground/20 hover:scale-105 transition-all duration-300 relative group"
              aria-label="Open AI Assistant"
            >
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Bot size={24} className="relative z-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar / Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop (Only on mobile so it doesn't distract from side-by-side mode on desktop) */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
              />
            )}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                width: isMobile ? "100%" : width,
                height: "100dvh",
                position: "fixed",
                bottom: 0,
                right: 0,
                top: 0,
                zIndex: 100,
                backgroundColor: "var(--background)",
              }}
              className="border-l border-border dark:border-[#e5e7eb]/10 flex flex-col overflow-hidden"
            >

              {/* Desktop Resize Handle (Now on the left side of the right drawer) */}
              {!isMobile && (
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0}
                  dragMomentum={false}
                  onDrag={handleResizeDrag}
                  className="absolute left-0 top-0 bottom-0 w-2 cursor-col-resize flex items-center justify-center hover:bg-primary/20 transition-colors z-50 group"
                >
                  <GripVertical size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              )}

              {/* Header */}
              <div
                className={`flex items-center justify-between px-6 transition-all duration-300 ${scrolled || isMobile ? "border-b border-border dark:border-[#e5e7eb]/10" : "border-b border-transparent"}`}
                style={{ 
                  height: isMobile ? "64px" : (scrolled ? "64px" : "96px"), 
                  minHeight: isMobile ? "64px" : (scrolled ? "64px" : "96px")
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Bot size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">AI Assistant</h3>
                    <p className="text-xs text-muted-foreground">Ask me anything about Ajay</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`max-w-[90%] px-3 py-2 text-sm flex flex-col gap-0.5 border border-border dark:border-[#e5e7eb]/10 ${msg.role === "user"
                        ? "self-end bg-primary text-primary-foreground rounded-2xl rounded-tr-sm"
                        : "self-start bg-card text-foreground rounded-2xl rounded-tl-sm shadow-sm"
                      }`}
                  >
                    <span className="text-[10px] font-semibold opacity-60 uppercase tracking-wider">
                      {msg.role === "user" ? "You" : "AI"}
                    </span>
                    <span className="leading-snug">{msg.content}</span>
                  </div>
                ))}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      key="typing-indicator"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                      className="self-start max-w-[90%] bg-card text-foreground rounded-2xl rounded-tl-sm px-4 py-3 text-sm border border-border dark:border-[#e5e7eb]/10 shadow-sm flex gap-1.5 items-center h-[42px]"
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 bg-current opacity-70 rounded-full"
                          animate={{ y: [0, -4, 0], opacity: [0.4, 0.8, 0.4] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              {/* Fixed Input Area */}
              <div className="p-4 bg-background/50 backdrop-blur-md border-t border-border dark:border-[#e5e7eb]/10">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!inputValue.trim() || isTyping) return;

                    const userText = inputValue;
                    const userMsg: Message = { id: Date.now().toString(), role: "user", content: userText };
                    setMessages((prev) => [...prev, userMsg]);
                    setInputValue("");
                    setIsTyping(true);
                    const startTime = Date.now();

                    try {
                      // Prepare history for API (including the new user message)
                      const apiMessages = messages.concat(userMsg).map(m => ({ role: m.role, content: m.content }));

                      const res = await fetch("/api/chat", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ messages: apiMessages })
                      });

                      let data;
                      const textData = await res.text();
                      try {
                        data = JSON.parse(textData);
                      } catch (e) {
                        throw new Error(`Vercel Server Error: ${res.status} ${textData.slice(0, 100)}...`);
                      }

                      if (!res.ok) {
                        throw new Error(data.reply || data.error || `Server error: ${res.status}`);
                      }

                      const fullReply = data.reply || "Sorry, I couldn't process that.";

                      // Ensure the typing animation shows for at least 1.2 seconds so the user can clearly see it
                      const elapsed = Date.now() - startTime;
                      if (elapsed < 1200) {
                        await new Promise(resolve => setTimeout(resolve, 1200 - elapsed));
                      }

                      setIsTyping(false);

                      // Simulated streaming effect
                      const aiMsgId = (Date.now() + 1).toString();
                      setMessages((prev) => [...prev, { id: aiMsgId, role: "ai", content: "" }]);

                      let currentIndex = 0;
                      // Stream chunks of 2-3 chars for smoother/faster appearance
                      const charsPerTick = 3;
                      const streamInterval = setInterval(() => {
                        if (currentIndex < fullReply.length) {
                          setMessages((prev) =>
                            prev.map(msg =>
                              msg.id === aiMsgId
                                ? { ...msg, content: fullReply.slice(0, currentIndex + charsPerTick) }
                                : msg
                            )
                          );
                          currentIndex += charsPerTick;
                        } else {
                          clearInterval(streamInterval);
                        }
                      }, 15);

                    } catch (error: any) {
                      console.error(error);
                      setIsTyping(false);
                      setMessages((prev) => [...prev, {
                        id: (Date.now() + 1).toString(),
                        role: "ai",
                        content: `Error: ${error.message || "Something went wrong!"}`
                      }]);
                    }
                  }}
                  className="relative flex items-center"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Message AI..."
                    className="w-full bg-card border border-border dark:border-[#e5e7eb]/10 rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="absolute right-2 p-2 rounded-full bg-primary text-primary-foreground disabled:opacity-50 disabled:bg-muted disabled:text-muted-foreground transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
