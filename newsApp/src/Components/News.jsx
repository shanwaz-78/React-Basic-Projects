import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error while fetching data");
        }
        const jsonData = await response.json();
        setData(jsonData.articles);
        console.log(jsonData.articles);
      } catch (error) {
        console.log("Error while fetching data:", error);
        setError(error.message);
      }
    };

    fetchData(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
  }, []);

  return (
    <div className="container">
      {error && <div className="error text-center">{error}</div>}
      <h2 className="text-center pt-3">
        Latest <span className="badge bg-danger p-20">News</span>
      </h2>
      <div className="row">
        {data.length > 0 ? (
          data.map(({ description, title, urlToImage, url, source }, index) => (
            <div className="col-md-4 p-2" key={source?.id || index}>
              <NewsItem
                description={description}
                title={title}
                urlToImage={urlToImage}
                articleURL={url}
              />
            </div>
          ))
        ) : (
          <div className="text-center">Loading....</div>
        )}
      </div>
    </div>
  );
};

export default News;
