import { AUTH_LOGOUT, AUTH_SUCCESS, AUTH_LOADING, AUTH_ERROR, ON_PAGE_LOADED } from '../actions/actionTypes'


const initialState = {
	isAuthenticated: false,
	loading: null,
	error: null,
	dataLoader: true,
}

export default function authReducer(state = initialState, { type, payload }) {
	switch (type) {
		case AUTH_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				dataLoader: false,
			}
		case AUTH_LOGOUT:
			return {
				...state,
				isAuthenticated: false
			}
		case AUTH_LOADING:
			return {
				...state,
				loading: true
			}
		case AUTH_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			}
		case ON_PAGE_LOADED:
			return {
				...state,
				dataLoader: false
			}
		default:
			return state
	}
}