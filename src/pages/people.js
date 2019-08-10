import React from 'react';
import Layout from '../components/Layout';
import People from '../sections/People';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/Seo';

const PeoplePage = () => (
  <Layout>
    <SEO title="People" />
    <Header />
    <People />
    <Footer />
  </Layout>
);

export default PeoplePage;
