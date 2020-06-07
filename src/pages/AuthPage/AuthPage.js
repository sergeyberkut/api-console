import React, { useState } from 'react'
import './AuthPage.scss'

import { Logo, Button, GitHubLink } from '../../components/UI'
import AuthError from './AuthError'
import withSendsayService from '../../components/Hoc'

import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import { onAuthLoading, onAuthLogin } from '../../store/actions/auth'

const AuthPage = ({ onAuthLoading, onAuthLogin, loading, error }) => {

	const [login, setLogin] = useState('')
	const [sublogin, setSublogin] = useState('')
	const [password, setPassword] = useState('')

	const [loginValid, setLoginValid] = useState(null)
	const [passwordValid, setPasswordValid] = useState(null)

	const cyrillicRegexp = /[а-я]/i

	const onSubmitHandler = (event, loginData) => {
		event.preventDefault()

		const { login, password } = loginData

		if (!login) setLoginValid(false)
		if (!password) setPasswordValid(false)

		if (login && password) {
			onAuthLoading()
			onAuthLogin(loginData)
		}
	}

	return (
		<div className="wrapper">
			<div className="form__wrapper">
				<div className="form__logo-block">
					<Logo />
				</div>
				<form className="form__body" onSubmit={event => onSubmitHandler(event, { login, sublogin, password })}>
					<h2 className="form__title">API-консолька</h2>
					{error ? <AuthError error={error} /> : null}
					<label htmlFor="login-input"
						className={`form__input-label ${loginValid === false ? `error` : null}`}

					>Логин</label>
					<div className="form__input-wrapper">
						<input type="text" name="login" id="login-input"
							className={`form__input ${loginValid === false ? `error` : null}`}

							value={login}
							onChange={({ target: { value } }) => {

								if (cyrillicRegexp.test(value)) return
								else if (value) setLoginValid(null)

								setLogin(value)
							}}
						/>
					</div>

					<div className="form__sublogin-label-wrapper">
						<label htmlFor="sublogin-input" className="form__input-label">Сублогин</label>
						<small className="form__optional-text">Опционально</small>
					</div>
					<div className="form__input-wrapper">
						<input type="text" id="sublogin-input" className="form__input"
							name="sublogin"
							value={sublogin}
							onChange={({ target: { value } }) => setSublogin(value)} />
					</div>


					<label htmlFor="password-input"
						className={`form__input-label ${passwordValid === false ? `error` : null}`}
					>Пароль</label>
					<div className="form__input-wrapper">
						<input type="password" id="password-input"
							className={`form__input ${passwordValid === false ? `error` : null}`}
							value={password}
							name="password"
							onChange={({ target: { value } }) => {

								if (cyrillicRegexp.test(value)) return
								else {
									setPasswordValid(null)
									setPassword(value)
								}

							}}
						/>
					</div>

					<Button loading={loading} isDisabled={!!(passwordValid === false || loginValid === false)} />
				</form>
				<GitHubLink />
			</div>
		</div>

	)
}

const mapStateToProps = ({ auth: { loading, error } }) => ({ loading, error })

const mapDispatchToProps = (dispatch, { sendsayService }) => {
	return {
		onAuthLogin: onAuthLogin(sendsayService, dispatch),
		...bindActionCreators({ onAuthLoading }, dispatch)
	}
}

export default compose(
	withSendsayService(),
	connect(mapStateToProps, mapDispatchToProps)
)(AuthPage)