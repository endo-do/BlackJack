import getHandTotal from "./getHandTotal";

export default function dealerDraws ({hand}) {
    let total = getHandTotal(hand)

    while (total < 17) {
        drawCard(hand)
    }
}