const defaultState = {
    data: {
        base: 'ETH',
        currency: 'USD',
        amount: '0',
    }
};


export default(state = defaultState, action) => {
    switch(action.type) {
        case 'SET_ETH':
            return action.eth;
        default:
            return state;
    }
}