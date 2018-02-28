import {
    ADD_NOTE_FAILURE,
    ADD_NOTE_REQUEST,
    ADD_NOTE_SUCCESS,
    DELETE_NOTE_FAILURE,
    DELETE_NOTE_REQUEST,
    DELETE_NOTE_SUCCESS,
    FETCH_NOTES_FAILURE,
    FETCH_NOTES_REQUEST,
    FETCH_NOTES_SUCCESS,
    UPDATE_NOTE_FAILURE,
    UPDATE_NOTE_REQUEST,
    UPDATE_NOTE_SUCCESS
} from '../actions';

import { getIndexOfNoteByID } from 'src/utils';

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
            newState.notes = newState.notes.concat([action.note]);
            return newState;

        case DELETE_NOTE_FAILURE:
            newState.isSaving = false;
            return newState;
        case DELETE_NOTE_REQUEST:
            newState.isSaving = true;
            return newState;
        case DELETE_NOTE_SUCCESS:
            const { noteId } = action.response;
            newState.notes = newState.notes.filter(note => note._id !== noteId)
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

        case UPDATE_NOTE_FAILURE:
            newState.isSaving = false;
            return newState;
        case UPDATE_NOTE_REQUEST:
            newState.isSaving = true;
            return newState;
        case UPDATE_NOTE_SUCCESS:
            const updatedNoteIndex = getIndexOfNoteByID(newState.notes, action.note);
            newState.notes.splice(updatedNoteIndex, 1, action.note);
            return newState;

        default:
            return newState;
    }
}
