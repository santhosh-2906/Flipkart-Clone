export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cannot remove product (id: ${action.id}) – not found.`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
