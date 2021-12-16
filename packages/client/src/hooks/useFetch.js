import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (lastId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const fetchDcardPosts = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(`/api/data?id=${lastId}`);
      await setList((prev) => [...prev, ...res.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [lastId]);

  useEffect(() => {
    fetchDcardPosts();
  }, [fetchDcardPosts, lastId]);

  return { loading, error, list };
}

export default useFetch;