export const characters = [
  {
    id: 'aelindra',
    name: 'Aelindra the Lightbringer',
    title: 'Guardian of the Sacred Flame',
    faction: 'order-of-dawn',
    role: 'Paladin',
    image: null,
    stats: {
      strength: 85,
      agility: 60,
      wisdom: 75,
      charisma: 90
    },
    description: 'Once a humble temple guardian, Aelindra was chosen by the Sacred Flame during the Night of Shadows. Now she leads the Order of Dawn against the encroaching darkness.',
    backstory: 'Born in the village of Solhaven, Aelindra showed an affinity for divine magic from a young age. When the shadow creatures attacked her village, she stood alone against them, and the Sacred Flame answered her prayer, transforming her into its chosen champion.',
    abilities: ['Divine Shield', 'Radiant Strike', 'Beacon of Hope', 'Purifying Light']
  },
  {
    id: 'vexmor',
    name: 'Vexmor the Undying',
    title: 'Lord of the Obsidian Throne',
    faction: 'shadow-dominion',
    role: 'Necromancer',
    image: null,
    stats: {
      strength: 50,
      agility: 45,
      wisdom: 95,
      charisma: 70
    },
    description: 'The primary antagonist of Ohloss. Once a brilliant scholar seeking immortality, Vexmor made a pact with the Void and became its herald of destruction.',
    backstory: 'Centuries ago, Vexmor was the greatest mage of the Arcanum Council. His obsession with defeating death led him to forbidden knowledge. When he opened the Void Gate, he became something neither living nor dead—an eternal vessel for darkness.',
    abilities: ['Soul Harvest', 'Void Corruption', 'Raise Undead Legion', 'Eternal Darkness']
  },
  {
    id: 'kira',
    name: 'Kira Shadowstep',
    title: 'Blade of the Twilight',
    faction: 'twilight-covenant',
    role: 'Assassin',
    image: null,
    stats: {
      strength: 55,
      agility: 95,
      wisdom: 65,
      charisma: 50
    },
    description: 'A mysterious rogue who walks the line between light and shadow. Her loyalties are questioned by all, but her blade has saved the realm more than once.',
    backstory: 'Orphaned during the First Shadow War, Kira was raised by the Twilight Covenant—an order that believes balance, not victory, is the key to saving the world. She serves neither light nor dark, but the preservation of existence itself.',
    abilities: ['Shadow Step', 'Venomous Strike', 'Cloak of Twilight', 'Fate\'s Edge']
  },
  {
    id: 'thornok',
    name: 'Thornok Ironheart',
    title: 'Warlord of the Mountain Clans',
    faction: 'mountain-clans',
    role: 'Berserker',
    image: null,
    stats: {
      strength: 95,
      agility: 40,
      wisdom: 55,
      charisma: 75
    },
    description: 'A legendary warrior whose battle cry can be heard across valleys. Thornok united the warring mountain clans under one banner to face the shadow threat.',
    backstory: 'The Mountain Clans fought each other for generations until Vexmor\'s forces invaded their sacred peaks. Thornok, then a young chieftain, single-handedly held the Pass of Bones for three days. His feat united the clans, who now follow him into any battle.',
    abilities: ['Berserker Rage', 'Mountain\'s Fury', 'War Cry', 'Unbreakable Will']
  },
  {
    id: 'seraphine',
    name: 'Seraphine of the Verdant',
    title: 'Voice of the Ancient Grove',
    faction: 'verdant-circle',
    role: 'Druid',
    image: null,
    stats: {
      strength: 45,
      agility: 70,
      wisdom: 90,
      charisma: 80
    },
    description: 'The last of the Elder Druids, Seraphine communes with the land itself. The forests whisper secrets to her, and she commands nature\'s wrath against those who threaten balance.',
    backstory: 'When the Shadow Blight began corrupting the ancient forests, the Elder Druids sacrificed themselves to create a barrier. Only Seraphine survived, inheriting their collective wisdom and burden. She now seeks to restore what was lost.',
    abilities: ['Nature\'s Wrath', 'Healing Grove', 'Entangling Roots', 'Spirit of the Wild']
  }
];

export const getCharacterById = (id) => characters.find(c => c.id === id);
export const getCharactersByFaction = (factionId) => characters.filter(c => c.faction === factionId);
