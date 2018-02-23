import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

export class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.getInitialValue(props)
        };

        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            value: this.getInitialValue(newProps)
        });
    }

    getInitialValue(props) {
        return props.value ? RichTextEditor.createValueFromString(props.value, 'html') : RichTextEditor.createEmptyValue();
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