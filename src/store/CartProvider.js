import React, { useReducer } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
	const defaultCartState = {
		items: [],
		totalAmount: 0,
	};

	const cartReducer = (state, action) => {
		if (action.type === 'ADD') {
			console.log(state.items);
			const updatedTotalAmount =
				state.totalAmount + action.item.amount * action.item.price;

			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.item.id,
			);
			const existingCartItem = state.items[existingCartItemIndex];

			let updatedItems;
			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + action.item.amount,
				};
				updatedItems = [...state.items];
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				updatedItems = state.items.concat(action.item);
			}

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		}

		return defaultCartState;
	};

	const [cartState, dispatchCartState] = useReducer(
		cartReducer,
		defaultCartState,
	);

	const addItemToCartHandler = (item) => {
		dispatchCartState({
			type: 'ADD',
			item: item,
		});
	};
	const removeItemFromCartHandler = (id) => {
		dispatchCartState({
			type: 'REMOVE',
			id: id,
		});
	};

	const cartContext = {
		items: cartState.items,
		amount: cartState.totalAmount,
		addItems: addItemToCartHandler,
		removeItems: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
