import axios from 'axios';
import Layout from '../../components/layout.js';
import { getIds, getTitles } from '../../api/getBooks.js';

export default function Book({ paths }){
  console.log(paths);
  return (
    <Layout>
      <h1>This is just a placeholder to test that the routing is working.</h1>
      <h2>This contains a prop! {paths[0].title}</h2>
    </Layout>
  )
}


export async function getStaticProps({ params }){

    return {
      props : {
        paths: await getTitles(params).then((res) => {
          return res
        })
      }
    }
}


export async function getStaticPaths(){

  return {
    paths:  await getIds().then((res) => {
      return res
    }),
    fallback: false
  }
}
