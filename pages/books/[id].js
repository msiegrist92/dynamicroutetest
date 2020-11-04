import axios from 'axios';
import Layout from '../../components/layout.js';
import { getBooks } from '../../api/getBooks.js';

export default function Book({ paths }){
  console.log(paths);
  return (
    <Layout>
      <h1>This is just a placeholder to test that the routing is working.</h1>
      <h2>This contains a prop! {paths[0].title}</h2>
    </Layout>
  )
}

//pass in object
export async function getStaticProps({ params }){
  console.log('params' + params)
  const paths = await axios.get(' https://the-one-api.dev/v2/book/' + params.id).then((res) => {
    console.log(res.data);
      const books =  res.data.docs.map(obj => {
        return {
            title: obj.name
        }
      })
      return books;
    }).catch((err) => {
      console.log(err);
    })
    console.log('props' + paths)
    return {
      props : {
        paths
      }
    }
}


export async function getStaticPaths(){

  const paths = await axios.get(' https://the-one-api.dev/v2/book').then((res) => {
    console.log(res.data.docs)
      const ids =  res.data.docs.map(obj => {
        return {
          params : {
            id : obj._id
          }
        }
      })
      console.log(ids);
      return ids;
    }).catch((err) => {
      console.log(err);
    })
    console.log('paths' + paths);
  return {
    paths,
    fallback: false
  }
}
