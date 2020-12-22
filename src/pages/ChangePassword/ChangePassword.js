import { message } from 'antd';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { authApi } from "../../services";

import './index.scss';

const ChangePassword = () => {
	const [
		oldPassword,
		setOldPassword
	] = useState('');
	const [
		newPassword,
		setNewPassword
	] = useState('');
	const [
		confirmPassword,
		setConfirmPassword
	] = useState('');

	const { user } = useSelector(state => state.auth);

	const onHandleUpdatePassword = () => {
		if (newPassword != confirmPassword) {
			message.error("Xác nhận mật khẩu không đúng");
		} else {
			authApi.changePassword(user._id, oldPassword, newPassword).then(res => {
				message.success("Đổi mật khẩu thành công!");
			}).catch(err => message.error(err))
		}
	};

	return (
		<div className="change_password">
			<div className="change_password-wrapper d-flex flex-wrap justify-content-center container">
				<div className="col-6 d-flex flex-column">
					<p className="text-sub-heading">Đổi mật khẩu</p>
					<div className="ml-4 d-flex flex-column">
						<Form.Group>
							<Form.Label>Mật khẩu hiện tại</Form.Label>
							<Form.Control
								type="password"
								placeholder=""
								value={oldPassword}
								onChange={(e) => setOldPassword(e.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Mật khẩu mới</Form.Label>
							<Form.Control
								type="password"
								placeholder=""
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Nhập lại mật khẩu mới</Form.Label>
							<Form.Control
								type="password"
								placeholder=""
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</Form.Group>
						<div className="m-4">
							<Button variant="primary" onClick={() => onHandleUpdatePassword()}>
								Lưu thông tin
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
