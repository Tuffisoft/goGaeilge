import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "./contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function BlogPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        setPost(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load the blog post.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post || !post.fields) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="blog-post flex flex-col justify-center items-center min-h-screen">
      <div className="image w-32">
        <img
          src={post.fields.picture.fields.file.url}
          alt={post.fields.title}
        />
      </div>
      <h2 className="my-4 font-bold text-2xl text-ggPurple">
        {post.fields.title}
      </h2>
      <div className="content px-16 leading-7 text-lg">
        {documentToReactComponents(post.fields.content)}
      </div>
    </div>
  );
}
