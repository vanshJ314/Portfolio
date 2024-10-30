// BlogDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import projects from "./BlogsData"; // Assuming projects data is stored separately

function BlogDetail() {
  const { id } = useParams();
  const blog = projects.find((project) => project.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <Container className="blog-detail">
      <h1>{blog.title}</h1>
      <img src={blog.imgPath} alt={blog.title} className="blog-image" />
      <p>{blog.description}</p>
      <a href={blog.ghLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
      {blog.demoLink && (
        <a href={blog.demoLink} target="_blank" rel="noopener noreferrer">
          Demo Link
        </a>
      )}
    </Container>
  );
}

export default BlogDetail;
