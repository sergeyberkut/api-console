import React, { useState } from 'react'
import './AuthPage.scss'
import { Logo, Button, GitHubLink, AuthError } from '../../UI'
import Sendsay from 'sendsay-api'
import { connect } from 'react-redux'
import { onAuthSuccess, onAuthLoading, onAuthError } from '../../../store/actions/auth'

const sendsay = new Sendsay()

const AuthPage = ({ onAuthSuccess, onAuthLoading, loading, onAuthError, error }) => {

	const [login, setLogin] = useState('')
	const [loginValidation, setLoginValidation] = useState(null)
	const [sublogin, setSublogin] = useState('')
	const [password, setPassword] = useState('')
	const [passwordValidation, setPasswordValidation] = useState(null)


	const successLoginHandler = ({ login, sublogin, password }) => {
		localStorage.setItem('login', login)
		localStorage.setItem('sublogin', sublogin)
		localStorage.setItem('password', password)
		onAuthSuccess()
	}


	const onSubmitHandler = (event, loginData) => {
		event.preventDefault()

		const { login, password } = loginData

		if (!login) {
			setLoginValidation(false)
		}
		if (!password) {
			setPasswordValidation(false)
		}

		if (login && password) {
			onAuthLoading()
			sendsay.login(loginData)
				.then(() => {
					return new Promise(resolve => {
						setTimeout(() => {
							resolve(successLoginHandler(loginData))
						}, 2000)
					})
				})
				.catch(err => onAuthError(err))
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
						className={`form__input-label ${loginValidation === false ? `error` : null}`}

					>Логин</label>
					<input type="text" name="login" id="login-input"
						className={`form__input ${loginValidation === false ? `error` : null}`}

						// placeholder="Введите логин"
						value={login}
						onChange={({ target: { value } }) => {
							if (value) {
								setLoginValidation(null)
							}
							setLogin(value)
						}}
					/>

					<div className="form__sublogin-label-wrapper">
						<label htmlFor="sublogin-input" className="form__input-label">Сублогин</label>
						<small className="form__optional-text">Опционально</small>
					</div>

					<input type="text" id="sublogin-input" className="form__input"
						//  placeholder="Введите Сублогин"
						name="sublogin"
						value={sublogin}
						onChange={({ target: { value } }) => setSublogin(value)} />

					<label htmlFor="password-input"
						className={`form__input-label ${passwordValidation === false ? `error` : null}`}
					>Пароль</label>
					<input type="password" id="password-input"
						className={`form__input ${passwordValidation === false ? `error` : null}`}
						// placeholder="Введите пароль"
						value={password}
						name="password"
						onChange={({ target: { value } }) => {
							if (value) {
								setPasswordValidation(null)
							}
							setPassword(value)
						}}
					/>
					<Button loading={loading} isDisabled={!!(passwordValidation === false || loginValidation === false)} />
				</form>
				<GitHubLink />
			</div>
		</div>

	)
}

const mapStateToProps = ({ auth: { loading, error } }) => ({ loading, error })

const mapDispatchToProps = { onAuthSuccess, onAuthLoading, onAuthError }

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)