import React from "react"
import { format, formatDistance, differenceInDays } from "date-fns";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";


function BlogPost(props) {
    const {
        title,
        mainImage,
        categories,
        publishedAt
    } = props;


    return (
        <div id="blog-post" className="bg-gray-600 h-100 mt-2">
            <div className="relative">
                <div className="absolute h-full w-full flex items-center justify-center p-8">

                    <div className="bg-white bg-opacity-70 rounded-lg p-12">
                        <h2 className="text-2xl lg:text-4xl mb-4 text-black">
                            {title}
                        </h2>
                        <div className="mb-3">
   
                            <h4 className="text-gray-900">Categories:</h4>
                            {categories && categories.length > 0 && (
                                <ul className="flex flex-row list-none">
                                    {categories.map(category => (
                                        <li key={category._id}>
                                            <button type="button" className="flex p-1.5 mr-1 mb-1 text-sm text-center rounded-lg text-gray-900 hover:text-white border border-gray-600 hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tag-fill mr-1" viewBox="0 0 16 16">
                                                    <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                                                    <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                                                </svg> {category.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {publishedAt && (
                            <div className="flex flex-row mt-1 italic text-sm text-gray-700">
                                <h3 className="text-sm pr-1">Published:</h3>
                                {differenceInDays(new Date(publishedAt), new Date()) > 3
                                    ? formatDistance(new Date(publishedAt), new Date())
                                    : format(new Date(publishedAt), "MMMM do yyyy")}
                            </div>
                        )}
                    </div>
                </div>

                {props.mainImage && mainImage.asset && (
                    <img
                        id="blog-post-img"
                        className="w-full object-cover rounded-t"
                        style={{ height: "50vh", width: "100vw" }}
                        src={imageUrlFor(buildImageObj(mainImage))
                            .width(1200)
                            .height(Math.floor((9 / 16) * 1200))
                            .fit("crop")
                            .url()}
                        alt={mainImage.alt}
                    />
                )}
            </div>





        </div >
    )
}

export default BlogPost;

