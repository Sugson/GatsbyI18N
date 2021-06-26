import React from 'react';

import Layout from '../layouts/th';

import Page2Th from './page2/page2.th';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <Page2Th lang={props.location}/>
    </Layout>
  );
}