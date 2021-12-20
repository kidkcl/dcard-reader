import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Divider, ListItemText } from '@mui/material';

const Article = function Article(props) {
  const { forum, id, title, excerpt } = props;
  return (
    <div>
      <ListItem component="a" href={`https://www.dcard.tw/f/${forum}/p/${id}`}>
        <ListItemText
          primaryTypographyProps={{ variant: 'subtitle1', color: '#000' }}
          primary={title}
          secondary={excerpt}
        />
      </ListItem>
      <Divider component="li" />
    </div>
  );
};

Article.propTypes = {
  id: PropTypes.number.isRequired,
  forum: PropTypes.string,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
};

Article.defaultProps = {
  forum: '',
  excerpt: '',
};

export default Article;
