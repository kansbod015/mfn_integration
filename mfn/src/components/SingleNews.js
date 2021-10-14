import React from 'react';
import { Link } from 'react-router-dom';

import { NEWS_ITEMS_URL } from './API_URL';

const SingleNews = ({news_id, title, publish_date, brand_image_url}) => {
  return(
    <Link to={`/news/${news_id}`}>
      <div className="news">
        <h1>{title}</h1>
        <img src={NEWS_ITEMS_URL(brand_image_url)} alt={title} />
        <p>{publish_date}</p>

      </div>
    </Link>
  )
}

export default SingleNews
