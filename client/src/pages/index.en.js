import React from 'react';

import Layout from '../layouts/en';

import LandingPageEn from '../pages/LandingPage/LandingPage.en';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <LandingPageEn lang={props.location}/>
    </Layout>
  );
}