import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './components/Cart';
import sneakers from './Data';
import User from './pages/User';
import { nanoid } from 'nanoid';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [sneakerObjects, setSneakers] = React.useState([]);
	const [cartState, setCart] = React.useState(false);
	const [generalPrice, setPrice] = React.useState(0);
	const [checkedSneakers, setChecked] = React.useState([]);
	const [searchValue, setSearch] = React.useState('');
	const [userInfo, setUserInfo] = React.useState('');
	const [order, setOrder] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setSneakers(sneakers.map((sneaker) => ({ ...sneaker, id: nanoid() })));
			setIsLoading(false);
		}, 200);
	}, []);
	function cardClick(e, id) {
		setSneakers((prevSneakers) =>
			prevSneakers.map((sneaker) =>
				sneaker.id === id ? { ...sneaker, check: !sneaker.check } : sneaker,
			),
		);
	}
	function getStateOfCart(e, order = '') {
		if (e.target.className === 'emptyCart') {
			setCart((prevState) => !prevState); // Why don't you work?
		}
		if (e.target.className === 'overlay') setCart((prevState) => !prevState);
		if (e.target.alt === 'cart') setCart((prevState) => !prevState);
		if (e.target.className === 'removeE') setCart((prevState) => !prevState);
	}
	function handleOrder() {
		setOrder(true);
		setChecked([]);
		setSneakers((prevSneakers) => prevSneakers.map((sneaker) => ({ ...sneaker, check: false })));
	}
	function getBack() {
		setOrder(false);
	}
	function handleSearch(e) {
		setSearch(e.target.value);
	}
	function handleInfo(e, user, pass) {
		if (!user || !pass) {
			e.preventDefault();
			alert('Неверно введен логин или пароль');
			return;
		}
		setUserInfo(user);
	}
	React.useEffect(() => {
		let price = 0;
		for (let item of checkedSneakers) {
			price += item.price;
		}
		setPrice(price);
	}, [checkedSneakers]);
	const cardElements = (
		isLoading
			? [...Array(8).fill({})]
			: sneakerObjects.filter((sneaker) =>
					sneaker.name.toLowerCase().includes(searchValue.toLowerCase()),
			  )
	).map((item) => (
		<Card
			key={nanoid()}
			name={item.name}
			price={item.price}
			img={item.img}
			handleClick={cardClick}
			check={item.check}
			loading={isLoading}
			id={item.id}
		/>
	)); // in this case I don't wanna use key from item, I wanna use whole item as a prop

	React.useEffect(() => {
		setChecked(sneakerObjects.filter((sneaker) => sneaker.check));
	}, [sneakerObjects]);

	return (
		<div className="wrapper">
			{cartState && (
				<Cart
					item={checkedSneakers}
					price={generalPrice}
					closeCart={getStateOfCart}
					removeCheck={cardClick}
					state={cartState}
					order={order}
					handleOrder={handleOrder}
					getBack={getBack}
				/>
			)}
			<Header price={generalPrice} handleClick={getStateOfCart} user={userInfo} />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							searchValue={searchValue}
							handleSearch={handleSearch}
							cardElements={cardElements}
						/>
					}
				/>
				<Route path="/user" element={<User info={userInfo} handleInfo={handleInfo} />} />
			</Routes>
		</div>
	);
}

export default App;
