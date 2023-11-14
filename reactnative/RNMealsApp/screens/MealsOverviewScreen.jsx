import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummyData";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";


const MealsOverviewScreen = ({ route, navigation }) => {
  const catgId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catgId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catgId).title;

    navigation.setOptions({
      title: categoryTitle
    })
  }, [catgId, navigation])

  return <MealsList items={displayedMeals}/>
  
};

export default MealsOverviewScreen;


