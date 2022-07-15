import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from '../Layout/HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const numberOfItemsInCart = cartCtx.items.reduce((currNumber, item) => {
		return currNumber + item.amount;
	}, 0);

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={classes.badge}>{numberOfItemsInCart}</span>
		</button>
	);
};

export default HeaderCartButton;
