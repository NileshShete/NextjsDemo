import styles from "./page.module.css";
import Head from "next/head";
import Layout from "../../component/Layout";
export default function Home() {
  return (
    <>
      <Head>
        <title>Nirmiti Construction</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <main className={styles.main}>
            <div className={styles.imagewrap}>
              {/* <Image
                className={style.myImg}
                src="/homeimg.jfif"
                width={237}
                height={158}
              /> */}
              <img className={styles.myImg} src="/homeimg.jfif" width={237} height={158} alt="hunting coder" />

            </div>
            <div className="blogs">
              <span className="mySpan">Popular Blogs</span>
              <div >
                <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
                <p>JavaScript is the language used to design logic for the web</p>
                <button className={styles.btn}>Read More</button>
              </div>
              <div >
                <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
                <p className={styles.p}>JavaScript is the language used to design logic for the web</p>
                <button className={styles.btn}>Read More</button>
              </div>
              <div >
                <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
                <p>JavaScript is the language used to design logic for the web</p>
                <button className={styles.btn}>Read More</button>
              </div>
            </div>
          </main>
        </main>
      </Layout>


      
    </>
  );
}
