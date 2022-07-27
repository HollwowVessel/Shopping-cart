import React from 'react';
import CartItem from './CartItem';
import Info from '../Info';
export default function Cart(props) {
	console.log(props);

	const checkedSneakersEl = props.item.map((sneaker) => (
		<CartItem
			name={sneaker.name}
			price={sneaker.price}
			img={sneaker.img}
			id={sneaker.id}
			handleClick={props.removeCheck}
		/>
	));

	return (
		<div className="overlay" onClick={(e) => props.closeCart(e)}>
			<div className="cart">
				<h2>Корзина</h2>
				<img className="removeE" src="/img/remove.svg" alt="Remove" />
				<div className="cartItems">{checkedSneakersEl}</div>
				{checkedSneakersEl.length ? (
					<ul className="cartTotalBlock">
						<li>
							<span>Итого: </span>
							<div></div>
							<b> {props.price} руб. </b>
						</li>
						<li>
							<span>Налог 5%: </span>
							<div></div>
							<b> {Math.round(props.price * 5) / 100} руб.</b>
						</li>
						<button onClick={props.handleOrder} style={{ cursor: 'pointer' }}>
							Оформить заказ
						</button>
					</ul>
				) : (
					<Info state={props.state} order={props.order} getBack={props.getBack} />
				)}
			</div>
		</div>
	);
}
