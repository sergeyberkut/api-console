import React, { useRef } from 'react'
import './ConsolePage.scss'

import Dropdown from '../../components/Dropdown'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import withSendsayService from '../../components/Hoc'


import { connect } from 'react-redux'
import { compose } from 'redux'


const ConsolePage = ({ sendsayService }) => {

	document.cookie = `sendsay_session=${sendsayService.session}; path=/`

	const app = useRef(null)

	return (

		<div className="app" ref={app}>

			<Dropdown />

			<Header appRef={app} />

			<main className="workspace">

				<div className="workspace__field-column request">
					<h3 className="workspace__column-title">Запрос:</h3>
					<textarea className="workspace__field" name="request-area" id="request-area">

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

					</textarea>
				</div>
			</main>
			<hr />
			<Footer />
		</div>

	)
}

// const mapStateToProps = ({ }) => ({})

// const mapDispatchToProps = ({ }) => ({})

export default compose(
	withSendsayService(),
	connect(null, null)
)(ConsolePage)