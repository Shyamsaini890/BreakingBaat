import React, { useEffect, useState } from "react";
import defaultImage from "../images/defaultImage1.png";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsItem = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const articlesPerPage = 6;

  document.title = `BreakingBaat - ${
    props.category.charAt(0).toUpperCase() + props.category.slice(1)
  }`;

  useEffect(() => {
    fetchArticles();
  }, [props.category,props.apiKey]);

  const fetchArticles = async (page = 1) => {
    try {
      props.setProgress(10);
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&pageSize=${articlesPerPage}&apiKey=${props.apiKey}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      props.setProgress(30);
      const data = await res.json();
      props.setProgress(60);
      if (data && data.articles) {
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        setTotalResults(data.totalResults);
        props.setProgress(80);
      } else {
        throw new Error("Invalid data structure");
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
    props.setProgress(100);
  };

  const fetchMoreData = () => {
    if (articles.length < totalResults) {
      setPage(page + 1);
      fetchArticles(page + 1);
    }
  };

  if (loading && page === 1) {
    return (
      <div className="flex flex-col justify-center items-center h-[85vh]">
        <h1 className="text-xl">Loading</h1>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-[85vh]">
        <h1 className="text-xl">Error</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      {articles.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[85vh]">
          <h1 className="text-xl">No articles found</h1>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={
            <div className="flex justify-center items-center">
              <span className="loading loading-infinity loading-lg"></span>
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2  w-[90%] mx-auto lg:grid-cols-3">
            {articles.map((article, index) => (
              <div
                key={index}
                className="card w-full bg-base-100 shadow-xl mb-4 "
              >
                <span className=" absolute flex justify-end w-full  ">
                  <p className="  bg-red-700 text-white font-semibold text-base px-1 rounded-bl-xl">
                    {article.source.name}
                  </p>
                </span>
                <figure>
                  <img
                    src={article.urlToImage || defaultImage}
                    alt={article.title}
                    className="w-full sm:h-[300px] h-auto"
                  />
                </figure>
                <div className="card-body p-3">
                  <h2 className="card-title text-justify text-lg font-semibold sm:text-base md:text-lg lg:text-xl">
                    {article.title}
                  </h2>
                  <p className="text-sm sm:text-xs md:text-sm lg:text-base">
                    {article.description}
                  </p>
                  <p>
                    {article.author === null ? "" : `By ${article.author} `}
                    {new Date(article.publishedAt).toGMTString()}{" "}
                  </p>
                  <div className="card-actions  justify-start">
                    <Link
                      to={article.url}
                      className="p-1 bg-primary text-black rounded-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default NewsItem;
