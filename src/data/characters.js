import boppyImage from '../assets/boppy-headshot.png';
import francoisImage from '../assets/Francois Headshot.png';
import hanaImage from '../assets/hana-headshot.png';
import kaelImage from '../assets/kael-headshot.png';
import lysaImage from '../assets/Lysa Quillfern Headshot.png';
import orrenImage from '../assets/orren-headshot.png';
import zebulitaImage from '../assets/zebulita-headshot.png';

const boppyVideo = 'https://pub-926e83c1aba94367940772a4e9ff430b.r2.dev/boppy-fishbite.mp4';
const kaelVideo = 'https://pub-926e83c1aba94367940772a4e9ff430b.r2.dev/kael-coldhart-small.mp4';
const orrenVideo = 'https://pub-926e83c1aba94367940772a4e9ff430b.r2.dev/orren-ash-small.mp4';
const zebulitaVideo = 'https://pub-926e83c1aba94367940772a4e9ff430b.r2.dev/zebulita-small.mp4';

export const characters = [
  {
    id: 'boppy-fishbite',
    name: 'Boppy Fishbite',
    title: 'Gilded Fin',
    faction: 'gilded-fin',
    role: 'Swashbuckler',
    image: boppyImage,
    video: boppyVideo,
    mainAttribute: 'Swagger',
    stats: {
      Charm: 80,
      Swagger: 95,
      Charisma: 60,
      Tenacity: 70,
      Guile: 90,
      Subtlety: 5
    },
    description: 'Boppy has never told anyone about her past. Many men have asked. Not all of them have lived. Cross her on the dock, and you\'ll be darn sure to hear her, laughing, swaggering, pistols at the ready. Boppy\'s got that bright-eyed charm that makes people drop their guard… right before she drops them. If you catch her eye, you\'re about to get lucky or incredibly unlucky. And there ain\'t no in between.',
    backstory: 'Growing up in the marshlands of the Gilded Fin, Boppy learned early that fortune favors the bold—and the fast. Now one of the delta\'s most notorious traders, Boppy moves goods, secrets, and occasionally people through routes only they know.',
    abilities: ['Shoot First, Ask Never', 'Dockside Diplomacy', 'Lucky or Dead']
  },
  {
    id: 'francois-dubois',
    name: 'Francois Dubois',
    title: 'Gilded Fin',
    faction: 'gilded-fin',
    role: 'French Pirate',
    image: francoisImage,
    video: null,
    mainAttribute: 'Brazen',
    stats: {
      Debonair: 90,
      Grandiose: 95,
      Impulsive: 85,
      Brazen: 88,
      Vainglorious: 100,
      Humility: 5
    },
    description: 'Yells of "Excusè-moi!" and "Arrête-toi!" echo across the docks when Francois Dubois is near. A fearsome pirate with a sordid past, Francois left his watery life after losing his ship in a high-stakes game of doubloons. Bringing his swashbuckling savvy and impressive swordsmanship to shore, Francois seeks to make a name for himself on land as he did at sea.',
    backstory: 'Once captain of the notorious vessel La Belle Tempête, Francois ruled the seas with flair and panache. But one fateful night, a cunning card shark bested him at his own game, and Francois watched his beloved ship sail away under a new flag. Now landlocked but never defeated, he brings theatrical combat and French charm to the Gilded Fin.',
    abilities: ['En Garde!', 'Dramatic Flourish', 'Charme Français']
  },
  {
    id: 'kael-coldhart',
    name: 'Kael Coldhart',
    title: 'Wobblestone',
    faction: 'wobblestone-clan',
    role: 'Staffmaster',
    image: kaelImage,
    video: kaelVideo,
    mainAttribute: 'Discipline',
    stats: {
      Discipline: 100,
      Craft: 95,
      Balance: 75,
      Resolve: 80,
      Whimsy: 0,
      Pride: 90
    },
    description: 'Kael Coldhart was an orphan taken in by the monks at the monastery of the Wobblestone. He had crawled to the mountain settlement through the snow all alone after his parents tragically passed away in a tragic accidental avalanche accident. The monks taught him much in the ways of the staff and of the mind. And he\'s trained all his life. He may look really freaking old, but he is the best warrior the Wobblestone\'s got.',
    backstory: 'Raised among the precarious towers of the Wobblestone, Kael discovered that stability comes not from rigidity, but from understanding how things move. Their impossible bridges and leaning spires have become legendary throughout Awen.',
    abilities: ['Measured Response', 'Hold the Line', 'No Further Adjustments']
  },
  {
    id: 'hana-stoneflight',
    name: 'Hana Stoneflight',
    title: 'Wobblestone',
    faction: 'wobblestone-clan',
    role: 'Swordsmaster',
    image: hanaImage,
    video: null,
    mainAttribute: 'Discipline',
    stats: {
      Insight: 90,
      Discipline: 95,
      Cunning: 80,
      Stubbornness: 100,
      Vibes: 85,
      Napping: 5
    },
    description: 'Hana Stoneflight has devoted as much of her life to meditation as she has to martial mastery, moving through battle with the same balance and precision a mason brings to stone. Her disciplined swordsmanship and unshakable calm make her a formidable presence, but her commitment to inner harmony is absolute. When the moment calls for reflection, Hana will settle into a cross-legged meditation—arrows flying, enemies advancing, timing be damned.',
    backstory: 'Trained in the ancient sword traditions of the Wobblestone, Hana learned that true mastery lies not in the blade but in the mind that wields it. Her teachers spoke of stone that does not break because it does not resist—and Hana took this lesson to heart, finding strength in stillness even amid chaos.',
    abilities: ['Stone Stance', 'Inner Harmony', 'Blade Meditation']
  },
  {
    id: 'orren-ash',
    name: 'Orren Ash',
    title: 'Verdant Hollow',
    faction: 'verdant-hollow',
    role: 'Dendrologist',
    image: orrenImage,
    video: orrenVideo,
    mainAttribute: 'Insight',
    stats: {
      Resilience: 75,
      Insight: 90,
      Photosynthesis: 100,
      Camouflage: 85,
      Flexibility: 5
    },
    description: 'Orren Ash was picking mushrooms one afternoon when he suddenly tripped into a tree. He was found several days later, and ever since, he\'s had bark for skin. Naturally, he did the only sensible thing: he moved into the Verdant Hollow conservatories and buried himself in research to figure out why the heck he now looks like a tree. The work is ongoing. In the meantime, Orren has discovered his new condition has perks: his skin is tough as nails (whatever that means), and anytime he\'s somewhere he doesn\'t want to be, he can just leaf.',
    backstory: 'In the valley conservatories of the Verdant Hollow, Orren spent decades cataloging the histories of all three factions. When Zebulita seized power, Orren realized that memory itself had become a form of resistance.',
    abilities: ['Barkskin, Apparently', 'Just Leafs', 'Ongoing Research']
  },
  {
    id: 'lysa-quillfern',
    name: 'Lysa Quillfern',
    title: 'Verdant Hollow',
    faction: 'verdant-hollow',
    role: 'Sentinel',
    image: lysaImage,
    video: null,
    mainAttribute: 'Perception',
    stats: {
      Perception: 95,
      Vigilance: 90,
      Patience: 85,
      Reliability: 100,
      Accuracy: 60,
      Confidence: 5
    },
    description: 'Lysa Quillfern grew up believing she\'d never be good at anything—until she discovered looking for stuff. With sharp eyes for scouting and steady hands for shading the sun, Lysa finally found her purpose after years of doubting her usefulness. Though she occasionally calls out the wrong things (trees, birds, or "something historical, probably"), she has never once failed to spot a real threat when it mattered, making her one of Verdant Hollow\'s most quietly reliable sentinels.',
    backstory: 'For years, Lysa drifted through the conservatories of Verdant Hollow, convinced she had no gift worth mentioning. Then one afternoon, she spotted a Gilded Fin smuggler three valleys away while everyone else was still squinting at clouds. She\'s been on watch duty ever since—and secretly quite proud of it.',
    abilities: ['Eagle Eye', 'False Alarm', 'When It Matters']
  },
  {
    id: 'zebulita',
    name: 'Zebulita',
    title: 'The Empress',
    faction: 'villain',
    role: 'Tyrant',
    image: zebulitaImage,
    video: zebulitaVideo,
    mainAttribute: 'Charm',
    stats: {
      Charm: 100,
      Manipulation: 95,
      Control: 90,
      Calculation: 85,
      Persistence: 80,
      Cuteness: 100
    },
    description: 'Zebulita hails from the planet Tharaxis, where she lived and flourished alongside her infamous cousin, Zebulon. However, instead of earning power through force, she learned to use her cuteness and charm.\n\nShe arrived in Awen as a diplomatic robot: small, adorable, and perfectly sweet. Leaders trusted her. People adored her. Even the Wobblestone elders were charmed.\n\nBut that was the trap.\n\nZebulita offered to bring fairness and peace to Awen. But instead, she grabbed power and declared herself Empress.\n\nBy the time the clans realized, it was too late.\n\nZebulita was never harmless.\n\nShe only played the part long enough to win.',
    backstory: 'Zebulita arrived in Awen as a small, cute diplomatic robot with chiming voice and warm, blinking eyes. The factions trusted her to organize the games fairly. By the time they realized their mistake, she had already declared herself Empress.',
    abilities: ['Charming Facade', 'Political Manipulation', 'Disarming Smile', 'Adorable Deception']
  }
];

export const getCharacterById = (id) => characters.find(c => c.id === id);
export const getCharactersByFaction = (factionId) => characters.filter(c => c.faction === factionId);
