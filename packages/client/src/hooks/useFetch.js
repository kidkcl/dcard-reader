import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const fetchDcardPosts = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const { data } = await axios.get(`/api/data`);
      await setList((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, []);

  const fetchNextPage = async () => {
    try {
      await setLoading(true);
      await setError(false);
      const { data } = await axios.get(
        `/api/data?id=${list[list.length - 1].id}`
      );
      await setList((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchDcardPosts();
  }, [fetchDcardPosts]);

  return { loading, error, list, fetchNextPage };
};

export default useFetch;
