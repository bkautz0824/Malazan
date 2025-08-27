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
      <header className="bg-slate-900/95 backdrop-blur-xl border-b border-slate-700 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center space-y-3">
            <h1 className="heading-display text-amber-400 text-4xl md:text-5xl">
              Malazan Book of the Fallen
            </h1>
            <p className="text-slate-400 text-lg font-medium">
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
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-16">
          {Object.keys(filteredData).length > 0 ? (
            Object.keys(filteredData).map(bookKey => {
              const book = filteredData[bookKey];
              return (
                <section key={bookKey} className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="heading-large text-slate-100 text-3xl md:text-4xl">
                      {book.title}
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-sky-500 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
            <div className="text-center py-24 space-y-6">
              <div className="text-6xl opacity-30">🔍</div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-slate-300">No Results Found</h3>
                <p className="text-slate-500 max-w-md mx-auto">
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
