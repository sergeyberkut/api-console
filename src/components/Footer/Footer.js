import React from 'react'
import './Footer.scss'
import { Button, GitHubLink } from '../UI'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__body">
				<div className="footer__submit-btn">
					<Button />

				</div>
				<div className="footer__github-link">
					<GitHubLink />

				</div>
				<div className="footer__format-btn-wrapper">
					<div className="footer__format-btn">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.8">
								<path d="M21 10H7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M11 6H3" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M12 14H7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M7 18H3" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</g>
						</svg>

						<p className="footer__format-btn-text">Форматировать</p>
					</div>
				</div>

			</div>

		</footer>
	)
}


export default Footer