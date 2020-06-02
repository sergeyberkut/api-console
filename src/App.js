import React, { useEffect } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { AuthPage, ConsolePage } from './components/Pages'
import Layout from './components/Layout'
import Spinner from './components/Spinner'
import { connect } from 'react-redux'
import { autoLogin } from './store/actions/auth'
import './App.scss'

const App = ({ isAuthenticated, autoLogin, dataLoader }) => {

	useEffect(() => {
		autoLogin()
	}, [])

	if (dataLoader) return <Spinner />

	let routes = (
		<Switch>
			<Route path='/' exact component={AuthPage} />
			<Redirect to="/" />
		</Switch>
	)

	if (isAuthenticated) {
		routes = (
			<Switch>
				<Route path='/console' component={ConsolePage} exact />
				<Redirect to="/console" />
			</Switch>
		)

	}

	return (
		<Layout>
			{routes}
		</Layout>
	)
}

const mapStateToProps = ({ auth: { isAuthenticated, dataLoader } }) => ({ isAuthenticated, dataLoader })

const mapDispatchToProps = { autoLogin }


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

