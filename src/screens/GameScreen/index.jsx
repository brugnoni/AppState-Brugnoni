import { Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import styles from "./styles";

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>El Oponente supone que el numero es: {currentGuess}</Text>
      <Card otherStyles={styles.buttonContainer}>
        <Button title="MENOR" onPress={() => console.log("Elegíste Menor")} />
        <Button title="MAYOR" onPress={() => console.log("Elegíste Mayor")} />
      </Card>
    </View>
  );
};

export default GameScreen;
