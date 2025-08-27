'use client';

import { motion } from 'framer-motion';
import { Users, BookOpen, Eye, Filter } from 'lucide-react';

interface StatsPanelProps {
  totalGroups: number;
  totalCharacters: number;
  visibleGroups: number;
  visibleCharacters: number;
  activeFilters: number;
}

const StatCard = ({ icon: Icon, label, value, color, delay }: {
  icon: any;
  label: string;
  value: number;
  color: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-all"
  >
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-2xl font-bold text-slate-100">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={value}
            transition={{ duration: 0.3 }}
          >
            {value}
          </motion.span>
        </div>
        <div className="text-sm text-slate-400">{label}</div>
      </div>
    </div>
  </motion.div>
);

export default function StatsPanel({
  totalGroups,
  totalCharacters,
  visibleGroups,
  visibleCharacters,
  activeFilters
}: StatsPanelProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={BookOpen}
        label="Total Groups"
        value={totalGroups}
        color="bg-emerald-500/20 text-emerald-400"
        delay={0}
      />
      <StatCard
        icon={Users}
        label="Total Characters"
        value={totalCharacters}
        color="bg-blue-500/20 text-blue-400"
        delay={0.1}
      />
      <StatCard
        icon={Eye}
        label="Visible Groups"
        value={visibleGroups}
        color="bg-amber-500/20 text-amber-400"
        delay={0.2}
      />
      <StatCard
        icon={Filter}
        label="Active Filters"
        value={activeFilters}
        color="bg-purple-500/20 text-purple-400"
        delay={0.3}
      />
    </div>
  );
}