'use client';

import { motion } from 'framer-motion';
import { Book, ChevronRight } from 'lucide-react';

interface BookTimelineProps {
  activeBook: string;
  onBookChange: (book: string) => void;
}

const books = [
  {
    key: 'gotm',
    title: 'Gardens of the Moon',
    subtitle: 'The Siege of Pale',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-500/10 border-emerald-500/30',
    textColor: 'text-emerald-400'
  },
  {
    key: 'dg',
    title: 'Deadhouse Gates',
    subtitle: 'Chain of Dogs',
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-500/10 border-orange-500/30',
    textColor: 'text-orange-400'
  },
  {
    key: 'moi',
    title: 'Memories of Ice',
    subtitle: 'The Pannion War',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10 border-blue-500/30',
    textColor: 'text-blue-400'
  }
];

export default function BookTimeline({ activeBook, onBookChange }: BookTimelineProps) {
  const activeIndex = books.findIndex(book => book.key === activeBook);

  return (
    <div className="relative">
      <div className="flex items-center gap-4 overflow-x-auto scrollbar-none pb-2">
        {books.map((book, index) => {
          const isActive = book.key === activeBook;
          const isPast = activeIndex > index;
          const isFuture = activeIndex < index;

          return (
            <div key={book.key} className="flex items-center gap-4 flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onBookChange(book.key)}
                className={`relative p-4 rounded-xl border transition-all duration-300 min-w-[200px] text-left ${
                  isActive 
                    ? `${book.bgColor} shadow-lg` 
                    : isPast
                    ? 'bg-slate-700/30 border-slate-600/30'
                    : 'bg-slate-800/30 border-slate-700/30 hover:bg-slate-700/40'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${isActive ? book.bgColor : 'bg-slate-700/50'}`}>
                    <Book className={`w-4 h-4 ${isActive ? book.textColor : 'text-slate-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-sm ${isActive ? 'text-slate-100' : 'text-slate-300'}`}>
                      {book.title}
                    </h3>
                    <p className={`text-xs mt-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      {book.subtitle}
                    </p>
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="active-book"
                    className={`absolute inset-0 bg-gradient-to-r ${book.color} opacity-10 rounded-xl`}
                  />
                )}
              </motion.button>

              {index < books.length - 1 && (
                <ChevronRight className="w-5 h-5 text-slate-500 flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((activeIndex + 1) / books.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-amber-500 to-sky-500 rounded-full"
        />
      </div>
    </div>
  );
}