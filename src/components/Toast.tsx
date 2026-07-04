"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";

export type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-md"
          role="alert"
        >
          <div
            className={`flex items-start gap-3 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl ${
              type === "success"
                ? "bg-surface/95 border-gold/30 gold-glow"
                : "bg-surface/95 border-red-500/30"
            }`}
          >
            {type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            )}
            <p
              className={`text-sm leading-relaxed flex-1 whitespace-pre-line ${
                type === "success" ? "text-white/90" : "text-red-200"
              }`}
            >
              {message}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="text-white/40 hover:text-white/70 transition-colors shrink-0"
              aria-label="關閉通知"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
