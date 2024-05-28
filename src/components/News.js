import React from "react";
import NewsItem from "./NewsItem";

const News = (props) => {
  return (
    <div>
      <h1 className=" sm:text-2xl  text-lg  mx-auto  text-center">
        BreakingBaat - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines
      </h1>
      <NewsItem title="News" desc="Description" category={props.category} setProgress={props.setProgress} apiKey={props.apiKey} />
    </div>
  );
};

export default News;
