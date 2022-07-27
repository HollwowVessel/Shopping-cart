import React from 'react';
import { Link } from 'react-router-dom';
export default function Info(props) {
	return (
		<div className="cartEmpty">
			<img src={'/img/' + (!props.order ? 'bucket.jpg ' : 'order.jpg')} alt="Order" />
			<h2>{!props.order ? 'Корзина пустая' : 'Заказ оформлен!'}</h2>
			<p>
				{!props.order
					? 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
					: 'Ваш заказ #18 скоро будет передан курьерской доставке'}
			</p>
			<Link to="/">
				<button className="emptyCart" onClick={props.getBack}>
					Вернуться назад
				</button>
			</Link>
		</div>
	);
}
