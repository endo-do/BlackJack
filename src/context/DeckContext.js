import { createContext, useContext, useState } from "react";

const DeckContext = createContext();

export function DeckProvider({ children }) {
  const [deck, setDeck] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(true);

  return (
    <DeckContext.Provider
      value={{
        deck,
        setDeck,
        dealerHand,
        setDealerHand,
        playerHand,
        setPlayerHand,
        playerTurn,
        setPlayerTurn
      }}
    >
      {children}
    </DeckContext.Provider>
  );
}

export function useDeck() {
  return useContext(DeckContext);
}

export { DeckContext };