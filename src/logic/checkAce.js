export default function checkAce({hand}) {    
    const index = hand.findIndex(card => card.value === "A");

    if ((index !== -1) && (getHandTotal(hand) > 21)) {
        const ace = hand[index];
        hand.splice(index, 1);
        hand.push({ suit: ace.suit, value: 1 });
    }

    return hand
}