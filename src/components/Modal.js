import {
  StyleSheet,
  Text,
  View,
  Modal as NewModal,
  Button,
} from "react-native";
import React from "react";

const Modal = ({ isVisible, actionDeleteItem, itemSelected }) => {
  return (
    <NewModal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <Text style={styles.titleContainer}>
          Eliminarás: {itemSelected.name}
        </Text>
        <View>
          <Text style={styles.modalTextDelete}>
            Estás seguro/a que deseas borrar este elemento?
          </Text>
          <Button
            title="Eliminar"
            color={"red"}
            onPress={() => actionDeleteItem()}
          />
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E283C",
    color: "white",
  },
  modalTextDelete: {
    color: "white",
  },
  titleContainer: {
    fontSize: 30,
    fontWeight: "500",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  modalStyle: {
    width: "80%",
    height: "auto",
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    padding: "5%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    padding: "10%",
  },
  modalTextDelete: {
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
});
