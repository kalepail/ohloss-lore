export const guides = [
  {
    id: 'get-usdc',
    title: 'Get USDC in your Ohloss Account',
    category: 'Getting Started',
    description: 'Learn how to fund your Ohloss account with USDC to start playing.',
    sections: [
      {
        heading: 'What is USDC?',
        content: `USDC is a digital dollar that you'll use to participate in Ohloss games. It's stable, secure, and easy to use.`
      },
      {
        heading: 'Setting Up Your Account',
        content: `Before you can add USDC, you'll need to create your Ohloss account. Follow these steps:

1. Visit the Ohloss platform
2. Connect your wallet or create a new one
3. Complete account verification`
      },
      {
        heading: 'Adding USDC',
        content: `Once your account is set up, you can add USDC in several ways:

- Transfer from an existing wallet
- Purchase directly through our platform
- Receive from another Ohloss player`
      }
    ]
  },
  {
    id: 'build-games',
    title: 'Build the Games',
    category: 'Creators',
    description: 'Create your own games and earn faction points for your clan.',
    sections: [
      {
        heading: 'Why Build Games?',
        content: `In Awen, any competition can generate faction points. By building games, you help your faction grow stronger while creating fun experiences for everyone.`
      },
      {
        heading: 'Game Requirements',
        content: `All games must meet these basic requirements:

- Clear rules that determine a winner
- Fair competition between participants
- Proper faction point distribution`
      },
      {
        heading: 'Submitting Your Game',
        content: `Ready to submit your game? Here's what you need:

1. A complete game design document
2. Testing results showing fairness
3. Faction sponsorship (optional but recommended)`
      }
    ]
  },
  {
    id: 'play-games',
    title: 'Play the Games',
    category: 'Players',
    description: 'Join competitions, earn faction points, and help your clan rise to power.',
    sections: [
      {
        heading: 'Finding Games',
        content: `Games are happening all across Awen—in taverns, marketplaces, and hidden corners. Browse the game listings to find competitions that match your skills and interests.`
      },
      {
        heading: 'Joining a Competition',
        content: `To join a game:

1. Select a game from the listings
2. Pay the entry fee (if required)
3. Choose which faction receives your points
4. Play and compete!`
      },
      {
        heading: 'Earning Faction Points',
        content: `When you win, your chosen faction earns points. The more you play and win, the stronger your faction becomes. Remember: every point brings your clan closer to challenging Empress Zebulita.`
      }
    ]
  }
];

export const getGuideById = (id) => guides.find(g => g.id === id);
export const getGuidesByCategory = (category) => guides.filter(g => g.category === category);
