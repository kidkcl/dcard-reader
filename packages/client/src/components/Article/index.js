import React, { 
  useState, 
  useCallback, 
  useEffect, 
  useRef 
} from "react";

import useFetch from "../../hooks/useFetch";

const Article = () => {
  const [lastId, setLastId] = useState('');
  const { loading, error, list } = useFetch(lastId);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      if (list && list.length > 0 && lastId !== list[list.length-1].id) {
        console.log(list.length)
        console.log(lastId, list[list.length-1].id)
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
    <div>
      <ul className="list-group-ul">
        {list.map((article, key) => (
          <li className="list-group-li" key={key}>
            <a href={`https://www.dcard.tw/f/${article.forum_alias}/p/${article.id}`} target="_blank" rel="noreferrer">
              {article.title}
            </a>
            <p>{article.excerpt}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!</p>}
      <div ref={loader} />
    </div>
  );
};

export default Article;
