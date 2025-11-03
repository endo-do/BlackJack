import getCardValue from '../logic';

export default function PlayerHand({ hand }) {
  return (
    <div>
      <h2>Player Hand:</h2>
      <p>{hand.map(c => `${c.value}${c.suit}`).join(" ")}</p>
      <p>Player Total: {hand.reduce((acc, card) => acc + getCardValue(card), 0)}</p>
    </div>
  );
}