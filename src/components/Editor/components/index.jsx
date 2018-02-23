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
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            note: newProps.note || this.getEmptyNote(),
            value: this.getInitialValue(newProps)
        });
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

    render() {
        const { note } = this.state;

        return (
            <article>
                <header>
                    <input 
                        type="text" 
                        value={ note.name }
                        onChange={this.handleNameChange} />
                </header>

                <RichTextEditor value={this.state.value} onChange={this.handleEditorChange} />
            </article>
        );
    }
}