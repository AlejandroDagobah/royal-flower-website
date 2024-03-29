/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {
  siteMetadata: {
    title: `Royal Flowers`,
    siteUrl: `https://royalflowers.netlify.app/`
  },
  plugins: [
    
    
    "gatsby-plugin-postcss", "gatsby-plugin-image", 
    
    
  "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  
  "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  
  {
    resolve: 'gatsby-source-wordpress',

    options: {
      url:
      // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
        
        `http://royal-flowers-wp.local/wp/graphql`,

      develop: {
        //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
        hardCacheMediaFiles: true,
      },
      type: {
        Post: {
          limit:
            process.env.NODE_ENV === `development`
              ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                50
              : // and we don't actually need more than 5000 in production for this particular site
                5000,
        },
      },
    },
  }

]
};