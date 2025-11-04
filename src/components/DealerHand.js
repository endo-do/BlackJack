import getCardValue from '../logic/getCardValue';

export default function DealerHand({ hand }) {
  return (
    <div>
      <h2>Dealer Hand:</h2>
      <p>{hand.map(c => `${c.value}${c.suit}`).join(" ")}</p>
      <p>Dealer Total: {hand.reduce((acc, card) => acc + getCardValue(card), 0)}</p>
    </div>
  );
}