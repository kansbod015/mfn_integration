import React, { useState, useEffect } from 'react';

import { NEWS_ITEMS_URL } from './API_URL';
import SingleNews from './SingleNews';

export const Home = () => {
  const [ newsItemsList, setNewsItemsList ] = useState([]);

  const fetchNewsItemsList = () => {
    fetch(NEWS_ITEMS_URL)
      .then(response => response.json())
      .then(json => setNewsItemsList(json.results))
  }

  useEffect(() => {
    fetchNewsItemsList()
  }, [])

  return(
    <div className="news-list">
      {newsItemsList.map(news => {
        return (
          <SingleNews {...news} />
        )
      })}
    </div>
  )
};