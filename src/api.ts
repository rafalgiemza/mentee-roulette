import {type ApiResponse as IApiResponse} from "~/interfaces/response";

export const API_URL = "http://localhost:5000/api/v1";

export async function getData<TData>(endpoint: string, method: "GET" | "POST" = "GET"): Promise<TData> {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  });


  const data = await res.json() as IApiResponse<TData>;

  if (data.statusCode !== 200) {
    throw new Error(data.error);
  }

  return data.data as TData;
}

// endpoints
export const endpoints = {
  users: "users",
  usersMe: "users/me",
};
