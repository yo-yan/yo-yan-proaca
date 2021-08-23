// src/components/post-link.js
import React from "react"
import "../styles/style.css"

export default function PostLink({ post }) {
    const { title, updatedAt, image } = post;
    const description = post.description.description;

    return (
        <div className="post-link">
            <div>
                <img src={image.file.url} className="post-link-image" alt="post-cover"></img>
            </div>
            <div className="post-link-text">
                <h2>{title}</h2>
                <p className="post-link-body">{description}</p>
                <p className="post-link-date">{updatedAt}</p>
            </div>
        </div>
    )
}