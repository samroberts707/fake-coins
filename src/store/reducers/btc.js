const defaultState = {
    data: {
        base: 'BTC',
        currency: 'USD',
        amount: '0',
    }
};

export default(state = defaultState, action) => {
    switch(action.type) {
        case 'SET_BTC':
            return action.btc;
        default:
            return state;
    }
}