import React from 'react';

import Layout from '../layouts/zh';

import Page1Zh from './page1/page1.zh';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <Page1Zh lang={props.location}/>
    </Layout>
  );
}