import { useState, useCallback, useRef } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const lastId = useRef('');

  const fetchDcardPosts = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const { data } = await axios.get(`/api/data?id=${lastId.current}`);
      if (!data || data.length === 0) return;
      lastId.current = data[data.length - 1].id;
      await setList((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  }, []);

  // useEffect(() => {
  //   fetchDcardPosts();
  // }, []);

  return {
    loading,
    error,
    list,
    fetchDcardPosts,
  };
};

export default useFetch;
