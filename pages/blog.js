import React, { useEffect, useState } from 'react'
import styles from "../src/app/ Blog.module.css"
import Link from 'next/link'
import "../styles/Blog.module.css"
const Blog = (props) => {
    const [blogs, setBlogs] = useState(props.allBlogs);
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

export async function getServerSideProps(context) {
    console.log('context', context)
    console.log("useeffect is running");
    let data = await fetch('http://localhost:3000/api/blogs')
    let allBlogs=await data.json()
    return { props: { allBlogs } }
}


export default Blog;