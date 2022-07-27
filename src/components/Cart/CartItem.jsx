import React from 'react';

export default function Cartitem(props) {
	return (
		<div className="cartItem">
			<div
				className="cartItemImg"
				style={{ backgroundImage: 'url(/img/sneakers/' + props.img }}></div>
			<div>
				<p>{props.name}</p>
				<b>{props.price}</b>
			</div>
			<img
				className="removeBtn"
				src="/img/remove.svg"
				alt="Remove"
				onClick={(e) => props.handleClick(e, props.id)}
			/>
		</div>
	);
}
