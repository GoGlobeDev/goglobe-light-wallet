const initState = {
    GOGContractAddr: '0x8c191f956a287096bb306c422536cd1151fc4a3c'
}

export default function (state = initState, action) {
    switch (action.type) {
        case 'CONTRACTADDR':
            return {
                ...state,
                GOGContractAddr: action.GOGContractAddr
            }
        default:
            return state
    }
}