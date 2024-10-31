import React from "react";
import { useParams } from "react-router-dom"; 
import { blogs } from "./BlogsData"; 
import Particle from "../Particle";

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center text-2xl text-red-600 my-20">Blog not found</h2>;
  }




  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white my-20 rounded-lg shadow-lg">
      <Particle />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img
        src={blog.featuredImage}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-300 text-lg leading-relaxed mb-4">{blog.content}</p>

      <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
        <span>By {blog.author}</span>
        <span>Published on {blog.publicationDate}</span>
        <span>Last updated on {blog.lastUpdatedDate}</span>
      </div>

      <div className="text-gray-300 text-sm mb-4">
        <span>Reading Time: {blog.readingTime}</span>
      </div>

      <div className="flex flex-wrap mb-4">
        {blog.tags.map((tag, index) => (
          <span key={index} className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap mb-4">
        {blog.categories.map((category, index) => (
          <span key={index} className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs mr-2 mb-2">
            {category}
          </span>
        ))}
      </div>

      <div className="text-gray-400 text-sm mb-4">
        <span>Views: {blog.viewsCount}</span>
      </div>

      {/* <div className="space-x-4 mt-4">
        {blog.relatedPosts.length > 0 && (
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Related Posts:</h3>
        )}
        {blog.relatedPosts.map((relatedId) => {
          const relatedBlog = blogs.find((b) => b.id === relatedId);
          return relatedBlog ? (
            <div
              key={relatedId}
              onClick={() => handleClick(relatedId)} // Pass relatedId as an argument
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition duration-300 cursor-pointer mr-2"
            >
              {relatedBlog.title}
            </div>
          ) : null;
        })}
      </div> */}
    </div>
  );
}

export default BlogDetail;
