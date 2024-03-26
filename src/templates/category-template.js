import React from "react";
import Header from "../components/header";
import {GatsbyImage} from 'gatsby-plugin-image'
import info from "../info.json";
import ProductCard from "../components/product-card";
import Form from "../components/form";
import { graphql } from "gatsby";
import Slider from "../components/slider";
import Footer from "../components/footer";

export default function categoryTemplate({ data }){


    const productList = data.wpCategory.posts.nodes
    const collectionName = data.wpCategory.name
    return(
        <div>
            <Header/>
            <Slider productsList={productList}/>
            <Footer collection={collectionName}/>
        </div>
    )
}

export const query = graphql`
    query CategoryProducts($slug: String) {
        wpCategory(slug: {eq: $slug}) {
            name
            posts {
                nodes {
                    slug
                    title
                    featuredImage {
                        node {
                            gatsbyImage(width: 700, height: 1100)
                        }
                    }
                }
            }
        }
    }
`