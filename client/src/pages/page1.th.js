import React from 'react';

import Layout from '../layouts/th';

import Page1Th from './page1/page1.th';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <Page1Th lang={props.location}/>
    </Layout>
  );
}