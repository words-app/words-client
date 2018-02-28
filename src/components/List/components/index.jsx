import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { deleteNote } from 'src/actions';
import { store } from 'src/store';

export class List extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            notes: this.props.notes
        }

        this.deleteNote = this.deleteNote.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({ notes: newProps.notes });
    }

    deleteNote(note) {
        store.dispatch(deleteNote(note))
    }

    render() {
        if (!this.props.notes) {
            return <h3>Loading...</h3>;
        }

        const notes = this.props.notes.map((note, i) =>
            <li key={i}>
                <Link to={note._id}>
                    { note.name }
                </Link>

                <button onClick={this.deleteNote.bind(this, note)}>✘</button>
            </li>
        );

        return (
            <div>
                <ul>
                    {notes}
                </ul>
            </div>
        );
    }
}
