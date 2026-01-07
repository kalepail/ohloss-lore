import boppyImage from '../assets/boppy-headshot.png';
import boppyVideo from '../assets/boppy-fishbite-video.mp4';
import kaelImage from '../assets/kael-headshot.png';
import orrenImage from '../assets/orren-headshot.png';
import orrenVideo from '../assets/orren-ash-video.mp4';
import zebulitaImage from '../assets/zebulita-headshot.png';

export const characters = [
  {
    id: 'boppy-fishbite',
    name: 'Boppy Fishbite',
    title: 'Gilded Fin',
    faction: 'gilded-fin',
    role: 'Swashbuckler',
    image: boppyImage,
    video: boppyVideo,
    mainAttribute: 'agility',
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
    abilities: ['Slippery Escape', 'Lucky Break', 'Fast Talk', 'Hidden Channels']
  },
  {
    id: 'kael-coldhart',
    name: 'Kael Coldhart',
    title: 'Wobblestone Clan',
    faction: 'wobblestone-clan',
    role: 'Builder',
    image: kaelImage,
    mainAttribute: 'wisdom',
    stats: {
      strength: 75,
      agility: 50,
      wisdom: 85,
      charisma: 65
    },
    description: 'A master builder whose structures defy gravity and logic. Kael believes that with enough balance and creativity, anything can stand—even in the face of impossible odds.',
    backstory: 'Raised among the precarious towers of the Wobblestone Clan, Kael discovered that stability comes not from rigidity, but from understanding how things move. Their impossible bridges and leaning spires have become legendary throughout Awen.',
    abilities: ['Structural Insight', 'Steady Hands', 'Improvised Engineering', 'Stone Sense']
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
    abilities: ['Perfect Recall', 'Ancient Wisdom', 'Story Weaving', 'Truth Seeing']
  },
  {
    id: 'zebulita',
    name: 'Zebulita',
    title: 'The Empress',
    faction: 'villain',
    role: 'Tyrant',
    image: zebulitaImage,
    mainAttribute: 'charisma',
    stats: {
      strength: 60,
      agility: 70,
      wisdom: 90,
      charisma: 95
    },
    description: 'A diplomatic robot who charmed her way into controlling the realm. Behind her adorable exterior lies a calculating mind that has monopolized all faction points under her rule.',
    backstory: 'Zebulita arrived in Awen as a small, cute diplomatic robot with chiming voice and warm, blinking eyes. The factions trusted her to organize the games fairly. By the time they realized their mistake, she had already declared herself Empress.',
    abilities: ['Charming Facade', 'Political Manipulation', 'Faction Point Control', 'Adorable Deception']
  }
];

export const getCharacterById = (id) => characters.find(c => c.id === id);
export const getCharactersByFaction = (factionId) => characters.filter(c => c.faction === factionId);
