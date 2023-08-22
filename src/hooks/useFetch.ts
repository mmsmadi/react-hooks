import { useEffect, useState } from "react";

interface props {
  url: string;
  options?: {
    method: "GET" | "POST" | "PUT" | "DELETE";
  };
}

const useFetch = ({ url, options = { method: "GET" } }: props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    fetch(url, {
      method: "GET",
      ...options,
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err);
        }
      })
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
      setError(null);
      setIsLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isloading, error };
};

export default useFetch;

/**
 * USAGE
 *
 * const { isloading, data } = useFetch({
 *   url: `https://www.my-api.com`,
 * });
 *
 */
