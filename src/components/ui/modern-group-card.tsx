'use client';

import { motion } from 'framer-motion';
import { Users, ChevronRight } from 'lucide-react';
import { Group } from '@/data/characters';

interface ModernGroupCardProps {
  group: Group;
  onCharacterClick: (character: string) => void;
  index: number;
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'military': return '⚔️';
    case 'ascendant': return '✨';
    case 'noble': return '👑';
    case 'cult': return '🔥';
    default: return '👥';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'military': return 'from-red-500/20 to-red-600/10 border-red-500/30';
    case 'ascendant': return 'from-sky-500/20 to-sky-600/10 border-sky-500/30';
    case 'noble': return 'from-amber-500/20 to-amber-600/10 border-amber-500/30';
    case 'cult': return 'from-teal-500/20 to-teal-600/10 border-teal-500/30';
    default: return 'from-slate-500/20 to-slate-600/10 border-slate-500/30';
  }
};

const getCharacterTagStyle = (character: string) => {
  // Important characters
  if (character.includes('Whiskeyjack') || character.includes('Rake') || 
      character.includes('Coltaine') || character.includes('Itkovian') ||
      character.includes('Dujek') || character.includes('Sha\'ik') ||
      character.includes('Quick Ben') || character.includes('Kalam') ||
      character.includes('Brukhalian')) {
    return 'bg-gradient-to-r from-amber-500/30 to-amber-600/20 text-amber-200 border-amber-500/50 hover:from-amber-500/40 hover:to-amber-600/30';
  }
  
  // Ascendant characters
  if (character.includes('Shadowthrone') || character.includes('Cotillion') || 
      character.includes('Rake') || character.includes('T\'lan Imass') ||
      character.includes('Silverfox') || character.includes('Mhybe') ||
      character.includes('Anomander') || character.includes('Korlat')) {
    return 'bg-gradient-to-r from-sky-500/30 to-sky-600/20 text-sky-200 border-sky-500/50 hover:from-sky-500/40 hover:to-sky-600/30';
  }
  
  return 'bg-slate-700/50 text-slate-300 border-slate-600/50 hover:bg-slate-600/60';
};

export default function ModernGroupCard({ group, onCharacterClick, index }: ModernGroupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className={`relative bg-gradient-to-br ${getTypeColor(group.type)} border rounded-2xl p-10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
        {/* Animated background glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(group.type)} blur-xl`} />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center text-3xl border border-slate-700/50"
              >
                {getTypeIcon(group.type)}
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
                  {group.name}
                </h3>
                <div className="flex items-center gap-4 text-base text-slate-400">
                  <span className="capitalize font-medium">{group.type}</span>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{group.characters.length}</span>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              whileHover={{ x: 4 }}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-lg leading-relaxed mb-10 group-hover:text-slate-200 transition-colors">
            {group.description}
          </p>

          {/* Character Tags */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-wide text-slate-400 font-medium">
                Key Characters
              </span>
              <span className="text-sm text-slate-500">
                {group.characters.length} total
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4 max-h-40 overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600">
              {group.characters.slice(0, 8).map((character, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onCharacterClick(character)}
                  className={`px-5 py-3 rounded-lg text-sm font-medium border transition-all duration-200 ${getCharacterTagStyle(character)}`}
                >
                  {character}
                </motion.button>
              ))}
              {group.characters.length > 8 && (
                <div className="px-5 py-3 rounded-lg text-sm font-medium bg-slate-800/50 text-slate-400 border border-slate-700/50">
                  +{group.characters.length - 8} more
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}