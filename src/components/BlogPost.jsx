import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft } from "react-icons/fa";
import { getMarkdownPostById } from "../utils/markdownLoader";
import AudioPlayer from "./AudioPlayer";

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = getMarkdownPostById(postId);

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="post-not-found">
          <h1>Post Not Found</h1>
          <p>Sorry, we couldn't find the post you're looking for.</p>
          <button onClick={() => navigate("/blog")} className="back-button">
            <FaArrowLeft />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <button onClick={() => navigate("/blog")} className="back-button">
        <FaArrowLeft />
        Back to Blog
      </button>

      <article className="blog-post-full">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>

          <div className="post-meta">
            <span className="meta-item">
              <FaCalendarAlt />
              {post.date}
            </span>
            <span className="meta-item">
              <FaUser />
              {post.author}
            </span>
            <span className="meta-item">
              <FaTag />
              {post.readTime}
            </span>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">
                  <FaTag />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Audio Player */}
          {post.audioUrl && (
            <div className="post-audio">
              <AudioPlayer
                audioUrl={post.audioUrl}
                title={`Listen to: ${post.title}`}
              />
            </div>
          )}
        </header>

        <div className="post-content markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
