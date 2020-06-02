import React from 'react'
import './GitHubLink.scss'

const GitHubLink = () => {
	return (
		<div className="github-link-block">
			<a className="github-link-block__link" href=" https://github.com/sergeyberkut" target="_blank">@sergeyberkut
			<span className="github-link-block__pop-up">Разработчик этого шедевра
				<span className="triangle"></span>
				</span>
			</a>
		</div>
	)
}


export default GitHubLink