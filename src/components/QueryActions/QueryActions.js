import React from 'react'
import './QueryActions.scss'

const QueryActions = () => {
	return (
		<ul className="query-actions">
			<li className="query-actions__item">Выполнить</li>
			<li className="query-actions__item copy">Скопировать</li>
			<hr />
			<li className="query-actions__item delete">Удалить</li>
		</ul>
	)
}


export default QueryActions