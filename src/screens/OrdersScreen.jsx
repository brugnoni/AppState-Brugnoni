import { FlatList, StyleSheet, View } from "react-native";
import OrderItem from "../components/OrderItem";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, deleteOrder } from "../store/actions/orders.action";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  const renderOrderItem = ({ item }) => (
    <OrderItem item={item} onDelete={() => handleDeleteOrder(item.id)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#91A8D0",
  },
});
