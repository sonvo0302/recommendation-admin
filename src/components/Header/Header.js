import React, { useState } from 'react';

import './header.scss';

import { Button, Dropdown, DropdownButton, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';

const Header = () => {
	const [
		open,
		setOpen
	] = useState(false);
	const navItems = [
		{
			name  : 'Trang chủ',
			title : 'Trang chủ',
			path  : '/'
		},
		{
			name  : 'Top Phim',
			title : 'Top Phim',
			path  : '/film/top'
		},
		{
			name  : 'Mới nhất',
			title : 'Mới nhất',
			path  : '/film/newest'
		},
		{
			name  : 'Danh sách của tôi',
			title : 'Danh sách của tôi',
			path  : '/film/history'
		}
	];
	const itemdropdown = [
		{ name: 'Thông tin cá nhân' },
		{ name: 'Đổi mật khẩu' },
		{ name: 'Đăng xuất' }
	];
	const [
		openProfile,
		setOpenProfile
	] = useState(false);

	return (
		<div className="header">
			<Navbar expand="lg">
				<Navbar.Brand href="/">
					<div className="app-logo">LOGO</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setOpen(!open)} />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						{navItems.map((item) => (
							<NavLink className="nav-item" to={item.path} key={item.name} exact>
								<p className="m-0">{item.title}</p>
							</NavLink>
						))}
					</Nav>
					<div className="right-nav d-flex align-items-center justify-content-spacing">
						<FormControl type="text" placeholder="Tìm kiếm" className="mr-2" />
						<div className="right-nav--avatar p-relative">
							<img
								alt=""
								width={50}
								height={50}
								className="mx-2"
								style={{
									borderRadius    : '50%',
									backgroundColor : 'red',
									cursor          : 'pointer'
								}}
								onClick={() => setOpenProfile(!openProfile)}
							/>
							{openProfile && <DropdownMenu setOpen={setOpenProfile} items={itemdropdown} />}
						</div>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
