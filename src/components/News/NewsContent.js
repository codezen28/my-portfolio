import axios from "axios";
import React, { useEffect, useState } from "react";

import NewsCard from "../Cards/NewsCard";
import { Container, Desc, TimelineSection, Title, Wrapper } from "./NewsStyle";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
const NewsContent = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: "GET",
        url: "https://cricbuzz-cricket.p.rapidapi.com/news/v1/index",

        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setNewsData(response.data.storyList);
        // console.log(response.data.storyList.story);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    // <div className="news-container">
    //   <h2>Latest News about India</h2>
    //   <div className="card-container">
    //     {newsData.slice(0, 10).map((article, index) => (
    //       <div className="card" key={index}>
    //         <h3>{article.title}</h3>
    //         <img src={article.photo_url} alt="img" />
    //         <p>{article.published_datetime_utc}</p>
    //         <p>
    //           Source:{" "}
    //           <a
    //             href={article.source_url}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img
    //               className="source-logo"
    //               src={article.source_logo_url}
    //               alt={article.source}
    //             />
    //           </a>
    //         </p>

    //         <a href={article.link} target="_blank" rel="noopener noreferrer">
    //           Read More
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <Container id="news">
      <Wrapper>
        <Title>Latest News</Title>
        <Desc>Here are top 10 latest Cricket news.</Desc>
        <TimelineSection>
          <Timeline>
            {newsData
              .filter((article) => article.story)
              .slice(0, 10)
              .map((article, index) => (
                <TimelineItem>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <NewsCard article={article} />
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {index !== article.length && (
                      <TimelineConnector style={{ background: "#854CE6" }} />
                    )}
                  </TimelineSeparator>
                </TimelineItem>
              ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default NewsContent;
