import React from 'react';
import { 
  ListItem, 
  Divider, 
  ListItemText, 
} from '@mui/material';

const Article = (props) => {
  const { article } = props;
  return (
    <div>
      <ListItem component="a" href={`https://www.dcard.tw/f/${article.forum}/p/${article.id}`} sx={{ paddingY: '20px' }}>
        <ListItemText
          primaryTypographyProps={{ variant: "subtitle1", color: "#000" }}
          primary={article.title}
          secondary={article.excerpt}
        />
      </ListItem>
      <Divider component="li" />
    </div>
  );
};

export default Article;