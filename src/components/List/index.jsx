import React, { PureComponent } from 'react';

export class List extends PureComponent {
    render() {
        if (!this.props.notes) {
            return <h3>Loading...</h3>;
        }

        const notes = this.props.notes.map((note, i) => 
            <li key={i}>{ note.name }</li>
        );

        return (
            <div>
                <h2>Hello from the List component</h2>

                <ul>
                    {notes}
                </ul>
            </div>
        );
    }
}