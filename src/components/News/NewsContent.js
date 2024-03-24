import axios from "axios";
import React, { useEffect, useState } from "react";
import "./NewsContent.css";
const NewsContent = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: "GET",
        url: "https://real-time-news-data.p.rapidapi.com/search",
        params: {
          query: "India",
          country: "IN",
          lang: "en",
        },

        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setNewsData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>Latest News about India</h2>
      <div className="card-container">
        {newsData.slice(0, 10).map((article, index) => (
          <div className="card" key={index}>
            <h3>{article.title}</h3>
            <img src={article.photo_url} alt="img" />
            <p>{article.published_datetime_utc}</p>
            <p>
              Source:{" "}
              <a
                href={article.source_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="source-logo"
                  src={article.source_logo_url}
                  alt={article.source}
                />
              </a>
            </p>

            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsContent;
