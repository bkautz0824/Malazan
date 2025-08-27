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
    <div className="bg-black/30 backdrop-blur-[15px] p-8 flex gap-5 flex-wrap items-center justify-center border-b border-slate-600">
      <div className="relative flex-1 min-w-[280px] max-w-[400px]">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-5 py-4 pr-12 border-2 border-slate-600 rounded-[25px] bg-white/5 text-slate-50 text-base font-normal transition-all duration-300 backdrop-blur-[10px] placeholder-slate-400 focus:outline-none focus:border-yellow-600 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)]"
          placeholder="Search characters, groups, or descriptions..."
        />
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
          🔍
        </span>
      </div>
      
      <select
        value={bookFilter}
        onChange={(e) => onBookFilterChange(e.target.value)}
        className="px-5 py-4 border-2 border-slate-600 rounded-2xl bg-white/5 text-slate-50 text-base font-medium min-w-[180px] cursor-pointer transition-all duration-300 backdrop-blur-[10px] hover:border-slate-400 hover:bg-white/8 focus:outline-none focus:border-yellow-600 focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)]"
      >
        <option value="all">📚 All Books</option>
        <option value="gotm">🌙 Gardens of the Moon</option>
        <option value="dg">⛓️ Deadhouse Gates</option>
        <option value="moi">❄️ Memories of Ice</option>
      </select>
      
      <select
        value={typeFilter}
        onChange={(e) => onTypeFilterChange(e.target.value)}
        className="px-5 py-4 border-2 border-slate-600 rounded-2xl bg-white/5 text-slate-50 text-base font-medium min-w-[180px] cursor-pointer transition-all duration-300 backdrop-blur-[10px] hover:border-slate-400 hover:bg-white/8 focus:outline-none focus:border-yellow-600 focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)]"
      >
        <option value="all">🎭 All Types</option>
        <option value="military">⚔️ Military</option>
        <option value="ascendant">✨ Ascendants/Gods</option>
        <option value="noble">👑 Noble Houses</option>
        <option value="cult">🕯️ Cults/Orders</option>
        <option value="other">🎯 Other</option>
      </select>
    </div>
  );
}