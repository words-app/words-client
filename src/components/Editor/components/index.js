import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

export class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value ? props.value : RichTextEditor.createEmptyValue()
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <RichTextEditor value={this.state.value} onChange={this.onChange} />
        );
    }
}