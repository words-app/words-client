// Action Types

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';
export const FETCH_NOTES_REQUEST = 'FETCH_NOTES_REQUEST';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const SELECT_NOTE = 'SELECT_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

// Action Creators

export function addNote(note) {
    return {
        type: ADD_NOTE,
        note
    }
}

export function deleteNote(noteID) {
    return {
        type: DELETE_NOTE,
        noteID
    }
}

export function selectNote(noteID) {
    return {
        type: SELECT_NOTE,
        noteID
    }
}

export function updateNote(note) {
    return {
        type: UPDATE_NOTE,
        note
    }
}