export default (state, action) => {
  switch (action.type) {
    case "CALL_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        next: action.payload.next.split("market")[1],
        previous: action.payload.previous
          ? action.payload.previous.split("market")[1]
          : null,
      };

    default:
      return state;
  }
};
