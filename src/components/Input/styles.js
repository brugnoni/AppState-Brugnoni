import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formControl: {
    marginBottom: 10,
  },
  label: {
    fontFamily: "Roboto",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
    fontSize: 13,
  },
});

export default styles;
