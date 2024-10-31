import React from "react";
import { useNavigate } from "react-router-dom";

function BlogssCards({
  id,
  title,
  summary,
  featuredImage,
  readingTime,
  author,
  publicationDate
}) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={featuredImage}
        alt={`${title} thumbnail`}
        className="w-full h-48 object-contain"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-400 mb-4 text-sm">{summary}</p>
        <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
          <span>By {author}</span>
          <span>{publicationDate}</span>
        </div>
        <div className="text-gray-300 text-sm mb-4">{readingTime} read</div>
        <button
          onClick={handleReadMore}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none transition duration-300"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogssCards;
