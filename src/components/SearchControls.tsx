'use client';

interface SearchControlsProps {
  searchTerm: string;
  bookFilter: string;
  typeFilter: string;
  onSearchChange: (value: string) => void;
  onBookFilterChange: (value: string) => void;
  onTypeFilterChange: (value: string) => void;
}

export default function SearchControls({
  searchTerm,
  bookFilter,
  typeFilter,
  onSearchChange,
  onBookFilterChange,
  onTypeFilterChange
}: SearchControlsProps) {
  return (
    <section className="bg-slate-800/60 backdrop-blur-xl border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch lg:items-center">
          {/* Search Input with massive padding */}
          <div className="relative flex-1 max-w-3xl">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-16 pl-8 pr-16 border-2 border-slate-600 rounded-2xl bg-slate-900/50 text-slate-100 text-lg placeholder-slate-400 transition-all duration-200 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 focus:bg-slate-900/70"
              placeholder="Search characters, groups, or descriptions..."
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* Filters with generous spacing */}
          <div className="flex gap-6">
            <select
              value={bookFilter}
              onChange={(e) => onBookFilterChange(e.target.value)}
              className="h-16 px-6 pr-12 border-2 border-slate-600 rounded-2xl bg-slate-900/50 text-slate-100 text-base font-medium cursor-pointer transition-all duration-200 hover:border-slate-500 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 min-w-[200px]"
            >
              <option value="all">📚 All Books</option>
              <option value="gotm">🌙 Gardens of the Moon</option>
              <option value="dg">⛓️ Deadhouse Gates</option>
              <option value="moi">❄️ Memories of Ice</option>
            </select>
            
            <select
              value={typeFilter}
              onChange={(e) => onTypeFilterChange(e.target.value)}
              className="h-16 px-6 pr-12 border-2 border-slate-600 rounded-2xl bg-slate-900/50 text-slate-100 text-base font-medium cursor-pointer transition-all duration-200 hover:border-slate-500 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 min-w-[180px]"
            >
              <option value="all">🎭 All Types</option>
              <option value="military">⚔️ Military</option>
              <option value="ascendant">✨ Ascendants/Gods</option>
              <option value="noble">👑 Noble Houses</option>
              <option value="cult">🕯️ Cults/Orders</option>
              <option value="other">🎯 Other</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}