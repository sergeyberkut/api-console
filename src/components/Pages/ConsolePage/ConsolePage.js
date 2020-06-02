import React from 'react'
import './ConsolePage.scss'
import { Logo, Button, GitHubLink } from '../../UI'
import QueryActions from '../../QueryActions'
import Header from '../../Header'


const ConsolePage = () => {
	return (
		<div className="app">

			<QueryActions />

			<Header />

			<main className="workspace">

				<div className="workspace__field-column request">
					<h3 className="workspace__column-title">Запрос:</h3>
					<textarea className="workspace__field" name="request-area" id="request-area">
						{/* {
							"action":"track.get",
"id": "12345",
"action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345", "action":"track.get",
"id": "12345",
} */}
					</textarea>
				</div>
				<div className="workspace__drag-column">
					<span className="workspace__drag">
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</span>
				</div>
				<div className="workspace__field-column response">
					<h3 className="workspace__column-title error">Ответ:</h3>
					<textarea className="workspace__field response error" name="request-area" id="request-area" readOnly>
						{/* {
							"action":"track.get",
 "id": "12345",
  "action":"track.get",
  "id": "12345", "action":"track.get",
  "id": "12345", "action":"track.get",
  "id": "12345", "action":"track.get",
  "id": "12345", "action":"track.get",
  "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345", "action":"track.get",
 "id": "12345",
} */}
					</textarea>
				</div>



			</main>

			<hr />

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

		</div>

	)
}

export default ConsolePage