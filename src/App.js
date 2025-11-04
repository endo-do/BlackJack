import React, { useEffect } from "react";
import { DeckContext } from "./context/DeckContext";
import PlayerHand from './components/PlayerHand';
import DealerHand from './components/DealerHand';
import PlayerActions from "./components/PlayerActions";
import checkWinner from "./logic/checkWinner";
import getHandTotal from "./logic/getHandTotal";
import drawCard from "./logic/drawCard";
import './App.css';

function App() {
  
  const { deck, setDeck, dealerHand, setDealerHand, playerHand, setPlayerHand, playerTurn, setPlayerTurn } = React.useContext(DeckContext);
  const [winner, setWinner] = React.useState(null);
  const [showActions, setShowActions] = React.useState(false);

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
  };

  // create deck if no deck
  useEffect(() => {
    if (deck.length === 0) {
      createDeck();
    }
  }, [deck.length]);

 
  useEffect(() => {
    if (playerHand.length > 0 && dealerHand.length > 0 && deck.length > 0) {
      const playerTotal = getHandTotal(playerHand);
      const dealerTotal = getHandTotal(dealerHand);
      const playerBlackJack = playerTotal === 21;
      const dealerBlackJack = dealerTotal === 21;
      const playerBusted = playerTotal > 21;
      
      if (dealerBlackJack) {
        // askSurrender();
      }

      if (playerBlackJack) {
        // playerBlackJack();
      }

      // Check if dealer should play
      if (!playerTurn || playerBusted) {
        if (playerBusted) {
          setPlayerTurn(false);
        }
        
        // Dealer logic
        const dealerTotal = getHandTotal(dealerHand);
        if (dealerTotal < 17 && deck.length > 0) {
          const {updatedHand, updatedDeck} = drawCard({hand: dealerHand, deck: deck});
          // Add 1 second delay after drawing
          const timeout = setTimeout(() => {
            setDealerHand(updatedHand);
            setDeck(updatedDeck);
          }, 500);
          
          return () => clearTimeout(timeout);
        } else {
          // Dealer is done, check winner
          const result = checkWinner({playerHand, dealerHand});
          if (result) {
            setWinner(result);
            // Clear hands after a delay to show the result
            setTimeout(() => {
              setPlayerHand([]);
              setDealerHand([]);
              setPlayerTurn(true);
              setWinner(null);
              setShowActions(false); // Hide actions when clearing hands
            }, 2000); // Clear after 2 seconds
          }
        }
      }
    }
  }, [playerTurn, playerHand, dealerHand, deck]);

  const dealCards = () => {

    // shuffle deck
    if (deck.length < 4) {
    console.error("Deck not ready or too small!");
    return;
  }

    // Deal cards one at a time with 0.5 second delay between each
    // Card 1: Player
    setTimeout(() => {
      setPlayerHand([deck[0]]);
    }, 500);
    
    // Card 2: Dealer
    setTimeout(() => {
      setDealerHand([deck[1]]);
    }, 1000);
    
    // Card 3: Player
    setTimeout(() => {
      setPlayerHand([deck[0], deck[2]]);
    }, 1500);
    
    // Card 4: Dealer
    setTimeout(() => {
      setDealerHand([deck[1], deck[3]]);
      setDeck(deck.slice(4));
      setPlayerTurn(true);
      setWinner(null);
    }, 2000);
    
    // Show PlayerActions after 2.5 seconds
    setTimeout(() => {
      setShowActions(true);
    }, 2500);


  };

  // Hide Deal button when game is in progress
  const isGameInProgress = playerHand.length > 0;

  return (
    <div className="App">
      <h1>Blackjack Game</h1>
    
      <button 
        onClick={dealCards} 
        style={{ visibility: isGameInProgress ? 'hidden' : 'visible' }}
      >
        Deal
      </button>
      
      <DealerHand hand={dealerHand} />
      
      <PlayerHand hand={playerHand} />

      {isGameInProgress && showActions && <PlayerActions />}

      {winner}
    
    </div>
  );
}

export default App;
