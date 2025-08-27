interface StatsBarProps {
  visibleGroups: number;
  totalGroups: number;
  visibleCharacters: number;
  totalCharacters: number;
}

export default function StatsBar({
  visibleGroups,
  totalGroups,
  visibleCharacters,
  totalCharacters
}: StatsBarProps) {
  return (
    <div className="bg-slate-900/40 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-center items-center space-x-8 text-sm font-medium">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="text-amber-400 font-semibold">{visibleGroups}</span>
            <span>of</span>
            <span className="text-slate-400">{totalGroups}</span>
            <span className="text-slate-400">groups</span>
          </div>
          <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="text-sky-400 font-semibold">{visibleCharacters}</span>
            <span>of</span>
            <span className="text-slate-400">{totalCharacters}</span>
            <span className="text-slate-400">characters</span>
          </div>
        </div>
      </div>
    </div>
  );
}