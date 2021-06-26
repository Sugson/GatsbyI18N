import React from 'react';

import Layout from '../layouts/en';

import Page2En from './page2/page2.en';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <Page2En lang={props.location}/>
    </Layout>
  );
}