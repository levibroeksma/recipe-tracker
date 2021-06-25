function updateActions(state, payload) {
    return {
        ...state,
        yourDetails: {
            ...state.yourDetails,
            ...payload
        }
    }
}

export default updateActions;