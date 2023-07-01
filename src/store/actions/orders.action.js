import { URL_API } from "../../constants/database";
import { GET_ORDERS, DELETE_ORDER } from "./ordersActionTypes";

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/ordenes.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const orders = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      dispatch({ type: GET_ORDERS, payload: orders });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteOrder = (orderId) => {
  return {
    type: DELETE_ORDER,
    payload: orderId,
  };
};
