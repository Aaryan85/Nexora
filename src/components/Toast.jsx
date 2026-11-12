import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, X } from 'lucide-react';

export default function Toast({ message, isVisible, onClose, type = 'info' }) {
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-3.5 py-2.5 rounded-md bg-light-text text-white dark:bg-dark-surface dark:text-dark-text text-xs shadow-modal border border-neutral-700 dark:border-dark-border"
      >
        {type === 'success' ? (
          <Check className="w-3.5 h-3.5 text-white dark:text-dark-text flex-shrink-0" />
        ) : (
          <Info className="w-3.5 h-3.5 text-neutral-300 dark:text-neutral-400 flex-shrink-0" />
        )}
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-white dark:hover:text-dark-text p-0.5 rounded transition-colors ml-1"
          aria-label="Dismiss"
        >
          <X className="w-3 h-3" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
