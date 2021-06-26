import React from 'react';

import Layout from '../layouts/zh';

import Page2Zh from './page2/page2.zh';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <Page2Zh lang={props.location}/>
    </Layout>
  );
}