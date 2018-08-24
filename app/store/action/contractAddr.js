let actions = {
    contractAddr(option) {
        return function (dispatch, getState) {
            dispatch({
                type: 'CONTRACTADDR',
                GOGContractAddr: option.GOGContractAddr
            })
        }
    }
}

export default actions