import React, { useEffect, useState } from "react";
// import { format, formatDistance, differenceInDays } from "date-fns";

export default function BlogCardExternal() {
    const [posts, setPosts] = useState([]);
    const fetchPost = async () => {
        const response = await fetch(
            "https://dev.to/api/articles?username=kwing25"
        );
        const data = await response.json();
        setPosts(data);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div id="blog-card-external" className="container">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

                {posts.map((post) => (
                    <a href={post.url} className="block bg-[#ff006e]/50 shadow-xl rounded-xl">
                        <img src={post.cover_image} alt="post-cover__image" className="object-cover w-full h-56 shadow-xl rounded-xl" />
                        <div className="p-4">
                            {posts.length > 0 && (
                                <ul className="flex justify-start gap-2">
                                    {post.tag_list.map((tag) => (
                                        <li key={tag} className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800"> {tag} </li>
                                    ))}
                                </ul>
                            )}

                            <h4 className="pt-2 pb-3 text-xl">{post.title}</h4>
                            <p className="mt-2 text-gray-500">
                                {post.description}
                            </p>
                            {/* <p>{post.published_at}</p> */}

                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}