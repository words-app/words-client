import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

export class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value ? RichTextEditor.createValueFromString(props.value, 'html') : RichTextEditor.createEmptyValue()
        };

        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            value: RichTextEditor.createValueFromString(newProps.value, 'html')
        });
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