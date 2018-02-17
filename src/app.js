import React, { PureComponent } from 'react';
import { render } from 'react-dom';

import { Editor } from './components/editor/Editor';

class App extends PureComponent {
    render() {
        return <Editor />;
    }
}

render(<App />, document.getElementById("root"));