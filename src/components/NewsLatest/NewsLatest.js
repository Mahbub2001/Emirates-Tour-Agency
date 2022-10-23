import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BigNewsCart from "./BigNewsCart";
import NewsCart from "./NewsCart";
import "./NewsLatest.Module.css";

const NewsLatest = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://emirates-agency-server.vercel.app/latest")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="mt-28">
      <div className="flex flex-row justify-center">
        <div className="special-inner">
          <h1 className="text-5xl font-bold text-gray-700">Latest News</h1>
          <hr className="w-28 mt-5 h-2 bg-blue-800" />
          <div className="grid lg:grid-cols-2 md:grid-cols">
            <div>
              {news?.slice(0, 3).map((n) => (
                <NewsCart key={n.id} data={n}></NewsCart>
              ))}
              <Link to="/latestNews">
                <button
                  type="button"
                  class="mt-5 ml-5 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Read More
                </button>
              </Link>
            </div>
            <div className="md:flex justify-center justify-items-center items-center gap-5">
              {news.slice(2, 4).map((n) => (
                <BigNewsCart key={n.id} data={n}></BigNewsCart>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatest;
