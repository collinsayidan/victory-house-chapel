'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-5xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={item.image}
              alt={item.alt || item.title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl object-contain"
            />

            <div className="mt-4 text-white">
              <p className="text-sm uppercase tracking-wide text-brand-300">
                {item.category}
              </p>
              <h3 className="text-2xl font-semibold mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                {item.alt}
              </p>
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}