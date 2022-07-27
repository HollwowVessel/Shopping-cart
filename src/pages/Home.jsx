import React from 'react';

export default function Home(props) {
	console.log(props);
	return (
		<div className="content">
			<div className="content-desc">
				<h1>{props.searchValue ? 'Поиск по запросу: ' + props.searchValue : 'Все кроссовки'}</h1>
				<div>
					<label></label>
					<input
						placeholder="Поиск......."
						maxLength={40}
						onChange={(e) => props.handleSearch(e)}
						value={props.searchValue}
					/>
				</div>
			</div>
			<div className="cards">{props.cardElements}</div>
		</div>
	);
}
