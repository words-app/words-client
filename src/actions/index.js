import fetch from 'cross-fetch';

// Action Types

export const ADD_NOTE = 'ADD_NOTE';
// export const DELETE_NOTE = 'DELETE_NOTE';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';
export const FETCH_NOTES_REQUEST = 'FETCH_NOTES_REQUEST';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
// export const SELECT_NOTE = 'SELECT_NOTE';
// export const UPDATE_NOTE = 'UPDATE_NOTE';

// Action Creators

export function addNote(note) {
    return {
        type: ADD_NOTE,
        note
    }
}

// export function deleteNote(noteID) {
//     return {
//         type: DELETE_NOTE,
//         noteID
//     }
// }

export function fetchNotes() {
    return function(dispatch) {
        dispatch(fetchNotesRequest());

        // TODO: this should likely be extracted out to a variable
        return fetch('http://localhost:3000/notes')
            .then(
                response => response.json(),

                error => dispatch(fetchNotesFailure(error))
            )
            .then(
                json => dispatch(fetchNotesSuccess(json))
            );
    }
}

export function fetchNotesFailure(error) {
    return {
        type: FETCH_NOTES_FAILURE,
        error
    }
}

export function fetchNotesRequest() {
    return { 
        type: FETCH_NOTES_REQUEST 
    }
}

export function fetchNotesSuccess(response) {
    return {
        type: FETCH_NOTES_SUCCESS,
        response
    }
}

// export function selectNote(noteID) {
//     return {
//         type: SELECT_NOTE,
//         noteID
//     }
// }

// export function updateNote(note) {
//     return {
//         type: UPDATE_NOTE,
//         note
//     }
// }