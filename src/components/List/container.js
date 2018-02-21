import { connect } from 'react-redux';
import { List } from './index';

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
}

export const ListContainer = connect(mapStateToProps)(List);