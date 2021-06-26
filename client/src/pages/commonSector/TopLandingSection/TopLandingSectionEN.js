import React from "react";
import PropTypes from "prop-types";

import Carousel from "react-material-ui-carousel"

import MyParallax from '../../../components/MyParallax/MyParallax';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TopLandingSectionStyle from "../../../layouts/SectionStyle/TopLandingSectionStyle";


const useStyles = makeStyles(TopLandingSectionStyle);

export default function TopLandingSectionEn(props){
  const classes = useStyles();

  const settings = {
    autoPlay:true,
    animation:"fade",
    indicators:true,
    timeout:500,
    cycleNavigation:true,
    navButtonsAlwaysVisible:true
  };

  return(
    <Carousel {...settings}>
      {[
        <MyParallax filter image={require("../../../assets/img/1.png")} />,
        <MyParallax filter image={require("../../../assets/img/2.png")} />
      ]}
    </Carousel>
  );
}