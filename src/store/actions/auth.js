import Sendsay from 'sendsay-api'
import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_LOADING, AUTH_ERROR, ON_PAGE_LOADED } from './actionTypes'

const sendsay = new Sendsay()

const onAuthSuccess = () => ({ type: AUTH_SUCCESS })
const onAuthLogout = () => ({ type: AUTH_LOGOUT })
const onAuthLoading = () => ({ type: AUTH_LOADING })
const onPageLoaded = () => ({ type: ON_PAGE_LOADED })

const autoLogin = () => {

	return dispatch => {
		const login = localStorage.getItem('login')
		const sublogin = localStorage.getItem('sublogin')
		const password = localStorage.getItem('password')

		if (login || password || sublogin) {
			sendsay.login({ login, sublogin, password })
				.then(() => dispatch(onAuthSuccess()))
				.catch(err => onAuthError(err))
			// .finally(() => )
		} else {
			dispatch(onPageLoaded())
		}
	}
}

const onAuthError = error => ({ type: AUTH_ERROR, payload: error })


// Когда сабмититься форма - на кнопке появляется лоадер

export {
	onAuthSuccess,
	onAuthLogout,
	autoLogin,
	onAuthLoading,
	onAuthError
}