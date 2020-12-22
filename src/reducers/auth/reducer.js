// import { actionTypes } from "./actions";
const NS = '@auth';

export const actionTypes = {
	LOGIN_REQUEST : `${NS}/LOGIN_REQUEST`,
	LOGIN_SUCCESS : `${NS}/LOGIN_SUCCESS`,
	LOGIN_ERROR   : `${NS}/LOGIN_ERROR`
};

const initialState = {
	error   : '',
	loading : false,
	token   : '',
	user    : ''
};

const authReducer = (state = initialState, { type, payload }) => {
	console.log(payload);
	switch (type) {
		case actionTypes.LOGIN_REQUEST:
			return {
				error   : '',
				user    : '',
				token   : '',
				loading : true
			};
		case actionTypes.LOGIN_SUCCESS:
			return {
				error   : '',
				token   : payload.token,
				user    : payload.user,
				loading : false
			};
		case actionTypes.LOGIN_ERROR:
			return {
				error   : payload,
				token   : '',
				auth    : '',
				loading : false
			};
		default:
			return state;
	}
};

export default authReducer;
