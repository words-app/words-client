import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class AppHeader extends PureComponent {
    render() {
        return (
            <header className="app-header">
                <Link to="/" className="app-header-title">words<small>.</small></Link>
            </header>
        );
    }
}
