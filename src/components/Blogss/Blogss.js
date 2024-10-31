import React from "react";
import Particle from "../Particle";
import BlogssCards from "./BlogssCards";
import { blogs } from "./BlogsData";

function Blogss() {
  return (
    <div className="bg-gray-900 text-white py-20 px-4">
      <Particle />
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          My Recent <span className="text-purple-500">Works</span>
        </h1>
        <p className="text-gray-300 mb-8">
          Here are a few blogs I've worked on recently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogssCards
              key={blog.id}
              title={blog.title}
              content={blog.content}
              summary={blog.summary}
              author={blog.author}
              publicationDate={blog.publicationDate}
              lastUpdatedDate={blog.lastUpdatedDate}
              tags={blog.tags}
              categories={blog.categories}
              readingTime={blog.readingTime}
              featuredImage={blog.featuredImage}
              keywords={blog.keywords}
              status={blog.status}
              viewsCount={blog.viewsCount}
              relatedPosts={blog.relatedPosts}
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogss;
