import getCardValue from '../logic/getCardValue';
import getHandTotal from '../logic/getHandTotal';

export default function PlayerHand({ hand }) {
  return (
    <div>
      <h2>Player Hand:</h2>
      <p>{hand.map(c => `${c.value}${c.suit}`).join(" ")}</p>
      <p>Player Total: {getHandTotal(hand)}</p>
    </div>
  );
}