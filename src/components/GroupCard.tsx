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
    // Default styling with massive padding
    let classes = "inline-flex items-center px-6 py-4 rounded-xl text-base font-medium bg-slate-700/50 text-slate-200 border border-slate-600/50 transition-all duration-200 cursor-pointer hover:bg-slate-600/60 hover:border-slate-500/70 hover:text-slate-100 min-h-[48px]";
    
    // Important characters - Gold styling with generous padding
    if (character.includes('Whiskeyjack') || character.includes('Rake') || 
        character.includes('Coltaine') || character.includes('Itkovian') ||
        character.includes('Dujek') || character.includes('Sha\'ik') ||
        character.includes('Quick Ben') || character.includes('Kalam') ||
        character.includes('Brukhalian')) {
      classes = "inline-flex items-center px-6 py-4 rounded-xl text-base font-semibold bg-amber-500/15 text-amber-200 border border-amber-500/40 transition-all duration-200 cursor-pointer hover:bg-amber-500/25 hover:border-amber-400/60 hover:text-amber-100 min-h-[48px]";
    }
    
    // Ascendant characters - Sky blue styling with generous padding
    if (character.includes('Shadowthrone') || character.includes('Cotillion') || 
        character.includes('Rake') || character.includes('T\'lan Imass') ||
        character.includes('Silverfox') || character.includes('Mhybe') ||
        character.includes('Anomander') || character.includes('Korlat')) {
      classes = "inline-flex items-center px-6 py-4 rounded-xl text-base font-semibold bg-sky-500/15 text-sky-200 border border-sky-500/40 transition-all duration-200 cursor-pointer hover:bg-sky-500/25 hover:border-sky-400/60 hover:text-sky-100 min-h-[48px]";
    }
    
    return classes;
  };

  return (
    <article className="group bg-slate-900/50 border border-slate-700/60 rounded-3xl p-12 transition-all duration-300 hover:bg-slate-900/70 hover:border-slate-600/80 hover:shadow-xl hover:shadow-slate-900/20">
      {/* Header Section - Massive breathing room */}
      <header className="space-y-8 mb-12">
        {/* Icon and Title Group */}
        <div className="flex items-start gap-8">
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-slate-800/50 rounded-2xl text-3xl">
            {group.iconEmoji}
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="heading-large text-slate-100 text-2xl leading-tight">
              {group.name}
            </h3>
            <div>
              {/* Type Badge with generous spacing */}
              <span className={getTypeBadgeClass(group.type)}>
                {group.type}
              </span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Description Section - Massive separation */}
      <div className="mb-12">
        <p className="text-body text-slate-300 text-lg leading-loose px-2">
          {group.description}
        </p>
      </div>
      
      {/* Characters Section - Lots of breathing room */}
      <footer className="space-y-8">
        <div className="flex items-center justify-between px-2">
          <h4 className="text-caption text-slate-400 text-base">
            Characters
          </h4>
          <span className="inline-flex items-center justify-center w-10 h-10 bg-slate-800/50 text-slate-400 text-base font-medium rounded-full">
            {group.characters.length}
          </span>
        </div>
        
        {/* Character Tags with massive spacing */}
        <div className="flex flex-wrap gap-4 p-2">
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
      </footer>
    </article>
  );
}