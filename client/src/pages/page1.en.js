import React from 'react';

import Layout from '../layouts/en';

import Page1En from './page1/page1.en';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <Page1En lang={props.location}/>
    </Layout>
  );
}