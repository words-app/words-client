export function getIndexOfNoteByID(notes, note) {
    return notes.findIndex(item => item._id === note._id);
}