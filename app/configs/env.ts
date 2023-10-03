const Environment = {
  VITE_SERVICE_LOGGER_URL: process.env.VITE_SERVICE_LOGGER_URL,
  VITE_SERVICE_API_AUTH_URL: process.env.VITE_SERVICE_API_AUTH_URL,
  VITE_SERVICE_NOTIFICATION_URL: process.env.VITE_SERVICE_NOTIFICATION_URL,
  VITE_SERVICE_USER_MANAGEMENT_URL: process.env.VITE_SERVICE_USER_MANAGEMENT_URL,
  VITE_SERVICE_CHARGING_EVENT_URL: process.env.VITE_SERVICE_CHARGING_EVENT_URL,
  VITE_SERVICE_PAYMENT_URL: process.env.VITE_SERVICE_PAYMENT_URL,
  VITE_CHARGE_STATUS_INTERVAL: Number(process.env.VITE_CHARGE_STATUS_INTERVAL),
  VITE_STRIPE_PUBLISHABLE_KEY: process.env.VITE_STRIPE_PUBLISHABLE_KEY
};

export default Environment;