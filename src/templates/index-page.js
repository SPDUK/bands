import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Navbar from '../components/navbar/navbar';
import Layout from '../components/Layout';
import Features from '../components/Features';
import NewsRoll from '../components/newsroll/newsroll';
import Hero from '../components/hero/hero';

export const IndexPageTemplate = ({
  background,
  heroTitle,
  heading,
  heroLink,
  mainpitch,
  description,
  intro,
  socialLinks,
  brand,
  blogLimit,
}) => (
  <div>
    <Navbar brand={brand} socialLinks={socialLinks} />
    <Hero background={background} heroLink={heroLink} heroTitle={heroTitle} />
    <section className="has-background-dark section section--gradient has-text-light">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2 has-text-light">
                      Latest News
                    </h3>
                    {/* specify limit of how many items to display on the homepage */}
                    <NewsRoll limit={blogLimit} />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/news">
                        Read more
                      </Link>
                    </div>
                  </div>
                  <div className="tile has-text-light">
                    <h1 className="title has-text-light">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle has-text-light">
                      {mainpitch.description}
                    </h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2 has-text-light">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  background: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitle: PropTypes.string,
  heading: PropTypes.string,
  heroLink: PropTypes.object,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  brand: PropTypes.string,
  socialLinks: PropTypes.array,
  blogLimit: PropTypes.number,
};

const IndexPage = ({ data }) => {
  const {
    frontmatter: {
      background,
      heroTitle,
      heading,
      heroLink,
      mainpitch,
      description,
      intro,
      socialLinks,
      brand,
      blogLimit,
    },
  } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        background={background}
        heroTitle={heroTitle}
        heading={heading}
        heroLink={heroLink}
        mainpitch={mainpitch}
        description={description}
        intro={intro}
        socialLinks={socialLinks}
        brand={brand}
        blogLimit={blogLimit}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        brand
        socialLinks {
          url
          icon {
            childImageSharp {
              fluid(maxWidth: 264, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        heading
        background
        blogLimit
        mainpitch {
          title
          description
        }
        heroTitle
        heroLink {
          url
          text
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
