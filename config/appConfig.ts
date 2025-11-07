export const appConfig = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com",
  tokenKeys: {
    access: "accessToken",
    refresh: "refreshToken",
  },
};
