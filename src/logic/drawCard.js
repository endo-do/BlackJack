import checkAce from "./checkAce"

export default function drawCard({hand, deck}) {
    const updatedHand = [...hand, deck[0]];
    const updatedDeck = deck.slice(1);
    const handWithAceChecked = checkAce({hand: updatedHand});
    return {updatedHand: handWithAceChecked, updatedDeck: updatedDeck}
}

