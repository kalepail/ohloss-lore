import gildedFinBg from '../assets/gilded-fin-domain.png';
import gildedFinReps from '../assets/gilded-fin-reps.png';
import verdantHollowBg from '../assets/verdant-hollow-domain.png';
import verdantHollowReps from '../assets/verdant-hollow-reps.png';
import wobblestoneBg from '../assets/wobblestone-domain.png';
import wobblestoneReps from '../assets/wobblestone-reps.png';

export const factions = [
  {
    id: 'gilded-fin',
    name: 'Gilded Fin',
    motto: "I've got an idea, and a very fast ship.",
    icon: '𓆛',
    domain: 'River delta and marshlands',
    values: 'Courage, luck, audacity, and a little chaos',
    lifestyle: 'Bustling trade hub and haven of mischief',
    hero: 'The Luckfish',
    heroCharacter: 'Boppy Fishbite',
    color: '#4682b4',
    backgroundImage: gildedFinBg,
    repsImage: gildedFinReps
  },
  {
    id: 'verdant-hollow',
    name: 'Verdant Hollow',
    motto: 'Peace is our preference. But not our position.',
    icon: 'ཐི༏ཋྀ',
    domain: 'Lush valley conservatories',
    values: 'Memory, history, the senses, and the art of storytelling',
    lifestyle: 'Home to historians and chroniclers',
    hero: 'Maestro Noteleaf',
    heroCharacter: 'Orren Ash',
    color: '#228b22',
    backgroundImage: verdantHollowBg,
    repsImage: verdantHollowReps
  },
  {
    id: 'wobblestone-clan',
    name: 'Wobblestone',
    motto: "Stone doesn't bend. Neither do we.",
    icon: '𓅣',
    domain: 'Mist-wreathed mountains',
    values: 'Harmony, balance, and discipline',
    lifestyle: 'High ridges and stone terraces crafted by generations of builders',
    hero: 'The Stonecrane',
    heroCharacter: 'Kael Coldhart',
    color: '#d2691e',
    backgroundImage: wobblestoneBg,
    repsImage: wobblestoneReps
  }
];

export const getFactionById = (id) => factions.find(f => f.id === id);
