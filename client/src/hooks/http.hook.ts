import { useCallback } from "react";
import { IWeather } from "../Interfaces/IWeather";

interface IRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: string | null;
  headers?: {
    "Content-type": "application-json";
    Authorization?: string;
  };
}

export const useHttp = () => {
  const request = useCallback(
    async ({
      url,
      method,
      body = null,
      headers = {
        "Content-type": "application-json",
      },
    }: IRequest) => {
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data: IWeather = await response.json();

        return data;
      } catch (e) {
        throw e;
      }
    },
    []
  );

  return {
    request,
  };
};
