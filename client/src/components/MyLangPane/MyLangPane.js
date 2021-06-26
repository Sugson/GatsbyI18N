import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { Box, Hidden, Modal } from '@material-ui/core';
import Flags from 'country-flag-icons/react/3x2';

import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import MyLangPaneStyle from '../../layouts/ComponentStyle/MyLangPaneStyle';

const useStyles = makeStyles(MyLangPaneStyle);

function getSmallFlag(lang){
  switch(lang){
    case 'th':
      return(
        <Flags.TH title="TH" style={{width:"24px"}}/>
      );
    case 'zh':
      return(
        <Flags.CN title="CN" style={{width:"24px"}}/>
      );
    case 'ja':
      return(
        <Flags.JA title="JA" style={{width:"24px"}}/>
      );
    case 'pt':
      return(
        <Flags.PT title="PT" style={{width:"24px"}}/>
      );
    case 'fr':
      return(
        <Flags.FR title="FR" style={{width:"24px"}}/>
      );
    case 'de':
      return(
        <Flags.DE title="DE" style={{width:"24px"}}/>
      );
    default :
      return( 
        <Flags.GB title="EN" style={{width:"24px"}}/>
      );
  }
}

function getLargeFlag(lang){
  switch(lang){
    case 'th':
      return(
        <Flags.TH title="TH" style={{width:"40px"}}/>
      );
    case 'zh':
      return(
        <Flags.CN title="CN" style={{width:"40px"}}/>
      );
    case 'ja':
      return(
        <Flags.JA title="JA" style={{width:"40px"}}/>
      );
    case 'pt':
      return(
        <Flags.PT title="PT" style={{width:"40px"}}/>
      );
    case 'fr':
      return(
        <Flags.FR title="FR" style={{width:"40px"}}/>
      );
    case 'de':
      return(
        <Flags.DE title="DE" style={{width:"40px"}}/>
      );
    default :
      return( 
        <Flags.GB title="EN" style={{width:"40px"}}/>
      );
  }
}

function getLangFlag(lang){
  switch(lang){
    case 'th':
      return(
        <Box alignItems= 'center'> {getLargeFlag('th')} Thai </Box>
      );
    case 'zh':
      return(
        <Box alignItems= 'center'> {getLargeFlag('zh')} Chinese </Box>
      );
    case 'ja':
      return(
        <Box alignItems= 'center'> {getLargeFlag('ja')} Japan </Box>         
      );
    case 'pt':
      return(
        <Box alignItems= 'center'> {getLargeFlag('pt')} Portuguese </Box>          
      );
    case 'fr':
      return(
        <Box alignItems= 'center'> {getLargeFlag('fr')} French </Box>
      );
    case 'de':
    return(
        <Box alignItems= 'center'> {getLargeFlag('de')} German </Box>
      );
    default :
      return( 
        <Box alignItems= 'center'> {getLargeFlag('en')} English </Box>
      );
  }
}


export default function MyLangPane(props){
  const classes = useStyles();
  const {langs} = props;
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  
  const flagsList = langs.map(lang=>
    <Box
      className={clsx(
        classes.FlagItem,
        {[classes.FlagSelected]:lang.selected}
      )}
    >
      <Link to={lang.link} key={lang.langKey}>
        {getSmallFlag(lang.langKey)}
      </Link>
    </Box>
  );

  const selectedLang = langs.find(lang=>lang.selected===true);
  const selectedFlag = <Box className={classes.SelectedFlag}>{getLargeFlag(selectedLang.langKey)}</Box>;
  
  const langsList = langs.map(lang=>
    <Box className={classes.LangBox}>
      <Link to={lang.link} key={lang.langKey} className={classes.LangLink}>        
         {getLangFlag(lang.langKey)} 
      </Link>
    </Box>
  );

  return(
    <Box 
      className={classes.LanguagePage}
    >
      <Hidden smDown implementation="css">
        <Box className={classes.FlagsList}>
          {flagsList}
        </Box>
      </Hidden>
      <Hidden mdUp implementation="css">        
        <Box className={classes.FlagsList}>
          <Link to="#" onClick={handleOpen}>
            {selectedFlag}
          </Link>
        </Box>        
      </Hidden>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.Modal}
      >
        <div className={classes.ModalPane}>
          <h2 id="transition-modal-title" className={classes.ModalTitle}>Select Language</h2>
          <p id="transition-modal-description"className={classes.ModalDescription}>
            {langsList}
          </p>
        </div>
      </Modal>
    </Box>
  );

};

MyLangPane.propTypes = {
  langs:PropTypes.array
};