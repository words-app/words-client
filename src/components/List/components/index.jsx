import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class List extends PureComponent {
    render() {
        if (!this.props.notes) {
            return <h3>Loading...</h3>;
        }

        const notes = this.props.notes.map((note, i) => 
            <li key={i}>
                <Link to={note._id}>
                    { note.name }
                </Link>
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