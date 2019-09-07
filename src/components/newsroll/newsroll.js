import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery, navigate } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import './newsroll.scss';

class NewsRoll extends React.Component {
  render() {
    const { data, limit } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    // limit posts to N based on the CMS options
    const limitedPosts = posts && limit ? posts.slice(0, limit) : posts;

    return (
      <div className="newsroll">
        {posts &&
          limitedPosts.map(({ node: post }) => (
            <div
              onClick={() => navigate(post.fields.slug)}
              className="newsroll-item is-parent"
              key={post.id}
            >
              <article
                className={`tile is-child has-text-light ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                </header>
                <footer className="newsroll-item-footer">
                  <div className="newsroll-item-meta">
                    <Link
                      className=" is-size-6 has-text-light has-text-weight-bold"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <i className="is-size-7">{post.frontmatter.date}</i>
                  </div>
                  <p>{post.excerpt}</p>
                  <Link
                    className=" newsroll-item-link button has-text-primary is-text "
                    to={post.fields.slug}
                  >
                    Keep Reading →
                  </Link>
                </footer>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

NewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  limit: PropTypes.number,
};

export default ({ limit }) => (
  <StaticQuery
    query={graphql`
      query NewsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <NewsRoll data={data} limit={limit} />}
  />
);
