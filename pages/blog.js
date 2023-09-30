import React, { useEffect, useState } from 'react'
import styles from "../src/app/ Blog.module.css"
import Link from 'next/link'
import "../styles/Blog.module.css"
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    console.log('blogs', blogs)

    useEffect(() => {
        console.log("useeffect is running");
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setBlogs(parsed)
            })
    }, [])

    return <div className={styles.container}>
        <main className={styles.main}>
            {blogs.map((blogitem) => {
                return (
                    <div key={blogitem.slug}>
                        <Link href={`/blogpost/${blogitem.slug}`}>
                            <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
                        <p className={styles.blogItemp}>{blogitem.content.slice(0, 150)}...</p>
                    </div>
                )
            })}
        </main>
    </div>
};

export default Blog;