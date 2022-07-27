import React from 'react';
import { Link } from 'react-router-dom';
export default function User(props) {
	const [login, setLogin] = React.useState('');
	const [pass, setPass] = React.useState('');
	return (
		<div className="userMenu">
			<form>
				<div className="login">
					<label>Логин</label>
					<input
						type="text"
						id="login"
						onChange={(e) => setLogin(e.target.value)}
						value={login}
						maxLength={16}
					/>
				</div>
				<div className="pass">
					<label>Пароль</label>
					<input
						type="password"
						id="pass"
						onChange={(e) => setPass(e.target.value)}
						value={pass}
						maxLength={16}
					/>
				</div>

				<Link to="/">
					<button onClick={(e) => props.handleInfo(e, login, pass)}>Авторизация</button>
				</Link>
			</form>
		</div>
	);
}
