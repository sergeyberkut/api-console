import React from 'react'

const {
	Provider: SendsayServiceProvider,
	Consumer: SendsayServiceConsumer
} = React.createContext()

export {
	SendsayServiceProvider,
	SendsayServiceConsumer
}