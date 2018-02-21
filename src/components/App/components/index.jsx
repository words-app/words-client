import React, { PureComponent } from 'react';

import { List } from 'components/List';
import { Editor } from 'components/Editor';

export class App extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            noteID: props.match.params.noteID,
            notes: props.notes
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({ notes: newProps.notes });
    }

    renderEditor() {
        const { noteID, notes } = this.state;
        const selectedNote = notes.find(note => note._id === noteID);

        if (selectedNote) {
            return <Editor value={selectedNote.content} />;
        }
    }

    render() {
        return (
            <div>
                <List />
                { this.renderEditor() }
            </div>
        );
    }
}