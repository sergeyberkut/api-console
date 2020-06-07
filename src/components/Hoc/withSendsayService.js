import React from 'react'
import { SendsayServiceConsumer } from '../SendsayContext'

const withSendsayService = () => (Wrapped) => {

	return props => {
		return (
			<SendsayServiceConsumer>
				{
					(sendsayService) => {
						return (
							<Wrapped
								{...props}
								sendsayService={sendsayService}
							>
							</Wrapped>
						)
					}
				}
			</SendsayServiceConsumer>
		)
	}
}

export default withSendsayService