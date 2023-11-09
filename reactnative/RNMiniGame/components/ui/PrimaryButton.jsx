import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  
  return (
    <View style={[styles.buttonOuterContainer, styles.shadowProp]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.primary600,
    borderStyle: "solid",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
  shadowProp: {
    shadowColor: '#c683ec',
    shadowOffset: {width: -2, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5
  },
});
