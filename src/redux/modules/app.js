const APP_IS_READY = "APP_IS_READY";

export function prepareApp() {
    return async dispatch => {
        dispatch({ type: APP_IS_READY, status: true });
    };
}

const initialState = {
    appIsReady: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APP_IS_READY:
            return {
                ...state,
                appIsReady: action.status
            };

        default:
            return state;
    }
};
