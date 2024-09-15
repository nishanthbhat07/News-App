import axios from "axios";
import dayjs from "dayjs";
import { INewsFeedResponse } from "../../types/api";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getNewsFeed = async ({ page }: { page: number }) => {
  try {
    const response = await axios.get<INewsFeedResponse>(
      API_BASE_URL as string,
      {
        params: {
          q: "apple",
          from: dayjs().subtract(10, "day").format("YYYY-MM-DD"),
          sortBy: "publishedAt",
          apiKey: API_KEY as string,
          pageSize: 50,
          page,
        },
      },
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching news feed", error);
    throw error;
  }
};
