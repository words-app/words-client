import fetch from 'cross-fetch';

// Should this be exported out to an env var?
const APIBase = 'http://localhost:3000/notes';

// Action Types

export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';
export const ADD_NOTE_REQUEST = 'ADD_NOTE_REQUEST';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';

// export const DELETE_NOTE = 'DELETE_NOTE';

export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';
export const FETCH_NOTES_REQUEST = 'FETCH_NOTES_REQUEST';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';

// export const SELECT_NOTE = 'SELECT_NOTE';

// export const UPDATE_NOTE = 'UPDATE_NOTE';

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
            method: 'POST',
            body: JSON.stringify(note)
        })
        .then(
            response => response,json(),

            error => dispatch(addNoteFailure(error))
        )
        .then(
            json => dispatch(addNoteSuccess(json))
        );
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