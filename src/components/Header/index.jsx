import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(props) {
	return (
		<header>
			<div className="headerLeft">
				<Link to="/">
					<img width={40} height={40} src="/img/logo.png" alt="logo" />
				</Link>
				<Link to="/">
					<div className="headerInfo">
						<h3>React Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</Link>
			</div>
			<ul className="headerRight">
				<li>
					<img
						width={18}
						height={18}
						src="/img/cart.svg"
						alt="cart"
						onClick={props.handleClick}
						style={{ cursor: 'pointer' }}
					/>
					<span>{props.price} руб.</span>
				</li>
				<Link to="/user">
					<li>
						{props.user ? <span>Здравствуйте {props.user}!</span> : undefined}
						<img
							width={18}
							height={18}
							src="/img/user.svg"
							alt="user"
							style={{ cursor: 'pointer' }}
						/>
					</li>
				</Link>
			</ul>
		</header>
	);
}
