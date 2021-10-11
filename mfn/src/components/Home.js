import React, { useState, useEffect } from 'react';

import { NEWS_ITEMS_URL } from './API_URL'

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
    <div>
      <h1>Hello World</h1>
    </div>
  )
};