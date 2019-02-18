// Shortcut for environment variables container.
const env = { ...process.env };

// Base URL of the App. It allows putting the APP into sub-folders on the server.
export const APP_BASE_URL = env.REACT_APP_BASE_URL;

// GIPHY API key.
export const GIPHY_API_KEY = env.REACT_APP_GIPHY_API_KEY;

// GIPHY API Host.
export const GIPHY_API_HOST = env.REACT_APP_GIPHY_API_HOST;

// How many Gif images we want to request per each HTTP request.
export const SEARCH_BATCH_SIZE = 30;
