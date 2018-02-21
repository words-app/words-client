import { connect } from 'react-redux';

import { App } from 'components/App';

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        notes: state.notes
    }
}

export const AppContainer = connect(mapStateToProps)(App);