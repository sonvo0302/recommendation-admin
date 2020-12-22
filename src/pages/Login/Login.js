import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { isAuth } from '../../utils/auth';

import './login.scss';

const Login = ({ error, token, doLogin, history }) => {
	const [
		email,
		setEmail
	] = useState('');
	const [
		password,
		setPassword
	] = useState('');

	const onHandleSubmitLogin = () => {
		doLogin({ email, password });
	};

	if (isAuth(token)) {
		return <Redirect to={'/'} />;
	}

	return (
		<div className="login w-100 h-100">
			<div className="login-wrapper d-flex justify-content-center align-items-center">
				<div className="login-content">
					<p className="login-content--heading text-center">Đăng nhập</p>
					<Form className="d-flex flex-column" onSubmit={onHandleSubmitLogin}>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Nhập email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Mật khẩu</Form.Label>
							<Form.Control
								type="password"
								placeholder="Nhập mật khẩu"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
						<a href="#" target="_blank" className="text-right text-danger">
							Quên mật khẩu?
						</a>
						<div className="d-flex justify-content-center mt-2 p-2">
							<Button variant="danger" onClick={() => onHandleSubmitLogin()}>
								Đăng nhập
							</Button>
						</div>
						<div className="d-flex justify-content-center p-2">
							<Button variant="danger" onClick={() => history.push('/register')}>
								Đăng ký
							</Button>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Login;
