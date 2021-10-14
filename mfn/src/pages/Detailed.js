import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { NEWS_ITEMS_URL } from '../components/API_URL';

export const Detailed = () => {
  const { id } = useParams()
  const { detailed, setDetailed } = useState({})

  useEffect(() => {
    fetch(NEWS_ITEMS_URL)
    .then(response => response.json())
    .then(json => setDetailed(json))
  }, [id])

  return(
    <div className="single-news">
      <h1>{detailed.news_id}</h1>
      <p>{detailed.title}</p>
      <p>{detailed.publish_date}</p>
    </div>
  )
}