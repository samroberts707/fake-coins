const defaultState = {
    data: {
        base: 'BTC',
        amount: '0'
    }
};

export default(state = defaultState, action) => {
    switch(action.type) {
        case 'SET_PRICES':
            return action.prices;
        default:
            return state;
    }
}