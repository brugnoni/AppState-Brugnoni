import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { useState, useCallback, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/auth.action";
import Input from "../components/Input";
import { Dimensions } from "react-native";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    };
  }
  return state;
};

const AuthScreen = () => {
  const screenWidth = Dimensions.get("window").width;

  const screenHeight = Dimensions.get("window").height;

  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      Alert.alert("Ha ocurrido un error", error, [{ text: "Ok" }]);
    }
  }, [error]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(
        signUp(formState.inputValues.email, formState.inputValues.password)
      );
    } else {
      Alert.alert("Por favor ingrese datos válidos", "Formulario Inválido", [
        { text: "Ok" },
      ]);
    }
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        input: inputIdentifier,
        isValid: inputValidity,
      });
    },
    [dispatchFormState]
  );

  return (
    <View
      style={[styles.container, { width: screenWidth, height: screenHeight }]}
    >
      <ImageBackground
        source={require("../assets/next.jpg")}
        style={styles.backgroundImage}
      >
        <KeyboardAvoidingView
          style={[
            styles.mainContainer,
            { width: screenWidth, height: screenHeight },
          ]}
          behavior="padding"
          keyboardVerticalOffset={50}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Your Next PC</Text>
            <Text style={styles.title}>Create Account</Text>
            <View style={styles.inputContainer}>
              <Input
                id="email"
                label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                required
                email
                errorText={"Porfavor ingrese un email válido"}
                onInputChange={onInputChangeHandler}
                initialValue=""
              />
              <Input
                id="password"
                label="Password"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                required
                password
                secureTextEntry
                errorText={"Porfavor ingrese una contraseña válido"}
                onInputChange={onInputChangeHandler}
                initialValue=""
              />
            </View>
            <View style={styles.footer}>
              <Button title="Register" onPress={handleSignUp} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 10,
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
});
