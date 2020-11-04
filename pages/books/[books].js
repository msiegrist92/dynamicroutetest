import axios from 'axios';
import Layout from '../../components/layout.js';
import { getBooks } from '../../api/getBooks.js';

export default function Book(){
  return (
    <Layout>
      <h1>This is just a placeholder to test that the routing is working.</h1>
    </Layout>
  )
}

export async function getStaticProps(){

}


export async function getStaticPaths(){

  const paths = await axios.get(' https://the-one-api.dev/v2/book').then((res) => {
      const books =  res.data.docs.map(obj => {
        return {
          params : {
            books : obj.name.replace(/\s/g, '').toLowerCase()
          }
        }
      })
      console.log(books);
      return books;
    }).catch((err) => {
      console.log(err);
    })

  return {
    paths,
    fallback: false
  }
}
