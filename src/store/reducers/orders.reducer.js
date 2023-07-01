import { GET_ORDERS, DELETE_ORDER } from "../actions/ordersActionTypes";
const initial_state = {
  list: [],
};

const OrdersReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, list: action.payload };
    case DELETE_ORDER:
      const updatedOrders = state.list.filter(
        (order) => order.id !== action.payload
      );
      return {
        ...state,
        list: updatedOrders,
      };
    default:
      return state;
  }
};

export default OrdersReducer;
