import React from 'react';
import ContentLoader from 'react-content-loader';

function Card(props) {
	return !props.loading ? (
		<div className="card">
			<img width={133} height={112} src={'/img/sneakers/' + props.img} alt="sneakers" />
			<p>{props.name}</p>
			<div className="card-wrap">
				<div>
					<span>Цена: </span>
					<p>{props.price} руб.</p>
				</div>
				<img
					className="btnImg"
					src={!props.check ? '/img/plus.svg' : '/img/get.svg'}
					alt="plus"
					onClick={(e) => props.handleClick(e, props.id)}
				/>
			</div>
		</div>
	) : (
		<ContentLoader
			speed={2}
			width={210}
			height={260}
			viewBox="0 0 210 260"
			backgroundColor="#e0e0e0"
			foregroundColor="#b5b0b0"
			{...props}>
			<rect x="0" y="0" rx="0" ry="0" width="150" height="91" />
			<rect x="0" y="113" rx="0" ry="0" width="150" height="15" />
			<rect x="0" y="132" rx="0" ry="0" width="93" height="15" />
			<rect x="0" y="169" rx="0" ry="0" width="80" height="24" />
			<rect x="118" y="161" rx="0" ry="0" width="32" height="32" />
		</ContentLoader>
	);
}

export default Card;
