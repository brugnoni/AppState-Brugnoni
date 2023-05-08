import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useState } from "react";
import Modal from "./src/components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeText = (text) => {
    setTextItem(text);
    console.log(text);
  };

  const addItem = () => {
    setList((prevState) => [
      ...prevState,
      { name: textItem, id: Math.random().toString() },
    ]);
    setTextItem("");
  };

  const onHandleModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };

  const onHandleDelete = (item) => {
    setList((prevState) =>
      prevState.filter((element) => element.name !== item.name)
    );
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      <View style={styles.itemButtonContainer}>
        <Button
          title="X"
          onPress={() => onHandleModal(item)}
          color={"red"}
          style={styles.itemButton}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}>LISTA DE COMPRA</Text>
        <View style={styles.addItemContainer}>
          <TextInput
            placeholder="Verduras, Carnes, Jabón..."
            style={styles.inputItem}
            onChangeText={onHandleChangeText}
            value={textItem}
          />
          <Button title="Add" onPress={addItem} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        itemSelected={itemSelected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1E283C",
    padding: 20,
  },
  inputItem: {
    fontSize: 16,
    width: 200,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  titleContainer: {
    fontSize: 30,
    fontWeight: "500",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  addItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#23314F",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    borderBottomColor: "#009EFF",
    borderBottomWidth: 2,
    paddingHorizontal: 5,
    paddingVertical: 10,
    color: "white",
  },
  listContainer: {
    flex: 2,
    flexDirection: "column",
    fontSize: 50,
  },
  renderItemStyle: {
    flexDirection: "row",
    backgroundColor: "#3C4D6C",
    color: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
    shadowRadius: 2,
    elevation: 3,
    paddingHorizontal: 10,
  },
  itemTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  itemText: {
    fontSize: 28,
    color: "white",
  },
  itemButtonContainer: {
    minWidth: 60,
  },
  itemButton: {
    flex: 1,
  },
});
