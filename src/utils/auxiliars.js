export const getTodayDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  return today;
};

export const getTomorrowDate = () => {
  const today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  let dd = String(tomorrow.getDate()).padStart(2, "0");
  let mm = String(tomorrow.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = tomorrow.getFullYear();

  tomorrow = yyyy + "-" + mm + "-" + dd;
  return tomorrow;
};

export const calculateUrl = (slug, date, min_price, max_price) => {
  let url = new URL("https://canastarosa.com/services/api/v1/market/products/");
  const params = [slug, date, min_price, max_price];
  const paramName = [
    "category__slug",
    "delivery_date",
    "min_price",
    "max_price",
  ];
  for (let i = 0; i < params.length; i++) {
    if (params[i] !== "") {
      url.searchParams.set(paramName[i], params[i]);
    }
  }

  return url.href.toString();
};
