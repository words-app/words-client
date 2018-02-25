import {
    ADD_NOTE_FAILURE,
    ADD_NOTE_REQUEST,
    ADD_NOTE_SUCCESS,
    FETCH_NOTES_FAILURE,
    FETCH_NOTES_REQUEST,
    FETCH_NOTES_SUCCESS,
} from '../actions';

const initialState = {
    isLoading: false,
    isSaving: false,
    notes: []
}

export function notesApp(state = initialState, action) {
    const newState = {...state};

    switch(action.type) {
        case ADD_NOTE_FAILURE:
            newState.isSaving = false;

            return newState;
        case ADD_NOTE_REQUEST:
            newState.isSaving = true;

            return newState;
        case ADD_NOTE_SUCCESS:
            newState.notes.concat([action.note]);

            return newState;
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
