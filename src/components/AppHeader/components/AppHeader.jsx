import React, { PureComponent } from 'react';

export class AppHeader extends PureComponent {
    render() {
        return (
            <header className="app-header">
                <p className="app-header-title">words<small>.</small></p>
            </header>
        );
    }
}
