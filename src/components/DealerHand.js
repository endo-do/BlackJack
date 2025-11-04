import getCardValue from '../logic/getCardValue';

export default function DealerHand({ hand }) {
  // Show placeholder cards when hand is empty to maintain layout
  const displayHand = hand.length === 0 ? [{value: '', suit: ''}, {value: '', suit: ''}] : hand;
  
  return (
    <div>
      <h2>Dealer</h2>
      <p>
        {displayHand.map((c, index) => (
          <span 
            key={index} 
            style={{ 
              visibility: hand.length === 0 ? 'hidden' : 'visible',
              display: 'inline-block',
              minWidth: hand.length === 0 ? '2ch' : 'auto'
            }}
          >
            {index > 0 && ' '}
            {c.value}{c.suit}{hand.length === 0 && '\u00A0'}
          </span>
        ))}
      </p>
    </div>
  );
}