import axios from 'axios';
import Layout from '../../components/layout.js';
import { getIds, getTitles, getChapters } from '../../api/getBooks.js';

export default function Book({ title, chapters }){
  const chapterList = chapters.map((chap) => {
    return <li key={chapters.indexOf(chap)}>{chap.chapter}</li>
  })
  return (
    <Layout>
      <h1>{title[0].title}</h1>
      <ul>
        {chapterList}
      </ul>
    </Layout>
  )
}

export async function getStaticProps({ params }){

    return {
      props : {
        title: await getTitles(params).then((res) => {
          return res
        }),
        chapters: await getChapters(params).then((res) => {
          return res
        })
      }
    }
}

export async function getStaticPaths(){

  return {
    paths:  await getIds().then((res) => {
      console.log(res)
      return res
    }),
    fallback: false
  }
}
