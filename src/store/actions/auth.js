import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_LOADING, AUTH_ERROR, ON_PAGE_LOADED } from './actionTypes'
import { getCookie, setCookie, deleteCookie } from '../../utils'

const onAuthSuccess = loginData => ({ type: AUTH_SUCCESS, payload: loginData })
const onAuthError = error => ({ type: AUTH_ERROR, payload: error })
const onAuthLoading = () => ({ type: AUTH_LOADING })
const onAuthLogout = () => {
	deleteCookie('sendsay_session', 'login', 'sublogin')
	return { type: AUTH_LOGOUT }
}
const onAuthLogin = (sendsayService, dispatch) => loginData => {
	sendsayService.login(loginData)
		.then(() => {
			setCookie('login', loginData.login)
			setCookie('sublogin', loginData.sublogin)
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(dispatch(onAuthSuccess(loginData)))
				}, 700)
			})
		})
		.catch(err => dispatch(onAuthError(err)))
}

const onPageLoaded = () => ({ type: ON_PAGE_LOADED })


const autoLogin = (sendsayService, dispatch) => () => {

	if (getCookie('sendsay_session')) {
		sendsayService.setSessionFromCookie()
		const loginData = {
			login: getCookie('login'),
			sublogin: getCookie('sublogin')
		}
		dispatch(onAuthSuccess(loginData))
	} else dispatch(onPageLoaded())

}

export {
	onAuthSuccess,
	onAuthLogout,
	autoLogin,
	onAuthLoading,
	onAuthLogin,
	onAuthError
}




