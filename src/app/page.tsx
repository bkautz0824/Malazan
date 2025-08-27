'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { charactersData } from '@/data/characters';
import FilterSidebar from '@/components/ui/sidebar-filter';
import ModernGroupCard from '@/components/ui/modern-group-card';
import StatsPanel from '@/components/ui/stats-panel';
import BookTimeline from '@/components/ui/book-timeline';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookFilter, setBookFilter] = useState('gotm'); // Start with first book
  const [typeFilter, setTypeFilter] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { filteredData, stats } = useMemo(() => {
    let totalGroups = 0;
    let totalCharacters = 0;
    let visibleGroups = 0;
    let visibleCharacters = 0;

    // Calculate totals first
    Object.keys(charactersData).forEach(bookKey => {
      const book = charactersData[bookKey];
      book.groups.forEach(group => {
        totalGroups++;
        totalCharacters += group.characters.length;
      });
    });

    const filtered = Object.keys(charactersData).reduce((acc, bookKey) => {
      const book = charactersData[bookKey];
      
      if (bookFilter !== 'all' && bookFilter !== bookKey) return acc;

      const filteredGroups = book.groups.filter(group => {
        if (typeFilter !== 'all' && typeFilter !== group.type) return false;

        const matchesSearch = searchTerm === '' || 
          group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          group.characters.some(char => char.toLowerCase().includes(searchTerm.toLowerCase()));

        if (matchesSearch) {
          visibleGroups++;
          visibleCharacters += group.characters.length;
          return true;
        }
        return false;
      });

      if (filteredGroups.length > 0) {
        acc[bookKey] = { ...book, groups: filteredGroups };
      }

      return acc;
    }, {} as typeof charactersData);

    return {
      filteredData: filtered,
      stats: { totalGroups, totalCharacters, visibleGroups, visibleCharacters }
    };
  }, [searchTerm, bookFilter, typeFilter]);

  const handleCharacterClick = (character: string) => {
    setSearchTerm(character);
  };

  const activeFilters = [searchTerm, bookFilter !== 'all', typeFilter !== 'all'].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Modern Header */}
      <header className="relative border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-sky-500/5 to-teal-500/5" />
        
        <div className="relative px-6 py-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-slate-800 rounded-xl transition-colors"
              >
                <Menu className="w-6 h-6 text-slate-300" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-sky-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-100">
                    Malazan Universe
                  </h1>
                  <p className="text-sm text-slate-400">
                    Interactive Character Explorer
                  </p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-slate-300">Live Data</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-80 border-r border-slate-700/50 bg-slate-900/50">
          <FilterSidebar
            isOpen={true}
            onClose={() => {}}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            bookFilter={bookFilter}
            onBookFilterChange={setBookFilter}
            typeFilter={typeFilter}
            onTypeFilterChange={setTypeFilter}
          />
        </div>

        {/* Mobile Sidebar */}
        <FilterSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          bookFilter={bookFilter}
          onBookFilterChange={setBookFilter}
          typeFilter={typeFilter}
          onTypeFilterChange={setTypeFilter}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-hidden">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Stats Panel */}
            <StatsPanel
              totalGroups={stats.totalGroups}
              totalCharacters={stats.totalCharacters}
              visibleGroups={stats.visibleGroups}
              visibleCharacters={stats.visibleCharacters}
              activeFilters={activeFilters}
            />

            {/* Book Timeline */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
                <span>📚</span>
                Book Timeline
              </h2>
              <BookTimeline
                activeBook={bookFilter}
                onBookChange={setBookFilter}
              />
            </div>

            {/* Groups Grid */}
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {Object.keys(filteredData).length > 0 ? (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    {Object.keys(filteredData).map(bookKey => {
                      const book = filteredData[bookKey];
                      return (
                        <section key={bookKey} className="space-y-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                          >
                            <h3 className="text-xl font-semibold text-slate-200 mb-2">
                              {book.title}
                            </h3>
                            <div className="text-sm text-slate-400">
                              {book.groups.length} group{book.groups.length !== 1 ? 's' : ''} found
                            </div>
                          </motion.div>
                          
                          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            {book.groups.map((group, index) => (
                              <ModernGroupCard
                                key={`${bookKey}-${index}`}
                                group={group}
                                onCharacterClick={handleCharacterClick}
                                index={index}
                              />
                            ))}
                          </div>
                        </section>
                      );
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-20"
                  >
                    <div className="text-6xl mb-4 opacity-20">🔍</div>
                    <h3 className="text-xl font-semibold text-slate-300 mb-2">
                      No groups found
                    </h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                      Try adjusting your search terms or filters to explore different parts of the Malazan universe
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSearchTerm('');
                        setBookFilter('all');
                        setTypeFilter('all');
                      }}
                      className="mt-6 px-6 py-3 bg-amber-500/20 text-amber-300 rounded-xl border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
                    >
                      Reset Filters
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
