export const setPrices = (prices) => ({
    type: 'SET_PRICES',
    prices
})

export const startSetPrices = () => {
    return dispatch => {
        fetch('https://api.coinbase.com/v2/prices/ETH-USD/buy')
            .then(function(response) { return response.json() })
            .then(json => dispatch(setPrices(json)));
    }
}