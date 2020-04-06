const INITIAL_STATE = {
    birthLocal: "",
    deathLocal: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SHOW_PLACES':
            console.log('SHOW_PLACES');
            console.log(action);
            const newState = {
                ...state,
                birthLocal: action.payload.birthLocal,
                deathLocal: action.payload.deathLocal,
            };
            return newState;
        default:
            return state
    }
}