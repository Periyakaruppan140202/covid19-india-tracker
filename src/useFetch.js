import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  const getData = useCallback(async () => {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const info = await res.json();
      console.log(info);
      setData(info);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return [data, loading];
};
