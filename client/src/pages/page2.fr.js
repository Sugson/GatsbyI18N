import React from 'react';

import Layout from '../layouts/fr';

import Page2Fr from './page2/page2.fr';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <Page2Fr lang={props.location}/>
    </Layout>
  );
}