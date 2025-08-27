'use client';

import { Group } from '@/data/characters';

interface GroupCardProps {
  group: Group;
  onCharacterClick: (character: string) => void;
}

export default function GroupCard({ group, onCharacterClick }: GroupCardProps) {
  const getTypeBadgeClass = (type: string) => {
    const baseClasses = "px-2 py-1 rounded-xl text-xs font-semibold uppercase tracking-wide";
    switch (type) {
      case 'military':
        return `${baseClasses} bg-red-500/20 text-red-300 border border-red-500`;
      case 'ascendant':
        return `${baseClasses} bg-purple-500/20 text-purple-300 border border-purple-500`;
      case 'noble':
        return `${baseClasses} bg-yellow-600/20 text-yellow-300 border border-yellow-600`;
      case 'cult':
        return `${baseClasses} bg-green-500/20 text-green-300 border border-green-500`;
      default:
        return `${baseClasses} bg-slate-500/20 text-slate-300 border border-slate-500`;
    }
  };

  const getCharacterTagClass = (character: string) => {
    let baseClasses = "bg-blue-500/15 text-blue-300 px-4 py-2 rounded-[20px] text-sm font-medium border border-blue-500/30 transition-all duration-300 cursor-pointer relative overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)]";
    
    // Important characters
    if (character.includes('Whiskeyjack') || character.includes('Rake') || 
        character.includes('Coltaine') || character.includes('Itkovian') ||
        character.includes('Dujek') || character.includes('Sha\'ik') ||
        character.includes('Quick Ben') || character.includes('Kalam') ||
        character.includes('Brukhalian')) {
      baseClasses = baseClasses.replace('bg-blue-500/15 text-blue-300 border-blue-500/30', 'bg-yellow-600/15 text-yellow-600 border-yellow-600/40') + ' font-semibold hover:shadow-[0_6px_20px_rgba(212,175,55,0.4)]';
    }
    
    // Ascendant characters
    if (character.includes('Shadowthrone') || character.includes('Cotillion') || 
        character.includes('Rake') || character.includes('T\'lan Imass') ||
        character.includes('Silverfox') || character.includes('Mhybe') ||
        character.includes('Anomander') || character.includes('Korlat')) {
      baseClasses = baseClasses.replace('bg-blue-500/15 text-blue-300 border-blue-500/30', 'bg-purple-500/15 text-purple-300 border-purple-500/40') + ' font-semibold hover:shadow-[0_6px_20px_rgba(139,92,246,0.4)]';
    }
    
    return baseClasses;
  };

  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-700/80 border border-slate-600 rounded-2xl transition-all duration-[400ms] cubic-bezier-[0.4,0,0.2,1] relative overflow-hidden backdrop-blur-[10px] flex flex-col hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:border-yellow-600 hover:bg-gradient-to-br hover:from-slate-700/90 hover:to-slate-700/70 hover:shadow-[0_20px_60px_rgba(212,175,55,0.2)] group">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Image section */}
      {group.imageUrl ? (
        <img 
          src={group.imageUrl} 
          alt={group.name}
          className="w-full h-[200px] object-cover rounded-2xl rounded-b-none transition-transform duration-400 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-[200px] bg-gradient-to-br from-yellow-600/10 to-purple-500/10 flex items-center justify-center text-5xl text-slate-400 rounded-2xl rounded-b-none relative overflow-hidden">
          {group.iconEmoji}
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className={getTypeBadgeClass(group.type)}>
            {group.type}
          </span>
          <h3 className="text-slate-50 text-xl font-semibold tracking-wide flex-1 font-serif">
            {group.name}
          </h3>
        </div>
        
        <p className="text-slate-300 mb-5 line-height-[1.6] font-light flex-1">
          {group.description}
        </p>
        
        <div className="border-t border-white/10 pt-4">
          <div className="text-slate-400 text-sm font-medium uppercase tracking-wide mb-3">
            Characters ({group.characters.length})
          </div>
          <div className="flex flex-wrap gap-2">
            {group.characters.map((character, index) => (
              <span
                key={index}
                className={getCharacterTagClass(character)}
                onClick={() => onCharacterClick(character)}
              >
                {character}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}