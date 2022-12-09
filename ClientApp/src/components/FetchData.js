import { useState, useEffect } from "react";

const useFetch = (url, filter, reset) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) {
      if (reset) setLoading(true);
      console.log(url);
      fetch(url, { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => {
          if (!data) data = [];
          if (data.status && data.status === 404) data = [];
          if (Array.isArray(data) && filter) data = filter(data);
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
          setData([]);
          setLoading(false);
        });
    } else {
      setData([]);
      if (!reset) setLoading(false);
    }
  }, [url, filter, reset]);

  return [data, error, loading];
};

export const usePost = (url, post, patch) => {
  const [resp, setResp] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url && (post || patch)) {
      setLoading(true);
      console.log(url);
      fetch(url, {
        method: post ? "POST" : patch ? "PATCH" : undefined,
        headers: {
          "Content-Type": "application/json",
        },
        body: post
          ? JSON.stringify(post)
          : patch
          ? JSON.stringify(patch)
          : undefined,
      })
        .then((res) => res.json())
        .then((data) => {
          setResp(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [url, post, patch]);

  return [resp, error, loading];
};

export default useFetch;
