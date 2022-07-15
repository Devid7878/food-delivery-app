import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItems from '../Cart/CartItems';
import CartContext from '../../store/cart-context';
const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const cartItemAddHandler = (item) => {
		console.log(cartCtx.items);
		cartCtx.addItems({
			...item,
			amount: 1,
		});
	};
	const cartItemRemoveHandler = (id) => {};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItems
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onAdd={cartItemAddHandler}
					onRemove={cartItemRemoveHandler}
				/>
			))}
		</ul>
	);
	const totalAmount = `$${cartCtx.amount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
