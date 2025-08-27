'use client';

import { useState, useMemo } from 'react';
import { charactersData } from '@/data/characters';
import SearchControls from '@/components/SearchControls';
import StatsBar from '@/components/StatsBar';
import GroupCard from '@/components/GroupCard';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookFilter, setBookFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const { filteredData, stats } = useMemo(() => {
    let totalGroups = 0;
    let totalCharacters = 0;
    let visibleGroups = 0;
    let visibleCharacters = 0;

    const filtered = Object.keys(charactersData).reduce((acc, bookKey) => {
      const book = charactersData[bookKey];
      
      if (bookFilter !== 'all' && bookFilter !== bookKey) {
        // Still count for totals
        book.groups.forEach(group => {
          totalGroups++;
          totalCharacters += group.characters.length;
        });
        return acc;
      }

      const filteredGroups = book.groups.filter(group => {
        totalGroups++;
        totalCharacters += group.characters.length;

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

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-xl border-b border-slate-700 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="text-center space-y-6">
            <h1 className="heading-display text-amber-400 text-5xl md:text-6xl">
              Malazan Book of the Fallen
            </h1>
            <p className="text-slate-400 text-xl font-medium">
              Character & Group Map • Through early Memories of Ice
            </p>
          </div>
        </div>
      </header>

      {/* Search Controls */}
      <SearchControls
        searchTerm={searchTerm}
        bookFilter={bookFilter}
        typeFilter={typeFilter}
        onSearchChange={setSearchTerm}
        onBookFilterChange={setBookFilter}
        onTypeFilterChange={setTypeFilter}
      />

      {/* Stats Bar */}
      <StatsBar
        visibleGroups={stats.visibleGroups}
        totalGroups={stats.totalGroups}
        visibleCharacters={stats.visibleCharacters}
        totalCharacters={stats.totalCharacters}
      />

      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-8 py-20">
        <div className="space-y-24">
          {Object.keys(filteredData).length > 0 ? (
            Object.keys(filteredData).map(bookKey => {
              const book = filteredData[bookKey];
              return (
                <section key={bookKey} className="space-y-16">
                  <div className="text-center space-y-8 py-8">
                    <h2 className="heading-large text-slate-100 text-4xl md:text-5xl">
                      {book.title}
                    </h2>
                    <div className="w-40 h-1.5 bg-gradient-to-r from-amber-500 to-sky-500 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12">
                    {book.groups.map((group, index) => (
                      <GroupCard
                        key={`${bookKey}-${index}`}
                        group={group}
                        onCharacterClick={handleCharacterClick}
                      />
                    ))}
                  </div>
                </section>
              );
            })
          ) : (
            <div className="text-center py-32 space-y-12">
              <div className="text-8xl opacity-30">🔍</div>
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-slate-300">No Results Found</h3>
                <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">
                  Try adjusting your search terms or filters to find characters and groups
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
