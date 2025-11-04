export default function drawCard({hand, deck}) {
    hand.push(deck[0])
    deck.slice(1)
}