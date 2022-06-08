import React from "react";
import styles from "../../styles/Home.module.css";
import * as fs from "fs";

const Slug = (props) => {
  const blogs = props.myBlog;
  function createMarkup(c) {
    return {__html: c };
  }

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div key={blogs.slug} className="blogs">
            <div className={styles.blogItems}>
              <h1> {blogs && blogs.title}</h1>
                {blogs && <div dangerouslySetInnerHTML={createMarkup(blogs.content)}></div>}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

//Server Side Rendering
// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//   const myBlog = await res.json()

//   // Pass data to the page via props
//   return { props: { myBlog } }
// }

// Static Side Generation

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "learn-NextJs" } },
      { params: { slug: "learn-Python" } },
      { params: { slug: "learn-Swift" } },
    ],
    fallback: false, // false or 'blocking'
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`);
  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}

export default Slug;
