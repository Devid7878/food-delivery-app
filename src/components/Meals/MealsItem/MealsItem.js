import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealsItem.module.css';
import CartContext from '../../../store/cart-context';

const MealsItem = (props) => {
	const price = `$${props.price}`;
	const cartCtx = useContext(CartContext);
	const addToCartHandler = (amount) => {
		cartCtx.addItems({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};
	return (
		<li className={classes.meal}>
			<div className={classes.mealimg}>
				<img src={props.image} alt='Meals Images' />
			</div>
			<div className={classes['meal-desc']}>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealsItem;
