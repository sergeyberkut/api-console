import React from 'react'
import './Dropdown.scss'

const Dropdown = () => {
	return (
		<ul className="dropdown">
			<li className="dropdown__item">Выполнить</li>
			<li className="dropdown__item copy">Скопировать</li>
			<hr />
			<li className="dropdown__item delete">Удалить</li>
		</ul>
	)
}

export default Dropdown