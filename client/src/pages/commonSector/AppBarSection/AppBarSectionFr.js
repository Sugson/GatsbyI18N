import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import MyAppBar from '../../../components/MyAppBar/MyAppBar';


import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBarSectionStyle from '../../../layouts/SectionStyle/AppBarSectionStyle';


const useStyles = makeStyles(AppBarSectionStyle);

export default function AppBarSectionEn(props){
  const classes = useStyles();

  const menus={
    type:'onHover', color:'transparent', lang:'',hoverColor:"primary",
    list:[
      {BText:'Page1',BTo:'/page1',BSub:[
        {to:'/page1#1',text:'page1-section1'},
        {to:'/page1#2',text:'page1-section2'}
      ]},{BText:'Page2',BTo:'/page2',BSub:[
        {to:'/page2#1',text:'page2-section1'},
        {to:'/page2#2',text:'page2-section2'},
        {to:'/page2#3',text:'page2-section3'},
        {to:'/page2#4',text:'page2-section4'}
      ]}
    ]
  };

  const socialList=[
    {link:<FacebookIcon />,id:"facebook-tooltip",title:"Follow us on facebook",href:"",alwaysShow:true},
    {link:<InstagramIcon />,id:"instagram-tooltip",title:"Follow us on instagram",href:"",alwaysShow:false},
    {link:<TwitterIcon />,id:"twitter-tooltip",title:"Follow us on twitter",href:"",alwaysShow:false},
    {link:<YouTubeIcon />,id:"youtube-tooltip",title:"Follow us on youtube",href:"",alwaysShow:false}
  ];

  return(
    <Box>
      <MyAppBar
        brand='MyWebSite'
        lang=''
        leftLinks={menus}
        rightLinks={''}
        socialLinks={socialList}       
        login={''}
        color="transparent"
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        fixed
      />
    </Box>
  );
}

