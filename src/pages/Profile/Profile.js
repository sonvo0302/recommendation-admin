import { message, Radio } from 'antd';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';

import { authApi } from '../../services';
import 'react-datepicker/dist/react-datepicker.css';
import './profile.scss';

const Profile = () => {
	const userInfo = useSelector((state) => state.auth.user);
	const [
		name,
		setName
	] = useState();
	const [
		email,
		setEmail
	] = useState();
	const [
		phone,
		setPhone
	] = useState();
	const [
		gender,
		setGender
	] = useState();
	const [
		dob,
		setDob
	] = useState();

	const userId = useSelector(state => state.auth.user._id);

	useEffect(() => {
		authApi.getProfile(userId).then(res => {
			const { user_info } = res;
			setName(user_info[0].name);
			setGender(user_info[0].gender);
			setPhone(user_info[0].mobile_phone);
			setEmail(res.user.email);
			setDob(new Date(user_info[0].dateofbirth));
		});

	}, []);

	const onHandleClickUpdateProfile = () => {
		const body = {
			userId: userId,
			name: name,
			email: email,
			mobile_phone: phone,
			gender: gender,
			dateofbirth: dob
		};

		authApi.updateProfile(body).then(res =>
			message.success("Update profile successfully!")).catch(err => message.error(err))

	};

	return (
		<div className="profile">
			<div className="profile-wrapper d-flex flex-wrap container">
				<div className="col-3 d-flex flex-column justify-content-center">
					<img width={256} height={256} style={{ backgroundColor: 'white', borderRadius: '50%' }} />
				</div>
				<div className="col-6 d-flex flex-column">
					<p className="text-sub-heading">Thông tin cá nhân</p>
					<div className="ml-4 d-flex flex-column">
						<Form.Group>
							<Form.Label>Họ và tên</Form.Label>
							<Form.Control
								type="email"
								placeholder=""
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder=""
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Số điện thoại</Form.Label>
							<Form.Control
								// type="email"
								placeholder=""
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</Form.Group>
						<label>Giới tính</label>
						<Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
							<Radio value={true}>Nam</Radio>
							<Radio value={false}>Nữ</Radio>
						</Radio.Group>
						<label>Ngày sinh</label>
						<DatePicker selected={dob} onChange={(date) => setDob(date)} />
						<div className="m-4">
							<Button variant="primary" onClick={() => onHandleClickUpdateProfile()}>
								Lưu thông tin
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
