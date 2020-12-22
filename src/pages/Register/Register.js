import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { message } from 'antd';

import { authApi } from '../../services';

import './register.scss';

const Register = ({ history }) => {
	const [
		fullName,
		setFullName
	] = useState('');
	const [
		email,
		setEmail
	] = useState('');
	const [
		password,
		setPassword
	] = useState('');
	const [
		rePassword,
		setRePassword
	] = useState('');

	const onHandleSubmitRegister = () => {
		if (password === rePassword) {
			authApi
				.register({ name: fullName, email, password, password2: rePassword })
				.then(() => {
					history.push('/login');
					message.success('Đăng ký thành công');
				})
				.catch((err) => message.error(err));
		} else {
			message.error('Mật khẩu không khớp!!');
		}
	};
	return (
		<div className="register w-100 h-100">
			<div className="register-wrapper d-flex justify-content-center align-items-center">
				<div className="register-content">
					<p className="register-content--heading text-center">Đăng ký</p>
					<div className="d-flex flex-column">
						<Form.Group>
							<Form.Label>Họ và tên</Form.Label>
							<Form.Control
								placeholder="Nhập họ và tên"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
							/>
						</Form.Group>
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
						<Form.Group>
							<Form.Label>Nhập lại Mật khẩu</Form.Label>
							<Form.Control
								type="password"
								placeholder="Nhập lại mật khẩu"
								value={rePassword}
								onChange={(e) => setRePassword(e.target.value)}
							/>
						</Form.Group>
						<span className="text-right text-white">
							Đã có tài khoản?
							<a href="/login" target="_blank" className="text-danger ml-2">
								Đăng nhập
							</a>
						</span>
						<div className="d-flex justify-content-center mt-2 p-2">
							<Button variant="danger" onClick={onHandleSubmitRegister}>
								Đăng ký
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
