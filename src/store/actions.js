export const setBTCPrice = (btc) => ({
    type: 'SET_BTC',
    btc
})

export const getBTCPrice = () => {
    return dispatch => {
        fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot')
            .then(function(response) { return response.json() })
            .then(json => dispatch(setBTCPrice(json)));
    }
}

export const setETHPrice = (eth) => ({
    type: 'SET_ETH',
    eth
})

export const getETHPrice = () => {
    return dispatch => {
        fetch('https://api.coinbase.com/v2/prices/ETH-USD/spot')
            .then(function(response) { return response.json() })
            .then(json => dispatch(setETHPrice(json)));
    }
}