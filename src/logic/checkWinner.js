import dealerDrawsNext from "./dealerDraws"

export default function checkWinner ({playerhand, dealerhand}) {
    const playertotal = getHandTotal(playerhand)
    const dealertotal = getHandTotal(dealerhand)

    if (dealertotal > 21) {
        return 'win'
    }

    if (playertotal > 21) {
        return 'loose'
    }
    
    

}