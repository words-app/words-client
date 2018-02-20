import React, { PureComponent } from 'react';

export class List extends PureComponent {
    render() {
        const notes = props.notes.map((note, i) => 
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