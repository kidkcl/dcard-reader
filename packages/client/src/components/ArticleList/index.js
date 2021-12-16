import React, { 
  useState, 
  useCallback, 
  useEffect, 
  useRef 
} from "react";
import { List } from "@mui/material";
import styled from "styled-components";

import Article from "../Article";

import useFetch from "../../hooks/useFetch";

const ListWrapper = styled(List)`
  max-width: 728px;
  margin: 0 auto;
  padding: 0px 1rem 2rem 1rem;
  background: #fff;
`;

const ArticleList = () => {
  const [lastId, setLastId] = useState('');
  const { loading, error, list } = useFetch(lastId);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      if (list && list.length > 0 && lastId !== list[list.length-1].id) {
        setLastId(list[list.length-1].id);
      }      
    }
  }, [lastId, list]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  
    return () => observer.disconnect();
  }, [loader, handleObserver]);

  return (
    <ListWrapper>
      <List>
        {list.map((article, key) => (
          <Article key={key} article={article} />
        ))}
      </List>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!</p>}
      <div ref={loader} />
    </ListWrapper>
  );
};

export default ArticleList;
