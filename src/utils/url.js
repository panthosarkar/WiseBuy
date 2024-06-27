const isDev = process.env.NODE_ENV === "development";

export const apiUrl = () => {
  if (isDev) {
    return process.env.REACT_APP_DEMO_API_URL;
  }

  return process.env.REACT_APP_LIVE_API_URL;
};
