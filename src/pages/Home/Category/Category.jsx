// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    // for showing the category id we have to use react hook useParam
    // eslint-disable-next-line no-unused-vars
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h1>this is Categories Total News:{categoryNews.length}</h1>
            {
                categoryNews.map(news=> <NewsCard
                key={news._id}
                news= {news}
                >

                </NewsCard>)
            }
        </div>
    );
};

export default Category;