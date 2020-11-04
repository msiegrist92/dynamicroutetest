import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout.js';
import { getBooks } from '../api/getBooks.js';

//this is just the component for the home page
export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className={styles.title, styles.description}>
          This is a test application for dynamic routing
        </h1>
        <h2 className={styles.description}>This is another header element</h2>
        <h3 className={styles.description}>This element now renders children</h3>
      </div>
    </Layout>
  )
}
