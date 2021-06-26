import React from 'react';

import Layout from '../layouts/en';

import LandingPageTh from '../pages/LandingPage/LandingPage.th';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <LandingPageTh/>
    </Layout>
  );
}