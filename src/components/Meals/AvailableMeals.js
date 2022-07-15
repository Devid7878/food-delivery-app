import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from '../Meals/AvailableMeals.module.css';
import Card from '../UI/Card';
import MealsItem from './MealsItem/MealsItem';
const AvailableMeals = () => {
	const [DUMMY_MEALS, setDUMMY_MEALS] = useState([]);

	useEffect(() => {
		axios
			.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
			.then((res) => {
				setDUMMY_MEALS(res.data.meals);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const mealsData = DUMMY_MEALS.map((meal) => {
		return (
			<MealsItem
				key={meal.idMeal}
				id={meal.idMeal}
				name={meal.strMeal}
				image={meal.strMealThumb}
				price={Math.floor(Math.random() * (100 - 5 + 1) + 5)}
			/>
		);
	});
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsData}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
