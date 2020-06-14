export default (state, action) => {
  switch (action.type) {
    case "CALL_ALL_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
