import React, { useEffect, useRef } from 'react';
import { List } from '@mui/material';
import styled from 'styled-components';

import Article from '../Article';

import useFetch from '../../hooks/useFetch';

const ListWrapper = styled(List)`
  max-width: 728px;
  margin: 0 auto;
  padding: 0px 1rem 2rem 1rem;
  background: #fff;
`;

const ArticleList = function AritcleList() {
  const { loading, error, list, fetchDcardPosts } = useFetch();
  const loader = useRef(null);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };

    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        fetchDcardPosts();
      }
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    return () => observer.disconnect();
  }, [loader]);

  return (
    <ListWrapper>
      <List>
        {list.map((article) => (
          <Article
            key={article.id}
            forum={article.forum}
            id={article.id}
            title={article.title}
            excerpt={article.excerpt}
          />
        ))}
      </List>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!</p>}
      <div ref={loader} />
    </ListWrapper>
  );
};

export default ArticleList;
