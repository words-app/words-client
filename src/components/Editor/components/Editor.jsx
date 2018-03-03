import React, { Component } from 'react';
import RichTextEditor, { EditorValue } from 'react-rte';

import { addNote, updateNote } from 'src/actions';
import { store } from 'src/store';

export class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: props.note ? this.getInitialValue(props) : this.getEmptyNote()
        };

        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            note: newProps.note ? this.getInitialValue(newProps) : this.getEmptyNote()
        });
    }

    createNote() {
        const { note } = this.state;

        const noteToSave = {
            name: note.name,
            content: note.content.toString('markdown')
        };

        store.dispatch(addNote(noteToSave));
    }

    getEmptyNote() {
        return {
            name: "",
            content: RichTextEditor.createEmptyValue()
        }
    }

    getInitialValue(props) {
        const { note } = props;

        return {
            _id: note._id,
            name: note.name,
            content: RichTextEditor.createValueFromString(note.content, 'html')
        }
    }

    handleNameChange(event) {
        const { note } = this.state;

        note.name = event.target.value;

        this.setState({ note });
    }

    handleEditorChange(content) {
        const { note } = this.state;

        note.content = content;

        this.setState({ note });
    }

    handleSaveClick(event) {
        event.preventDefault();

        const { note } = this.state;

        // check for an existing ID to determine if the current note should be saved or created
        if (note.hasOwnProperty('_id')) {
            this.saveNote();
        } else {
            this.createNote();
        }
    }

    saveNote() {
        const { note } = this.state;

        const noteToSave = {
            _id: note._id,
            name: note.name,
            content: note.content.toString('html')
        };

        store.dispatch(updateNote(noteToSave));
    }

    render() {
        const { note } = this.state;
        const buttonText = note.hasOwnProperty("_id") ? "Save Changes" : "Create Note";

        return (
            <article>
                <header>
                    <input
                        type="text"
                        onChange={this.handleNameChange}
                        value={note.name} />

                    <button type="submit" onClick={this.handleSaveClick}>{buttonText}</button>
                </header>

                <RichTextEditor value={note.content} onChange={this.handleEditorChange} />
            </article>
        );
    }
}
