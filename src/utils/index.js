const getEnv = () => {
  return {
    COUNTRY_BASE_URL: process.env.REACT_APP_COUNTRY_BASE_URL,
    CURRENCY_BASE_URL: process.env.REACT_APP_CURRENCY_BASE_URL,
    CURRENCY_API_KEY: process.env.REACT_APP_CURRENCY_API_KEY,
  };
};

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { getEnv, formatNumber };
