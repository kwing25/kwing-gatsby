import { Link } from "gatsby";
import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";

function BlogPostPreview(props) {
    return (

        <Link to={`/blog/${props.slug.current}`} className="flex justify-center items-center relative h-96 min-h-80 ">

            {props.mainImage && props.mainImage.asset && (
                <img className="absolute inset-0 object-cover w-full h-full" src={imageUrlFor(buildImageObj(props.mainImage))} alt={props.mainImage.alt} />
            )}

            <div className="relative rounded-xl">
                <div id="blog-preview-card-title" className="rounded-2xl mb-1">
                    <h3 className="goo my-2">{props.title}</h3>
                </div>

                <div className="pt-1 pb-4">
                    <p className="text-sm tracking-widest text-white">
                        {props.categories && props.categories.length > 0 && (
                            <div className="inline-flex">
                                {props.categories.map(category => (
                                    <div key={category._id} className="flex px-2 mx-2 mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tag-fill mr-1" viewBox="0 0 16 16">
                                            <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                                            <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                                        </svg> {category.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </p>
                </div>

    
            </div>

        </Link>
    );
}

export default BlogPostPreview;
