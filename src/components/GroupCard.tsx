'use client';

import { Group } from '@/data/characters';

interface GroupCardProps {
  group: Group;
  onCharacterClick: (character: string) => void;
}

export default function GroupCard({ group, onCharacterClick }: GroupCardProps) {
  const getTypeBadgeClass = (type: string) => {
    const baseClasses = "px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide";
    switch (type) {
      case 'military':
        return `${baseClasses} bg-red-500/20 text-red-300 border border-red-500/50`;
      case 'ascendant':
        return `${baseClasses} bg-purple-500/20 text-purple-300 border border-purple-500/50`;
      case 'noble':
        return `${baseClasses} bg-yellow-600/20 text-yellow-300 border border-yellow-600/50`;
      case 'cult':
        return `${baseClasses} bg-green-500/20 text-green-300 border border-green-500/50`;
      default:
        return `${baseClasses} bg-slate-500/20 text-slate-300 border border-slate-500/50`;
    }
  };

  const getCharacterTagClass = (character: string) => {
    let baseClasses = "bg-slate-600/30 text-slate-200 px-3 py-1.5 rounded-full text-sm font-medium border border-slate-500/40 transition-all duration-200 cursor-pointer hover:bg-slate-500/40 hover:border-slate-400/60";
    
    // Important characters
    if (character.includes('Whiskeyjack') || character.includes('Rake') || 
        character.includes('Coltaine') || character.includes('Itkovian') ||
        character.includes('Dujek') || character.includes('Sha\'ik') ||
        character.includes('Quick Ben') || character.includes('Kalam') ||
        character.includes('Brukhalian')) {
      baseClasses = "bg-yellow-600/20 text-yellow-200 px-3 py-1.5 rounded-full text-sm font-semibold border border-yellow-600/50 transition-all duration-200 cursor-pointer hover:bg-yellow-600/30 hover:border-yellow-500/70";
    }
    
    // Ascendant characters  
    if (character.includes('Shadowthrone') || character.includes('Cotillion') || 
        character.includes('Rake') || character.includes('T\'lan Imass') ||
        character.includes('Silverfox') || character.includes('Mhybe') ||
        character.includes('Anomander') || character.includes('Korlat')) {
      baseClasses = "bg-purple-500/20 text-purple-200 px-3 py-1.5 rounded-full text-sm font-semibold border border-purple-500/50 transition-all duration-200 cursor-pointer hover:bg-purple-500/30 hover:border-purple-400/70";
    }
    
    return baseClasses;
  };

  return (
    <div className="bg-slate-800/60 border border-slate-600/50 rounded-xl p-6 transition-all duration-300 hover:bg-slate-800/80 hover:border-slate-500/70 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{group.iconEmoji}</div>
          <div>
            <h3 className="text-slate-50 text-lg font-semibold font-serif leading-tight">
              {group.name}
            </h3>
            <span className={getTypeBadgeClass(group.type)}>
              {group.type}
            </span>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-slate-300 text-sm leading-relaxed mb-6">
        {group.description}
      </p>
      
      {/* Characters */}
      <div>
        <div className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-3">
          Characters ({group.characters.length})
        </div>
        <div className="flex flex-wrap gap-2">
          {group.characters.map((character, index) => (
            <button
              key={index}
              className={getCharacterTagClass(character)}
              onClick={() => onCharacterClick(character)}
            >
              {character}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}