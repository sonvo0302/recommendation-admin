const NS = '@Category';
const actionTypes = {
	LOAD_CATEGORIES : `${NS}/LOAD_CATEGORIES`
};

const initialState = {
	categories : []
};

const commonReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.LOAD_CATEGORIES:
			return {
				...state,
				categories : payload.categories
			};
		default:
			return state;
	}
};

export default commonReducer;
