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
    <div className="bg-black/30 backdrop-blur-[15px] px-6 py-6 border-b border-slate-600">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-3 pr-10 border border-slate-500 rounded-lg bg-slate-800/50 text-slate-50 text-sm transition-all duration-200 placeholder-slate-400 focus:outline-none focus:border-yellow-600 focus:bg-slate-800/70"
              placeholder="Search characters, groups, or descriptions..."
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              🔍
            </span>
          </div>
          
          <div className="flex gap-3">
            <select
              value={bookFilter}
              onChange={(e) => onBookFilterChange(e.target.value)}
              className="px-4 py-3 border border-slate-500 rounded-lg bg-slate-800/50 text-slate-50 text-sm cursor-pointer transition-all duration-200 hover:border-slate-400 focus:outline-none focus:border-yellow-600"
            >
              <option value="all">📚 All Books</option>
              <option value="gotm">🌙 Gardens of the Moon</option>
              <option value="dg">⛓️ Deadhouse Gates</option>
              <option value="moi">❄️ Memories of Ice</option>
            </select>
            
            <select
              value={typeFilter}
              onChange={(e) => onTypeFilterChange(e.target.value)}
              className="px-4 py-3 border border-slate-500 rounded-lg bg-slate-800/50 text-slate-50 text-sm cursor-pointer transition-all duration-200 hover:border-slate-400 focus:outline-none focus:border-yellow-600"
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
    </div>
  );
}