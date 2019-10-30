export default {
  API_KEY: process.env.REACT_APP_API_KEY,
  API_BASE_URL:
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_ENDPOINT
    : 'http://localhost:8000/api'
   };

