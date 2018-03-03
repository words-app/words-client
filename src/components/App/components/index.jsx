import React, { PureComponent } from 'react';

import { AppHeader } from 'components/AppHeader';
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
        const noteID = newProps.match.params.noteID;
        const notes = newProps.notes;

        this.setState({
            noteID,
            notes
        });
    }

    renderEditor() {
        const { noteID, notes } = this.state;
        const selectedNote = notes.find(note => note._id === noteID);

        if (selectedNote) {
            return <Editor note={selectedNote} />;
        } else {
            return <Editor />;
        }
    }

    render() {
        return (
            <div>
                <AppHeader />
                <List notes={this.state.notes} />
                { this.renderEditor() }
            </div>
        );
    }
}
