import Home from './Home';
import commonActions from '../../reducers/common/actions';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
	categories : store.common.categories
});

const mapDispatchToProps = (dispatch) => ({
	getCategories : () => dispatch(commonActions.getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
