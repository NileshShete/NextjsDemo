import React, { useEffect, useState } from 'react'
import styles from "../src/app/ Blog.module.css"
import Link from 'next/link'
import "../styles/Blog.module.css"
import InfiniteScroll from 'react-infinite-scroll-component';
import * as fs from 'fs';

const Blog = (props) => {
    const [blogs, setBlogs] = useState(props.allBlogs);
    const [count, setCount] = useState(2)

    const fetchData = async () => {
        let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
        setCount(count + 2)
        let data = await d.json()
        setBlogs(data)
    };

    return <div className={styles.container}>
        <main className={styles.main}>
            <InfiniteScroll
                dataLength={blogs.length} //This is important field to render the next data
                next={fetchData}
                hasMore={props.allCount !== blogs.length}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {blogs.map((blogitem) => {
                    return (
                        <div key={blogitem.slug}>
                            <Link href={`/blogpost/${blogitem.slug}`}>
                                <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
                            <p className={styles.blogItemp}>{blogitem.content.slice(0, 150)}...</p>
                        </div>
                    )
                })}
            </InfiniteScroll>
        </main>
    </div>
};

// export async function getServerSideProps(context) {
//     let data = await fetch('http://localhost:3000/api/blogs')
//     let allBlogs = await data.json()
//     return { props: { allBlogs } }
// }

export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata");
    let allCount = data.length;
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < 2; index++) {
        const item = data[index];
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }
    return {
        props: { allBlogs, allCount }, 
    }
}

export default Blog;