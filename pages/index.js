import Link from 'next/link';
import css from "../styles.scss";
import Head from 'next/head';
import Error from 'next/error';
import Layout from '../components/Layout';
import Resume from '../components/Resume';
import Tools from '../components/Tools';
import Works from '../components/Works';

const Index = () => (
  <div>
   <Layout>
      <Resume/>
      <Tools/>
      <Works/>
   </Layout>
  </div>
)

export default Index