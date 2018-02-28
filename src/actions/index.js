import fetch from 'cross-fetch';

// Should this be exported out to an env var?
const APIBase = 'http://localhost:3000/notes';

// Action Types
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';
export const ADD_NOTE_REQUEST = 'ADD_NOTE_REQUEST';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';

export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';
export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';

export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';
export const FETCH_NOTES_REQUEST = 'FETCH_NOTES_REQUEST';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';

export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';
export const UPDATE_NOTE_REQUEST = 'UPDATE_NOTE_REQUEST';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';

// Action Creators
export function addNoteFailure(error) {
    return {
        error,
        type: ADD_NOTE_FAILURE,
    }
}
export function addNoteRequest(note) {
    return {
        note,
        type: ADD_NOTE_REQUEST,
    }
}
export function addNoteSuccess(note) {
    return {
        note,
        type: ADD_NOTE_SUCCESS,
    }
}
export function addNote(note) {
    return function(dispatch) {
        dispatch(addNoteRequest(note));

        return fetch(APIBase, {
            body: JSON.stringify(note),
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
        })
        .then(
            response => response.json(),

            error => dispatch(addNoteFailure(error))
        )
        .then(
            json => dispatch(addNoteSuccess(json))
        );
    }
}

export function deleteNoteFailure(error) {
    return {
        error,
        type: DELETE_NOTE_FAILURE,
    }
}
export function deleteNoteRequest(note) {
    return {
        note,
        type: DELETE_NOTE_REQUEST,
    }
}
export function deleteNoteSuccess(response) {
    return {
        response,
        type: DELETE_NOTE_SUCCESS,
    }
}
export function deleteNote(note) {
    return function(dispatch) {
        dispatch(deleteNoteRequest(note));

        return fetch(`${APIBase}/${note._id}`, {
            body: JSON.stringify(note),
            headers: {
                "Content-Type": "application/json"
            },
            method: 'DELETE',
        })
        .then(
            response => response.json(),

            error => dispatch(deleteNoteFailure(error))
        )
        .then(
            json => dispatch(deleteNoteSuccess(json))
        );
    }
}


export function fetchNotesFailure(error) {
    return {
        error,
        type: FETCH_NOTES_FAILURE,
    }
}
export function fetchNotesRequest() {
    return {
        type: FETCH_NOTES_REQUEST
    }
}
export function fetchNotesSuccess(response) {
    return {
        response,
        type: FETCH_NOTES_SUCCESS,
    }
}
export function fetchNotes() {
    return function(dispatch) {
        dispatch(fetchNotesRequest());

        return fetch(APIBase)
            .then(
                response => response.json(),

                error => dispatch(fetchNotesFailure(error))
            )
            .then(
                json => dispatch(fetchNotesSuccess(json))
            );
    }
}

export function updateNoteFailure(error) {
    return {
        error,
        type: UPDATE_NOTE_FAILURE,
    }
}
export function updateNoteRequest(note) {
    return {
        note,
        type: UPDATE_NOTE_REQUEST,
    }
}
export function updateNoteSuccess(note) {
    return {
        note,
        type: UPDATE_NOTE_SUCCESS,
    }
}
export function updateNote(note) {
    return function(dispatch) {

        dispatch(updateNoteRequest(note));

        return fetch(`${APIBase}/${note._id}`, {
            body: JSON.stringify(note),
            headers: {
                "Content-Type": "application/json"
            },
            method: 'PUT',
        })
        .then(
            response => response.json(),

            error => dispatch(updateNoteFailure(error))
        )
        .then(
            json => dispatch(updateNoteSuccess(json))
        );
    }
}
