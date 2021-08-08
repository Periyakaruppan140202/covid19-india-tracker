import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  const getData = useCallback(async () => {
    const res = await fetch(url);
    const info = await res.json();
    setData(info);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return [data, loading];
};
