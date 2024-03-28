// src/components/ArticleList.js

import React from 'react';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      <h2>Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
