import { useState, useEffect } from "react";
import { client } from "./contentful";

import LinkBoxBlog from "../components/LinkBoxBlog";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blogPost",
      })
      .then((response) => {
        setPosts(response.items);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog posts:", err);
        setError("Failed to fetch blog posts");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(posts);

  return (
    <div className="blog-list flex flex-col justify-center items-center">
      <h1 className="text-4xl text-ggPurple font-bold">Cúpla alt le léamh</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.sys.id} className="blog-post-preview">
              <LinkBoxBlog
                name={post.fields.title}
                link={`/léamh/${post.sys.id}`}
                image={post.fields.picture.fields.file.url}
              />
            </div>
          ))
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
    </div>
  );
}
