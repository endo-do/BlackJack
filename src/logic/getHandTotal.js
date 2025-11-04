import getCardValue from "./getCardValue";

export default function getHandTotal(hand) {
  return hand.reduce((total, card) => total + getCardValue(card), 0);
}