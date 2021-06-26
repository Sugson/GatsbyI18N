import React from 'react';

//component
import Box from '@material-ui/core/Box';
import {Hidden} from '@material-ui/core/Hidden';
import MyLangPane from '../MyLangPane/MyLangPane';


//style
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MyTopBarStyle from '../../layouts/ComponentStyle/MyTopBarStyle';


const useStyles = makeStyles(MyTopBarStyle);

export default function MyTopBar(props){
  const {leftPane,centerPane,RightPane,styleName,langs} = props;
  const classes =useStyles();
  return(
    <Box
      className={clsx({styleName:styleName!==undefined},classes.MyTopBar)}
    >
      {
        leftPane!==undefined &&
        <Box 
          className={classes.LeftBox}
        >
          {leftPane}
        </Box>
      }
      {
        centerPane!==undefined &&
        <Box 
          className={classes.CenterBox}
        >
          {
            leftPane===undefined?
            centerPane:
            <Hidden smDown>
              {centerPane}
            </Hidden> 
          }
        </Box>
      }
      <Box
        flexGrow={leftPane===undefined&&centerPane===undefined?1:0} 
        className={classes.RightBox}
      >
        {RightPane!==undefined?RightPane:null}
        {langs!==undefined?<MyLangPane langs={langs}/>:null}
      </Box>
    </Box>
  )
};