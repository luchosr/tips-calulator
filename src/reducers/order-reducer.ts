import { MenuItem, OrderItem } from './../types/index';
export type OrderActions =
  | { type: 'add-item'; payload: { item: MenuItem } }
  | { type: 'remove-item'; payload: { id: MenuItem['id'] } }
  | { type: 'place-order' }
  | { type: 'add-tip'; payload: { value: number } };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  if (action.type === 'add-item') {
    const itemExist = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id
    );
    let order: OrderItem[] = [];
    if (itemExist) {
      order = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
    } else {
      const newItem = { ...action.payload.item, quantity: 1 };
      order = [...state.order, newItem];
    }
    return {
      ...state,
      order,
    };
  }
};
