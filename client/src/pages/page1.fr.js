import React from 'react';

import Layout from '../layouts/fr';

import Page1Fr from './page1/page1.fr';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <Page1Fr lang={props.location}/>
    </Layout>
  );
}