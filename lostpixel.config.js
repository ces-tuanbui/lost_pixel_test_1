module.exports = {
  pageShots: {
    pages: [
      { path: "/", name: "landing" },
      { path: "/dashboard", name: "dashboard" },
      { path: "/dashboard/customers", name: "customers" },
    ],
    baseUrl: "http://172.17.0.1:3000",
  },
  lostPixelProjectId: "clp1zya3edefqek0ertfj3gv8",
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
