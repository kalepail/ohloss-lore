export const guides = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    category: 'Basics',
    description: 'Everything you need to know to begin your journey in Ohloss.',
    sections: [
      {
        heading: 'Welcome to Ohloss',
        content: `Welcome, adventurer! Ohloss is a world of light and shadow, where your choices shape the fate of nations. This guide will help you take your first steps into this epic fantasy world.`
      },
      {
        heading: 'Choosing Your Path',
        content: `When you begin, you'll choose one of five character roles:

**Paladin** - Holy warriors who wield divine light. High defense and support abilities.

**Necromancer** - Masters of dark magic. Can raise undead and drain life force.

**Assassin** - Swift and deadly. Excel at single-target damage and stealth.

**Berserker** - Powerful melee fighters. High damage but lower defense.

**Druid** - Nature magic users. Versatile healers and damage dealers.

Each role can align with any faction, creating unique story paths and abilities.`
      },
      {
        heading: 'Faction Alignment',
        content: `Your faction determines your allies, enemies, and ultimate goals:

**Order of the Dawn** - Fight for the light. Access to holy abilities and Sunspire.

**Shadow Dominion** - Embrace darkness. Unlock necromancy and the Obsidian Citadel.

**Twilight Covenant** - Walk between worlds. Unique balanced abilities.

**Mountain Clans** - Honor and strength. Powerful physical bonuses.

**Verdant Circle** - Protect nature. Enhanced druidic magic.

You can change factions later, but it comes at a cost.`
      }
    ]
  },
  {
    id: 'combat-guide',
    title: 'Combat System',
    category: 'Gameplay',
    description: 'Master the art of battle in Ohloss.',
    sections: [
      {
        heading: 'Basic Combat',
        content: `Combat in Ohloss is turn-based with action points. Each turn, you have 3 action points to spend on:

- **Basic attacks** (1 AP)
- **Abilities** (1-3 AP depending on power)
- **Items** (1 AP)
- **Movement** (1 AP per zone)

Strategic positioning and ability combinations are key to victory.`
      },
      {
        heading: 'The Light/Shadow Meter',
        content: `A unique mechanic in Ohloss is the Light/Shadow meter. Actions aligned with light or dark shift your meter, unlocking different abilities:

**Full Light** - Access to powerful holy abilities but locked out of shadow magic.

**Full Shadow** - Devastating dark powers but holy magic damages you.

**Balanced** - Access to Twilight abilities that combine both forces.

The meter adds strategic depth—sometimes embracing darkness temporarily is the path to victory.`
      },
      {
        heading: 'Boss Battles',
        content: `Major story bosses have multiple phases and unique mechanics:

- **Phase 1**: Learn the boss's patterns
- **Phase 2**: Boss gains new abilities at 50% health
- **Phase 3**: Desperate final attacks below 25%

Each faction has different strategies for major bosses. The Twilight path often reveals hidden weaknesses others miss.`
      }
    ]
  },
  {
    id: 'world-exploration',
    title: 'Exploring the World',
    category: 'Gameplay',
    description: 'Discover the secrets hidden throughout Ohloss.',
    sections: [
      {
        heading: 'Major Regions',
        content: `Ohloss contains five major regions:

**The Sunlit Lands** - Order of Dawn territory. Rolling hills and golden fields.

**The Shadowmere** - Corrupted lands near the Obsidian Citadel. Dangerous but rich in dark materials.

**The Twilight Expanse** - Contested territory where light and shadow meet.

**The Northern Peaks** - Mountain Clan homeland. Harsh but honorable.

**The Ancient Groves** - Verdant Circle sanctuary. Lush forests with ancient secrets.`
      },
      {
        heading: 'Hidden Locations',
        content: `Throughout Ohloss, secret areas await discovery:

- **Lost temples** containing forgotten lore
- **Hidden caves** with rare materials
- **Ancient battlefields** haunted by echoes of the past
- **Faction sanctuaries** accessible only to members

Exploration is rewarded with unique items, story fragments, and powerful abilities.`
      },
      {
        heading: 'Fast Travel',
        content: `Once discovered, major locations can be fast-traveled to using Waystone Crystals. Each faction maintains their own Waystone network:

- Light faction stones glow golden
- Dark faction stones pulse purple
- Neutral stones shimmer grey

Twilight Covenant members can use any Waystone regardless of alignment.`
      }
    ]
  },
  {
    id: 'crafting-guide',
    title: 'Crafting System',
    category: 'Systems',
    description: 'Create powerful equipment and consumables.',
    sections: [
      {
        heading: 'Gathering Materials',
        content: `Materials are found throughout Ohloss:

**Common**: Found everywhere, used for basic items
**Uncommon**: Region-specific, moderate equipment
**Rare**: Boss drops and hidden locations, powerful gear
**Legendary**: Unique sources, faction-specific artifacts

Your faction alignment affects which rare materials you can safely gather.`
      },
      {
        heading: 'Crafting Stations',
        content: `Each faction headquarters has specialized crafting:

**Sunspire Forge** - Holy weapons and armor
**Obsidian Crucible** - Dark artifacts and corrupted gear
**Twilight Loom** - Balanced equipment with unique properties
**Mountain Anvil** - Heavy armor and mighty weapons
**Grove Sanctuary** - Nature-infused items and potions`
      },
      {
        heading: 'Enchanting',
        content: `Equipment can be enhanced with light or shadow essence:

- Light enchants add holy damage and protection
- Shadow enchants add life drain and corruption effects
- Twilight enchants (rare) add balanced bonuses

Heavy enchanting shifts your Light/Shadow meter, so plan carefully.`
      }
    ]
  }
];

export const getGuideById = (id) => guides.find(g => g.id === id);
export const getGuidesByCategory = (category) => guides.filter(g => g.category === category);
