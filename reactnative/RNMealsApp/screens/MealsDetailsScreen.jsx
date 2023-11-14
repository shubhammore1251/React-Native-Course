import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummyData";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { /*useContext,*/ useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { addFavourite, removeFavourite } from "../store/redux/favourites";
import { useDispatch, useSelector } from "react-redux";
// import { FavouritesContext } from "../store/context/FavouritesContext";

const MealsDetailsScreen = ({ route, navigation }) => {

  // const favouriteMealsCtx = useContext(FavouritesContext);

  const favouriteMealIds = useSelector(state => state.favouriteMeals.ids);

  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

  const mealIsFavourite = favouriteMealIds.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      // favouriteMealsCtx.removeFavourite(mealId);
      dispatch(removeFavourite({
        id: mealId,
      }))
    }else {
      // favouriteMealsCtx.addFavourite(mealId);
      dispatch(addFavourite({
        id: mealId,
      }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${selectedMeal.title} Details`,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [changeFavouriteStatusHandler, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailsText}
      />

      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
    letterSpacing: 1,
  },
  detailsText: {
    color: "white",
  },
  listOuter: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
