import React from 'react'
import './Logo.scss'

const Logo = () => {
	return (
		<div className="logo">
			<span className="logo__figure logo__figure--circle"></span>
			<span className="logo__figure logo__figure--rectangle"></span>
			<span className="logo__figure logo__figure--circle"></span>
			<span className="logo__figure logo__figure--rectangle logo__figure--skew"></span>
		</div>
	)
}


export default Logo