import { ContactlessSharp } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { authApi } from '../../services';

import './index.scss';

const DropdownItem = (props) => {
	const { item } = props;
	return (
		<div className="dropdowm-item" key={item.name} onClick={props.onClick}>
			{item.name}
		</div>
	);
};

const DropdownMenu = (props) => {
	const { items, setOpen } = props;
	const history = useHistory();
	return (
		<div className="dropdown">
			<DropdownItem
				item={items[0]}
				onClick={() => {
					history.push('/profile');
					setOpen(false);
				}}
			/>
			<DropdownItem
				item={items[1]}
				onClick={() => {
					history.push('/change-password');
					setOpen(false);
				}}
			/>
			<DropdownItem item={items[2]} onClick={() => authApi.logout(history)} />
		</div>
	);
};
export default DropdownMenu;
