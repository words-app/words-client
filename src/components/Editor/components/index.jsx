import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

export class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: props.note || this.getEmptyNote(),
            value: this.getInitialValue(props),
        };

        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            note: newProps.note || this.getEmptyNote(),
            value: this.getInitialValue(newProps)
        });
    }

    createNote(note) {
        console.log('creating', note);
    }

    getEmptyNote() {
        return {
            name: "",
            content: ""
        }
    }

    getInitialValue(props) {
        return props.note ? RichTextEditor.createValueFromString(props.note.content, 'html') : RichTextEditor.createEmptyValue();
    }

    handleNameChange(event) {
        const { note } = this.state;

        note.name = event.target.value;

        this.setState({ note });
    }

    handleEditorChange(value) {
        this.setState({ value });
    }

    handleSaveClick(event) {
        event.preventDefault();

        const { note } = this.state;

        // check for an existing ID to determine if the current note should be saved or created
        if (note.hasOwnProperty('_id')) {
            this.saveNote(note);
        } else {
            this.createNote(note);
        }
    }

    saveNote(note) {
        console.log('saving', note);
    }

    render() {
        const { note } = this.state;

        return (
            <article>
                <header>
                    <input 
                        type="text" 
                        value={ note.name }
                        onChange={this.handleNameChange} />

                    <button type="submit" onClick={this.handleSaveClick}>Save Note</button>
                </header>

                <RichTextEditor value={this.state.value} onChange={this.handleEditorChange} />
            </article>
        );
    }
}