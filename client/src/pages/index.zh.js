import React from 'react';

import Layout from '../layouts/en';

import LandingPageZh from '../pages/LandingPage/LandingPage.zh';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <LandingPageZh/>
    </Layout>
  );
}