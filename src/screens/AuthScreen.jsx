import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/auth.action";

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("test1234@test.com");
  const [password, setPassword] = useState("pass1234");

  const handleSignUp = () => {
    dispatch(signUp(email, password));
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior="margin"
      keyboardVerticalOffset={50}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Your next PC</Text>
        <Text style={styles.title}>Create Account</Text>
        <View>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
        <View style={styles.footer}>
          <Button title="Register" onPress={handleSignUp} />
          <Button title="Sign In" onPress={() => console.log("second")} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    flex: 1,
    fontSize: 24,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "white",
    height: "50%",
    padding: 12,
  },

  footer: {
    marginTop: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
