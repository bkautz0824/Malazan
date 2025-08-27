export interface Character {
  name: string;
  isImportant?: boolean;
  isAscendant?: boolean;
}

export interface Group {
  name: string;
  type: 'military' | 'ascendant' | 'noble' | 'cult' | 'other';
  description: string;
  characters: string[];
  imageUrl?: string | null;
  iconEmoji: string;
}

export interface Book {
  title: string;
  groups: Group[];
}

export const charactersData: Record<string, Book> = {
  gotm: {
    title: "Gardens of the Moon",
    groups: [
      {
        name: "Bridgeburners",
        type: "military",
        description: "Elite Malazan military unit, survivors of many campaigns. Nearly wiped out at the siege of Pale, these hardened veterans represent the old guard of the Empire.",
        characters: ["Sergeant Whiskeyjack", "Sorry/Apsalar", "Quick Ben", "Kalam", "Fiddler", "Hedge", "Mallet", "Trotts", "Picker", "Antsy"],
        imageUrl: null,
        iconEmoji: "⚔️"
      },
      {
        name: "Malazan Empire",
        type: "military",
        description: "Expansionist empire led by Empress Laseen after the mysterious assassination of Emperor Kellanved and Dancer.",
        characters: ["Empress Laseen", "High Fist Dujek", "Captain Paran", "Adjunct Lorn", "Tool (T'lan Imass)", "Tayschrenn"],
        imageUrl: null,
        iconEmoji: "🏛️"
      },
      {
        name: "Darujhistan Council",
        type: "noble",
        description: "The ruling council of the Free City of Darujhistan, a wealthy trade city that values its independence.",
        characters: ["Turban Orr", "Estraysian D'Arle", "Challice D'Arle", "Baruk"],
        imageUrl: null,
        iconEmoji: "👑"
      },
      {
        name: "Phoenix Inn Circle",
        type: "other",
        description: "Thieves, assassins, and rogues who frequent the Phoenix Inn in Darujhistan's underworld.",
        characters: ["Kruppe", "Murillio", "Rallick Nom", "Coll", "Irilta", "Meese", "Crokus"],
        imageUrl: null,
        iconEmoji: "🍺"
      },
      {
        name: "House of Shadow",
        type: "ascendant",
        description: "Mysterious ascendant house led by Shadowthrone and Cotillion, former Emperor Kellanved and Dancer.",
        characters: ["Shadowthrone/Kellanved", "Cotillion/Dancer", "Sorry/Apsalar", "Servant", "Hounds of Shadow"],
        imageUrl: null,
        iconEmoji: "🌑"
      },
      {
        name: "Tiste Andii",
        type: "ascendant",
        description: "Ancient, long-lived race led by Anomander Rake from the floating fortress Moon's Spawn.",
        characters: ["Anomander Rake", "Serrat", "Horult", "Orfantal", "Korlat"],
        imageUrl: null,
        iconEmoji: "🌙"
      },
      {
        name: "Assassins' Guild",
        type: "other",
        description: "Professional killers operating in Darujhistan with their own codes and hierarchies.",
        characters: ["Vorcan", "Rallick Nom", "Ocelot", "Talo Krafar"],
        imageUrl: null,
        iconEmoji: "🗡️"
      }
    ]
  },
  dg: {
    title: "Deadhouse Gates",
    groups: [
      {
        name: "Chain of Dogs",
        type: "military",
        description: "The legendary fighting retreat led by Coltaine across the continent of Seven Cities, protecting tens of thousands of refugees.",
        characters: ["Coltaine", "Duiker", "Captain Lull", "Corporal List", "Nether", "Nil", "Bult"],
        imageUrl: null,
        iconEmoji: "⛓️"
      },
      {
        name: "Wickan Clans",
        type: "military",
        description: "Horse nomads from the Wickan Plains, serving the Malazan Empire under their Warleader Coltaine.",
        characters: ["Coltaine", "Nether", "Nil", "Temul", "Bult", "Sormo E'nath"],
        imageUrl: null,
        iconEmoji: "🐎"
      },
      {
        name: "Whirlwind Rebellion",
        type: "cult",
        description: "Apocalyptic rebellion sweeping Seven Cities, led by the reborn Sha'ik and powered by the goddess Dryjhna.",
        characters: ["Sha'ik", "Leoman", "Toblakai/Karsa", "Felisin", "Heboric", "Bidithal", "Kamist Reloe"],
        imageUrl: null,
        iconEmoji: "🌪️"
      },
      {
        name: "Malazan 7th Army",
        type: "military",
        description: "Malazan forces stationed in Seven Cities, caught unprepared by the scale of the Whirlwind uprising.",
        characters: ["High Fist Pormqual", "Captain Keneb", "Captain Lull", "Corporal List", "Bent", "Roach"],
        imageUrl: null,
        iconEmoji: "🛡️"
      },
      {
        name: "Red Blades",
        type: "military",
        description: "Elite guard unit that has served various masters throughout Seven Cities' turbulent history.",
        characters: ["Kalam", "Pearl", "Aralt Arpat", "Red Blade Veterans"],
        imageUrl: null,
        iconEmoji: "🔴"
      },
      {
        name: "Otataral Island",
        type: "other",
        description: "The mining slave camp where magic is negated by otataral dust, creating a hellish prison.",
        characters: ["Felisin", "Heboric", "Baudin", "Beneth", "Sawark"],
        imageUrl: null,
        iconEmoji: "⛏️"
      },
      {
        name: "T'lan Imass",
        type: "ascendant",
        description: "Ancient undead warriors bound by their Ritual, serving the needs of their endless war.",
        characters: ["Legana Breed", "Monok Ochem", "Ibra Gholan", "Hentos Ilm"],
        imageUrl: null,
        iconEmoji: "💀"
      }
    ]
  },
  moi: {
    title: "Memories of Ice (Early)",
    groups: [
      {
        name: "Onearm's Host",
        type: "military",
        description: "Dujek's combined forces including the reformed Bridgeburners, now outlawed from the Empire and operating independently.",
        characters: ["Dujek Onearm", "Whiskeyjack", "Quick Ben", "Kalam", "Picker", "Antsy", "Detoran", "Spindle"],
        imageUrl: null,
        iconEmoji: "🚩"
      },
      {
        name: "Grey Swords",
        type: "military",
        description: "Elite mercenary company serving the city of Capustan, devoted to the Boar of Summer (Fener) and the Wolf of Winter (Togg).",
        characters: ["Shield Anvil Itkovian", "Mortal Sword Brukhalian", "Karnadas", "Recruits", "Veterans of the company"],
        imageUrl: null,
        iconEmoji: "🐗"
      },
      {
        name: "Bridgeburners (Reformed)",
        type: "military",
        description: "The surviving members of the legendary unit, now part of Onearm's Host but maintaining their identity.",
        characters: ["Whiskeyjack", "Quick Ben", "Kalam", "Fiddler", "Hedge", "Picker", "Antsy", "Detoran", "Spindle", "Blend"],
        imageUrl: null,
        iconEmoji: "🔥"
      },
      {
        name: "Tiste Andii of Moon's Spawn",
        type: "ascendant",
        description: "Anomander Rake's forces, having formed an uneasy alliance with Onearm's Host against common threats.",
        characters: ["Anomander Rake", "Korlat", "Orfantal", "Horult", "Tiste Andii Soletaken"],
        imageUrl: null,
        iconEmoji: "🌌"
      },
      {
        name: "Capustan Defenders",
        type: "military",
        description: "Various forces defending the holy city of Capustan against the approaching Pannion Domin.",
        characters: ["Prince Jelarkan", "Capustan Guard", "Militia commanders", "Mortal Sword Brukhalian"],
        imageUrl: null,
        iconEmoji: "🏰"
      },
      {
        name: "Rhivi & Mhybe's Circle",
        type: "other",
        description: "The ancient Rhivi people and those connected to the Mhybe's mysterious and tragic transformation.",
        characters: ["The Mhybe", "Silverfox", "T'lan Imass Bonecasters", "Rhivi shamans", "Rhivi elders"],
        imageUrl: null,
        iconEmoji: "🔮"
      },
      {
        name: "Pannion Domin (Distant Threat)",
        type: "cult",
        description: "The approaching religious empire that threatens to consume all in its path with fanatical devotion.",
        characters: ["The Pannion Seer", "Septarch Kulpath", "Tenescowri", "Pannion armies"],
        imageUrl: null,
        iconEmoji: "☠️"
      }
    ]
  }
};