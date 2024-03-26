const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const { data } = await graphql(`

        query Posts {
            allWpPost {
                nodes {
                    slug
                }
            }

            allWpCategory {
                nodes {
                    slug
                    name
                }
            }
        }
        
    `) 

    console.log(data);

    data.allWpPost.nodes.forEach(node => {
        actions.createPage({
            path: '/product/' + node.slug,
            component: path.resolve('./src/templates/product-template.js'),
            context: { slug: node.slug}
        })
    });

    data.allWpCategory.nodes.forEach(node => {
        actions.createPage({
            path: '/category/' + node.slug,
            component: path.resolve('./src/templates/category-template.js'),
            context: { slug: node.slug}
        })
    });

}