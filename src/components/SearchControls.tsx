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
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center">
          {/* Search Input */}
          <div className="relative flex-1 max-w-2xl">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-12 pl-6 pr-14 border border-slate-600 rounded-xl bg-slate-900/50 text-slate-100 text-base placeholder-slate-400 transition-all duration-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:bg-slate-900/70"
              placeholder="Search characters, groups, or descriptions..."
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* Filters */}
          <div className="flex gap-4">
            <select
              value={bookFilter}
              onChange={(e) => onBookFilterChange(e.target.value)}
              className="h-12 px-5 pr-10 border border-slate-600 rounded-xl bg-slate-900/50 text-slate-100 text-sm font-medium cursor-pointer transition-all duration-200 hover:border-slate-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 min-w-[180px]"
            >
              <option value="all">📚 All Books</option>
              <option value="gotm">🌙 Gardens of the Moon</option>
              <option value="dg">⛓️ Deadhouse Gates</option>
              <option value="moi">❄️ Memories of Ice</option>
            </select>
            
            <select
              value={typeFilter}
              onChange={(e) => onTypeFilterChange(e.target.value)}
              className="h-12 px-5 pr-10 border border-slate-600 rounded-xl bg-slate-900/50 text-slate-100 text-sm font-medium cursor-pointer transition-all duration-200 hover:border-slate-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 min-w-[160px]"
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