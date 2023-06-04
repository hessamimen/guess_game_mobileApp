import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View style={styles.rootCOntainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text>Your phone needed X round to guess the number Y.</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootCOntainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    overflow: "hidden",
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
