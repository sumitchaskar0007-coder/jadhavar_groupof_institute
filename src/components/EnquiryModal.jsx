import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquiryModal({ open, onClose }) {
  const chatRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [stage, setStage] = useState("welcome");

  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const programs = [
    "MCA",
    "MBA",
    "Law",
    "Nursing",
    "Management",
    "Paramedical",
  ];

  // =============================
  // INITIAL MESSAGE
  // =============================
  useEffect(() => {
    if (open) {
      setMessages([
        {
          sender: "bot",
          text:
            "🎓 Welcome to Jadhavar Group of Institutes!\n\nI'm Smith – Your Virtual Admission Assistant.\n\nHow can I help you today?",
        },
      ]);
      setStage("menu");
    }
  }, [open]);

  // =============================
  // AUTO SCROLL
  // =============================
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const addBot = (text) => {
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text }]);
      setTyping(false);
    }, 700);
  };

  const addUser = (text) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
  };

  // =============================
  // MAIN RESPONSE ENGINE
  // =============================
  const handleSend = async () => {
    if (!input.trim()) return;

    const text = input;
    addUser(text);
    setInput("");

    const lower = text.toLowerCase();

    // ============ MENU ============
    if (stage === "menu") {
      if (lower.includes("admission")) {
        addBot("Great! Let's begin your admission enquiry.\n\nWhat is your Full Name?");
        setStage("name");
      } else if (lower.includes("courses")) {
        addBot("We offer: MCA, MBA, Law, Nursing, Paramedical & Management programs.");
      } else if (lower.includes("fees")) {
        addBot("Fee structure varies by program. Which course are you interested in?");
      } else if (lower.includes("placement")) {
        addBot("We provide excellent placement support with reputed companies across institutes.");
      } else {
        addBot("You can type: Admission / Courses / Fees / Placement");
      }
    }

    // ============ NAME ============
    else if (stage === "name") {
      setLead((prev) => ({ ...prev, name: text }));
      addBot("Thanks " + text.split(" ")[0] + "! 😊\nEnter your Email Address.");
      setStage("email");
    }

    // ============ EMAIL ============
    else if (stage === "email") {
      const valid = /^\S+@\S+\.\S+$/.test(text);
      if (!valid) {
        addBot("Please enter a valid email address.");
        return;
      }
      setLead((prev) => ({ ...prev, email: text }));
      addBot("Enter your Mobile / WhatsApp Number.");
      setStage("phone");
    }

    // ============ PHONE ============
    else if (stage === "phone") {
      const valid = /^[0-9]{10,15}$/.test(text);
      if (!valid) {
        addBot("Please enter valid 10–15 digit mobile number.");
        return;
      }
      setLead((prev) => ({ ...prev, phone: text }));
      addBot("Which program are you interested in?\n" + programs.join(" / "));
      setStage("program");
    }

    // ============ PROGRAM ============
    else if (stage === "program") {
      setLead((prev) => ({ ...prev, program: text }));
      addBot("Any specific query about admission or fees? (Type No if none)");
      setStage("message");
    }

    // ============ FINAL SUBMIT ============
    else if (stage === "message") {
      const finalLead = {
        ...lead,
        message: lower === "no" ? "" : text,
      };

      addBot("Submitting your enquiry... 🤝");

      try {
        const res = await fetch("/api/enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalLead),
        });

        if (res.ok) {
          addBot("✅ Your enquiry has been submitted successfully!\nOur admission counselor will contact you soon.");
          setStage("completed");
        } else {
          addBot("❌ Submission failed. Please try again later.");
        }
      } catch {
        addBot("⚠️ Network error.");
      }
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl flex flex-col overflow-hidden"
      >
        {/* HEADER */}
        <div className="bg-[#0F2F5F] text-white p-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg">
              Smith AI Assistant
            </h3>
            <p className="text-xs opacity-90">
              Jadhavar Group of Institutes
            </p>
          </div>
          <button onClick={onClose}>✕</button>
        </div>

        {/* CHAT AREA */}
        <div
          ref={chatRef}
          className="h-96 overflow-y-auto p-4 space-y-3 bg-gray-50"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl max-w-[80%] whitespace-pre-line ${
                msg.sender === "user"
                  ? "bg-[#0F2F5F] text-white ml-auto"
                  : "bg-white shadow text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* QUICK MENU */}
        {stage === "menu" && (
          <div className="p-3 flex flex-wrap gap-2 border-t">
            {["Admission", "Courses", "Fees", "Placement"].map((btn) => (
              <button
                key={btn}
                onClick={() => setInput(btn)}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
              >
                {btn}
              </button>
            ))}
          </div>
        )}

        {/* INPUT */}
        {stage !== "completed" && (
          <div className="flex border-t">
            <input
              className="flex-1 p-3 text-sm outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-[#0F2F5F] text-white px-5"
            >
              Send
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}