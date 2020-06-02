import React from 'react'
import './AuthError.scss'

const AuthError = ({ error: { id, explain } }) => {
	return (
		<div className="form__error-block">
			<div className="form__error-title">
				<span className="smile">
					<span className="smile__dot smile__dot--left"></span>
					<span className="smile__dot smile__dot--right"></span>
					<span className="smile__line"></span>
				</span>
		Вход не вышел
	</div>
			<p className="form__error-text">
				{`{id: "${id}", explain: "${explain}"}`}
			</p>
		</div>
	)
}

export default AuthError