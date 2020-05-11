const INITIAL_STATE = {
    birthLocal: "",
    deathLocal: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SHOW_BIRTH_AND_DEATH_PLACES':
            console.log('SHOW_BIRTH_AND_DEATH_PLACES');
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