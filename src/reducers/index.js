import { FETCH_NOTES_FAILURE, FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS } from '../actions';

const initialState = {
    isLoading: false,
    notes: []
}

export function notesApp(state = initialState, action) {
    const newState = {...state};

    switch(action.type) {
        case FETCH_NOTES_FAILURE:
            newState.isLoading = false;

            return newState;
        case FETCH_NOTES_REQUEST:
            newState.isLoading = true;

            return newState;
        case FETCH_NOTES_SUCCESS:
            newState.isLoading = false;
            newState.notes = action.response;

            return newState;
        default:
            return newState;
    }
}
