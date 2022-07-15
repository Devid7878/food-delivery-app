import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props) => {
	const amountRef = useRef();
	const [isAmountValid, setIsAmountValid] = useState(true);
	const onSubmitHandler = (e) => {
		e.preventDefault();
		// + because converted into number from string
		const enteredAmount = +amountRef.current.value;
		if (enteredAmount < 1 || enteredAmount > 5) {
			setIsAmountValid(false);
			return;
		}
		props.onAddToCart(enteredAmount);
	};
	return (
		<form className={classes.form} onSubmit={onSubmitHandler}>
			<Input
				ref={amountRef}
				label='Amount'
				input={{
					id: 'amount',
					type: 'number',
					min: 1,
					max: 5,
					step: 1,
					defaultValue: 1,
				}}
			/>
			<button>
				<i className='fa-solid fa-circle-plus'></i>Add
			</button>
			{!isAmountValid && <p>Please enter valid amount value(1-5)!</p>}
		</form>
	);
};

export default MealItemForm;
