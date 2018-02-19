import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../actions';

function notes(state = [], action) {
    switch(action.type) {
        case ADD_NOTE: 
            return [
                ...state,
                { note }
            ]
    }
}