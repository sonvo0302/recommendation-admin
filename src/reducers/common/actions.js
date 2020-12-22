import { categoryApi } from '../../services';

const NS = '@Category';

export const actionTypes = {
	LOAD_CATEGORIES : `${NS}/LOAD_CATEGORIES`
};

const action = (type, payload) => ({ type, payload });

const actions = {
	getCategories : () => {
		return (dispatch) =>
			categoryApi.getCategories().then((res) => dispatch(action(actionTypes.LOAD_CATEGORIES, res)));
	}
};

export default actions;
