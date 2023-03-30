import { useCallback } from "react";

interface IRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: string | null;
  headers?: {
    "Content-type": "application-json";
    Authorization?: string;
    lat?: string;
    lon?: string;
  };
}

export const useHttp = () => {
  const request = useCallback(
    async <T>({
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

        const data: T = await response.json();

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
