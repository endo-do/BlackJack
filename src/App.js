import React, { useState, useEffect } from "react";
import PlayerHand from './components/PlayerHand';
import DealerHand from './components/DealerHand';
import logo from './logo.svg';
import './App.css';


function App() {
  
  const [deck, setDeck] = React.useState([]);
  const [playerhand, setPlayerHand] = React.useState([]);
  const [dealerhand, setDealerHand] = React.useState([]);

  const suits = ["♠", "♥", "♦", "♣"];
  const values = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10',
    'J', 'Q', 'K', 'A'
  ];
  
const createDeck = (numDecks = 4) => {
  const newDeck = [];

  for (let i = 0; i < numDecks; i++) {
    for (let suit of suits) {
      for (let value of values) {
        newDeck.push({ suit, value });
      }
    }
  }

  const shuffledDeck = newDeck.sort(() => Math.random() - 0.5);

  setDeck(shuffledDeck);
  console.log(`Created and shuffled ${numDecks} deck(s):`, shuffledDeck);
};

  useEffect(() => {createDeck();}, []);

  const dealCards = () => {

    if (deck.length < 4) {
    console.error("Deck not ready or too small!");
    return;
  }

    const playerCards = [deck[0], deck[2]];
    const dealerCards = [deck[1], deck[3]];

    setPlayerHand(playerCards);
    setDealerHand(dealerCards);
    setDeck(deck.slice(4));
  };

  return (
    <div className="App">
      <h1>Blackjack Game</h1>
    
      <button onClick={dealCards}>Deal Cards</button>
      
      <DealerHand hand={dealerhand} />
      
      <PlayerHand hand={playerhand} />
    
    </div>
  );
}

export default App;
