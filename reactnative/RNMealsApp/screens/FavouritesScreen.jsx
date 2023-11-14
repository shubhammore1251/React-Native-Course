import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
// import { FavouritesContext } from "../store/context/FavouritesContext";
import { MEALS } from "../data/dummyData";
import { useSelector } from "react-redux";

const FavouritesScreen = () => {
  // const favouritesMealCtx = useContext(FavouritesContext);
  const favouriteMealsIds = useSelector(state => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) =>
    // favouritesMealCtx.ids.includes(meal.id)
    favouriteMealsIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          You have no <Text style={styles.inlineText}>favourite</Text> meals
          yet.
        </Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1,
  },
  inlineText: {
    color: "#e4baa1",
  },
});
