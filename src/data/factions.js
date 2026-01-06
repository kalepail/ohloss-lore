export const factions = [
  {
    id: 'gilded-fin',
    name: 'Gilded Fin',
    motto: 'Fortune Favors the Bold',
    alignment: 'Neutral',
    icon: '🐟',
    description: 'A powerful merchant guild that controls the waterways and trade routes of Ohloss. Their wealth buys influence, and their ships carry secrets as valuable as gold.',
    history: 'Founded by the legendary trader Marinus Goldscale, the Gilded Fin rose from humble fishermen to become the economic backbone of the realm. They remain neutral in the conflict between light and shadow, selling to whoever pays.',
    beliefs: [
      'Coin speaks louder than swords',
      'A deal is sacred',
      'The tides favor those who adapt',
      'Information is the most valuable currency'
    ],
    headquarters: 'The Azure Docks',
    leader: 'Admiral Coral Brightwater',
    color: '#4682b4'
  },
  {
    id: 'verdant-hollow',
    name: 'Verdant Hollow',
    motto: 'In Stillness, Strength',
    alignment: 'Light-Allied',
    icon: '🦋',
    description: 'Mystical guardians of the ancient forests who commune with nature spirits. They believe the land itself will decide the fate of Ohloss.',
    history: 'When the first trees grew in Ohloss, the Verdant Hollow was there to witness it. They are the oldest faction, predating even written history. Their connection to the land grants them powers others cannot comprehend.',
    beliefs: [
      'The forest remembers all',
      'Change comes slowly but inevitably',
      'Every creature has its purpose',
      'The moth sees what the sun cannot'
    ],
    headquarters: 'The Whispering Glade',
    leader: 'Elder Moth Lunara',
    color: '#228b22'
  },
  {
    id: 'wobblestone-clan',
    name: 'Wobblestone Clan',
    motto: 'Stand Tall, Stand Together',
    alignment: 'Light-Allied',
    icon: '🦩',
    description: 'Eccentric inventors and builders who dwell in precarious towers and impossible structures. Their crane totems symbolize balance and perspective.',
    history: 'The Wobblestone Clan emerged from refugees who learned to build homes in the most inhospitable places. Their architecture defies physics, and their inventions—while unreliable—have turned the tide of many battles.',
    beliefs: [
      'If it wobbles, it\'s working',
      'Height brings wisdom',
      'Community before self',
      'Every problem has a creative solution'
    ],
    headquarters: 'The Tilted Spire',
    leader: 'Grand Architect Stilts',
    color: '#d2691e'
  },
  {
    id: 'order-of-dawn',
    name: 'Order of the Dawn',
    motto: 'In Light, We Prevail',
    alignment: 'Light',
    description: 'A holy order dedicated to protecting the realm from the forces of darkness. They worship the Sacred Flame and believe in absolute righteousness.',
    history: 'Founded after the First Shadow War by the survivors of the Great Temple, the Order of Dawn has stood as the primary bulwark against Vexmor\'s forces for over three centuries. Their citadel, Sunspire, houses the Sacred Flame itself.',
    beliefs: [
      'The Sacred Flame is the source of all good',
      'Darkness must be purged, not bargained with',
      'Self-sacrifice for the greater good is the highest honor',
      'Redemption is possible for all who seek the light'
    ],
    headquarters: 'Sunspire Citadel',
    leader: 'Aelindra the Lightbringer',
    color: '#ffd700'
  },
  {
    id: 'shadow-dominion',
    name: 'The Shadow Dominion',
    motto: 'Eternal Night Awaits',
    alignment: 'Dark',
    description: 'The army of Vexmor the Undying. Composed of corrupted souls, undead legions, and those who willingly serve darkness in exchange for power.',
    history: 'Born from Vexmor\'s pact with the Void, the Shadow Dominion emerged from the ruins of the Arcanum Council. For centuries, they have sought to extinguish all light and plunge the world into eternal darkness.',
    beliefs: [
      'Death is merely transformation',
      'Power is the only truth',
      'The Void promises eternal existence',
      'Light is a temporary aberration in the natural darkness'
    ],
    headquarters: 'The Obsidian Citadel',
    leader: 'Vexmor the Undying',
    color: '#4a0080'
  },
  {
    id: 'twilight-covenant',
    name: 'The Twilight Covenant',
    motto: 'Balance in All Things',
    alignment: 'Neutral',
    description: 'A secretive order that believes neither light nor darkness should dominate. They work in shadows to maintain balance, often opposing both sides.',
    history: 'The Covenant was formed by disillusioned members of both the Order and the Dominion who saw that absolute victory for either side would destroy the world. They operate in secret, their true numbers unknown.',
    beliefs: [
      'Total light blinds; total darkness suffocates',
      'Balance is the natural state of existence',
      'Both sides must be prevented from winning completely',
      'The greatest enemy is extremism in any form'
    ],
    headquarters: 'Unknown (The Threshold)',
    leader: 'The Grey Council',
    color: '#708090'
  },
  {
    id: 'mountain-clans',
    name: 'The United Mountain Clans',
    motto: 'Stone Endures',
    alignment: 'Light-Allied',
    description: 'Fierce warriors from the northern peaks who value strength, honor, and clan loyalty above all. Recently united against the shadow threat.',
    history: 'For millennia, the mountain clans warred amongst themselves over territory and honor. The shadow invasion of their sacred peaks forced them to unite under Thornok Ironheart. Now they are among the most formidable allies against darkness.',
    beliefs: [
      'Strength proves worth',
      'Clan honor must be defended',
      'The mountains are sacred',
      'Death in battle is glorious'
    ],
    headquarters: 'Ironhold Fortress',
    leader: 'Thornok Ironheart',
    color: '#8b4513'
  },
  {
    id: 'verdant-circle',
    name: 'The Verdant Circle',
    motto: 'Life Finds a Way',
    alignment: 'Light-Allied',
    description: 'Ancient druids who protect the natural world. They see the shadow corruption as a disease that must be healed, not just fought.',
    history: 'The oldest order in existence, the Verdant Circle predates even the first civilizations. They have watched empires rise and fall while protecting the natural balance. The Shadow Blight has pushed them from isolation into open alliance.',
    beliefs: [
      'Nature is sacred above all',
      'Corruption can be cleansed',
      'All life is connected',
      'The cycle of life and death must be respected'
    ],
    headquarters: 'The Heart Grove',
    leader: 'Seraphine of the Verdant',
    color: '#228b22'
  }
];

export const getFactionById = (id) => factions.find(f => f.id === id);
