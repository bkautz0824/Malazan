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
    <div className="bg-black/20 px-8 py-4 text-center text-sm text-slate-400 border-b border-slate-600">
      Showing {visibleGroups} of {totalGroups} groups • {visibleCharacters} of {totalCharacters} characters
    </div>
  );
}