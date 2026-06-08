import { blogPosts } from "../data.ts";

// In-depth technical writing. All posts shown together (no category split);
// link out to the original articles on masnun.com / masnun.rocks.
const posts = blogPosts.flatMap((group) => group.posts);

export function Writing() {
  return (
    <div className="writing">
      <div className="cards">
        {posts.map((post) => (
          <a
            key={post.url}
            className="card writing__post"
            href={post.url}
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="card__title">{post.title}</h4>
            <p className="card__note">{post.blurb}</p>
            <div className="project__tags">
              {post.tags.map((t) => (
                <span key={t} className="project__tag">
                  {t}
                </span>
              ))}
            </div>
            <span className="writing__read">Read on the blog ↗</span>
          </a>
        ))}
      </div>

      <div className="writing__more">
        <a
          className="btn btn--primary"
          href="http://masnun.rocks"
          target="_blank"
          rel="noreferrer"
        >
          More on masnun.rocks ↗
        </a>
        <a
          className="btn btn--ghost"
          href="https://masnun.com"
          target="_blank"
          rel="noreferrer"
        >
          More on masnun.com ↗
        </a>
      </div>
    </div>
  );
}
