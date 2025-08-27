'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Filter, BookOpen, Users, Sword, Crown, Sparkles, Flame } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  bookFilter: string;
  onBookFilterChange: (value: string) => void;
  typeFilter: string;
  onTypeFilterChange: (value: string) => void;
}

const books = [
  { key: 'all', label: 'All Books', icon: BookOpen, color: 'text-slate-400' },
  { key: 'gotm', label: 'Gardens of the Moon', icon: BookOpen, color: 'text-emerald-400' },
  { key: 'dg', label: 'Deadhouse Gates', icon: BookOpen, color: 'text-orange-400' },
  { key: 'moi', label: 'Memories of Ice', icon: BookOpen, color: 'text-blue-400' }
];

const types = [
  { key: 'all', label: 'All Types', icon: Users, color: 'text-slate-400' },
  { key: 'military', label: 'Military', icon: Sword, color: 'text-red-400' },
  { key: 'noble', label: 'Noble Houses', icon: Crown, color: 'text-amber-400' },
  { key: 'ascendant', label: 'Ascendants/Gods', icon: Sparkles, color: 'text-sky-400' },
  { key: 'cult', label: 'Cults/Orders', icon: Flame, color: 'text-teal-400' },
  { key: 'other', label: 'Other', icon: Users, color: 'text-slate-400' }
];

export default function FilterSidebar({
  isOpen,
  onClose,
  searchTerm,
  onSearchChange,
  bookFilter,
  onBookFilterChange,
  typeFilter,
  onTypeFilterChange
}: FilterSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700 z-50 lg:relative lg:translate-x-0"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <Filter className="w-5 h-5 text-amber-400" />
                  <h2 className="text-lg font-semibold text-slate-100">Filters</h2>
                </div>
                <button
                  onClick={onClose}
                  className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="flex-1 p-8 space-y-12 overflow-y-auto">
                {/* Search */}
                <div className="space-y-6">
                  <label className="text-base font-medium text-slate-300 uppercase tracking-wide">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => onSearchChange(e.target.value)}
                      placeholder="Search characters, groups..."
                      className="w-full pl-12 pr-6 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-slate-100 placeholder-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-base"
                    />
                  </div>
                </div>

                {/* Books Filter */}
                <div className="space-y-6">
                  <label className="text-base font-medium text-slate-300 uppercase tracking-wide">
                    Books
                  </label>
                  <div className="space-y-3">
                    {books.map((book) => {
                      const Icon = book.icon;
                      return (
                        <motion.button
                          key={book.key}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => onBookFilterChange(book.key)}
                          className={`w-full flex items-center gap-4 px-6 py-4 rounded-lg transition-all ${
                            bookFilter === book.key
                              ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                              : 'hover:bg-slate-800/50 text-slate-300 hover:text-slate-200'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${book.color}`} />
                          <span className="font-medium">{book.label}</span>
                          {bookFilter === book.key && (
                            <motion.div
                              layoutId="book-selected"
                              className="ml-auto w-2 h-2 bg-amber-400 rounded-full"
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Types Filter */}
                <div className="space-y-6">
                  <label className="text-base font-medium text-slate-300 uppercase tracking-wide">
                    Group Types
                  </label>
                  <div className="space-y-3">
                    {types.map((type) => {
                      const Icon = type.icon;
                      return (
                        <motion.button
                          key={type.key}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => onTypeFilterChange(type.key)}
                          className={`w-full flex items-center gap-4 px-6 py-4 rounded-lg transition-all ${
                            typeFilter === type.key
                              ? 'bg-sky-500/20 border border-sky-500/40 text-sky-300'
                              : 'hover:bg-slate-800/50 text-slate-300 hover:text-slate-200'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${type.color}`} />
                          <span className="font-medium">{type.label}</span>
                          {typeFilter === type.key && (
                            <motion.div
                              layoutId="type-selected"
                              className="ml-auto w-2 h-2 bg-sky-400 rounded-full"
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}