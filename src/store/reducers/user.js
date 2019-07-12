const defaultState = {
    bank: 100,
    positions: [
        // This is the correct format for this state
        // {
        //     id: 1,
        //     base: "BTC",
        //     quantity: 2,
        //     boughtFor: 11777.50,
        // },
    ]
};


export default(state = defaultState, action) => {
    var bank = state.bank;
    switch(action.type) {
        case 'ADD_POS':
            return Object.assign({}, state, {
                positions: [
                    ...state.positions,
                    {
                        base: action.base,
                        quantity: action.quantity,
                        boughtFor: action.boughtFor
                    }
                ]
            })
        case 'RED_BANK': 
            return { 
                bank: bank - action.amount,
                positions: [...state.positions]
            };
        default:
            return state;
    }
}