import React from 'react'
import './Button.scss'
import Spinner from './Spinner'

const Button = ({ loading, isDisabled }) => {
	return (
		<div className="form__button-block">
			<button className="btn" disabled={isDisabled} >
				{
					loading
						? <Spinner />
						: `Войти`
				}

			</button>
		</div>
	)
}


export default Button