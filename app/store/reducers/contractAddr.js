const initState = {
    GOGContractAddr: '0x41c11ee289fdaf498500314ab719a64673f72a40'
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