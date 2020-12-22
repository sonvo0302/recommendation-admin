import Category from './Category';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
	categories : store.common.categories
});

export default connect(mapStateToProps)(Category);
