const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const { data } = await graphql(`

        query Posts {
            allWpPost {
                nodes {
                    slug
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

}