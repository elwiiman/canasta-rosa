export default (state, action) => {
  switch (action.type) {
    case "CALL_ALL_PRODUCTS":
      return {
        ...state,
        slug: action.payload.slug,
        page: action.payload.response.page,
        firstConsult: state.firstConsult ? true : !state.firstConsult,
        loading: true,
        products: action.payload.response.results,
        next: action.payload.response.next
          ? action.payload.response.next.split("market")[1]
          : null,
        previous: action.payload.response.previous
          ? action.payload.response.previous.split("market")[1]
          : null,
      };

    case "LOADING_PRODUCTS":
      return {
        ...state,
        loading: true,
      };

    case "LOADING_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
