const isDev = false; // set to true for local development
const localhost = "http://localhost:4000/";
const live = "https://forexclass-backend.vercel.app/";
const liveTest = import.meta.env.VITE_LIVE_TEST_HOST;

// export const baseUrl = isDev ? localhost : live;
export const baseUrl = isDev ? localhost : live;