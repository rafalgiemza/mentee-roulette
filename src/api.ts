import {type ApiResponse as IApiResponse} from "~/interfaces/response";
import axios from "axios";

export const API_URL = "http://localhost:5000/api/v1";

export async function getData<TData>(endpoint: string, method: "GET" | "POST" | "PUT" = "GET"): Promise<TData> {
  const { data } = await axios.request<IApiResponse<TData>>(
      {
        url: `${API_URL}/${endpoint}`,
        method,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0"
        },
      },
  );

  if (data?.statusCode !== 200) {
    throw new Error(data.error);
  }

  return data.data as TData;
}

// endpoints
export const endpoints = {
  users: "users",
  usersMe: "users/me",
  usersUnpauseMe: "users/unpause-me",
  usersPauseMe: "users/pause-me",
  usersDisconnectFromCronofy: "users/disconnect-from-cronofy",
  rouletteTrigger: "roulette/trigger",
};
