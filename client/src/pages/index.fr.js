import React from 'react';

import Layout from '../layouts/fr';

import LandingPageEn from '../pages/LandingPage/LandingPage.fr';


export default function Index({...props}){
  return(
    <Layout location={props.location}>
      <LandingPageEn lang={props.location}/>
    </Layout>
  );
}