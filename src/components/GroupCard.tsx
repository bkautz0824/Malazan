'use client';

import { Group } from '@/data/characters';

interface GroupCardProps {
  group: Group;
  onCharacterClick: (character: string) => void;
}

export default function GroupCard({ group, onCharacterClick }: GroupCardProps) {
  const getTypeBadgeClass = (type: string) => {
    const baseClasses = "inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border";
    switch (type) {
      case 'military':
        return `${baseClasses} bg-red-500/15 text-red-300 border-red-500/30`;
      case 'ascendant':
        return `${baseClasses} bg-sky-500/15 text-sky-300 border-sky-500/30`;
      case 'noble':
        return `${baseClasses} bg-amber-500/15 text-amber-300 border-amber-500/30`;
      case 'cult':
        return `${baseClasses} bg-teal-500/15 text-teal-300 border-teal-500/30`;
      default:
        return `${baseClasses} bg-slate-500/15 text-slate-300 border-slate-500/30`;
    }
  };

  const getCharacterTagClass = (character: string) => {
    // Default styling
    let classes = "px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-700/50 text-slate-200 border border-slate-600/50 transition-all duration-200 cursor-pointer hover:bg-slate-600/60 hover:border-slate-500/70";
    
    // Important characters
    if (character.includes('Whiskeyjack') || character.includes('Rake') || 
        character.includes('Coltaine') || character.includes('Itkovian') ||
        character.includes('Dujek') || character.includes('Sha\'ik') ||
        character.includes('Quick Ben') || character.includes('Kalam') ||
        character.includes('Brukhalian')) {
      classes = "px-3 py-1.5 rounded-lg text-sm font-semibold bg-amber-500/15 text-amber-200 border border-amber-500/40 transition-all duration-200 cursor-pointer hover:bg-amber-500/25 hover:border-amber-400/60";
    }
    
    // Ascendant characters
    if (character.includes('Shadowthrone') || character.includes('Cotillion') || 
        character.includes('Rake') || character.includes('T\'lan Imass') ||
        character.includes('Silverfox') || character.includes('Mhybe') ||
        character.includes('Anomander') || character.includes('Korlat')) {
      classes = "px-3 py-1.5 rounded-lg text-sm font-semibold bg-sky-500/15 text-sky-200 border border-sky-500/40 transition-all duration-200 cursor-pointer hover:bg-sky-500/25 hover:border-sky-400/60";
    }
    
    return classes;
  };

  return (
    <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-6 hover:bg-slate-800/70 hover:border-slate-500 transition-all duration-200">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="text-2xl">{group.iconEmoji}</div>
        <div className="flex-1">
          <h3 className="text-slate-100 text-lg font-semibold mb-2">
            {group.name}
          </h3>
          <span className={getTypeBadgeClass(group.type)}>
            {group.type}
          </span>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-slate-300 text-sm leading-relaxed mb-6">
        {group.description}
      </p>
      
      {/* Characters */}
      <div>
        <h4 className="text-slate-400 text-xs uppercase tracking-wide font-medium mb-3">
          Characters ({group.characters.length})
        </h4>
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