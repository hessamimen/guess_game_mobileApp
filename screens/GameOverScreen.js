import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, useNumber, onStartNewGame }) {
  return (
    <View style={styles.rootCOntainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.heighlight}>{roundsNumber}</Text>{" "}
        round to guess the number{" "}
        <Text style={styles.heighlight}>{useNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviveWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootCOntainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: deviveWidth > 380 ? 150 : 75,
    overflow: "hidden",
    width: deviveWidth > 380 ? 300 : 150,
    height: deviveWidth > 380 ? 300 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },

  heighlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
