import Hit from './actions/Hit.js'
import Stand from './actions/Stand.js'
import Double from './actions/Double.js'
import Split from './actions/Split.js'
import Surrender from './actions/Surrender.js'

export default function PlayerActions ({}) {
    return (
        <div>
            <Hit />
            <Stand />
            <Double />
            <Split />
            <Surrender />
        </div>
    )
}