import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as fs from 'fs';


const Blog = (props) => {
  const blogs=props.allblogs;
  const buttonClick=()=>{ 
    <Link href={`/blogsposts/${blogs.slug}`}> </Link>
   };

  return (
    <div className={styles.container}>
      <main className={styles.main}>

    {  blogs.map((blogitem)=>{
      return <div key={blogitem.slug} className={styles.mainblogs}>
          <div className={styles.blogsdisplay}>
            <Link href={`/blogsposts/${blogitem.slug}`}>
            <h3>{blogitem.title}</h3></Link>
            <p>{blogitem.metadesc}...</p>
            <button onClick={buttonClick} className={styles.button}type="submit" >
          Read More
        </button>
          </div>
          </div>
       
    })}
       </main>
          </div>
  );
};

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch('http://localhost:3000/api/blogs')
//   const allBlogs = await res.json()

//   // Pass data to the page via props
//   return { props: { allBlogs } }
// }

// Static Side Generation
export async function getStaticProps() {

  let data=await fs.promises.readdir('blogdata')
  let myfile
  let allblogs=[];
  for (let index = 0; index < data.length; index++) {
   const item = data[index];
    myfile=await fs.promises.readFile(('blogdata/'+item))
    allblogs.push(JSON.parse(myfile))
  }
    return { props: { allblogs } }
}

export default Blog;
