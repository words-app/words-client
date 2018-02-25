import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

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
        console.log('creating', this.state.note);
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
        this.setState({ content });
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
        console.log('saving', this.state.note);
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

                <RichTextEditor value={note.content} onChange={this.handleEditorChange} />
            </article>
        );
    }
}