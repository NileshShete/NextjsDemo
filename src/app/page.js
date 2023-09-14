import styles from "./page.module.css";
import Link from "next/link";
import Head from "next/head";
import style from "./home.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Nirmiti Construction</title>
      </Head>
    <style >
        {
          `
          h2{
            font-size: 38px;
          }
          h3{
            font-size: 28px;
          }`
        }
      </style>

      <nav className={styles.mainnav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.imagewrap}>
          <Image
            className={style.myImg}
            src="/homeimg.jfif"
            width={237}
            height={158}
          />
        </div>
        <div className="blogs">
          <span className="mySpan">Popular Blogs</span>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>
    </>
  );
}
