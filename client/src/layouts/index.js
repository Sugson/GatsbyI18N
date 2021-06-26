import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from 'gatsby'
import { IntlProvider } from 'react-intl';
import 'intl';

import MyTopBar from '../components/MyTopBar/MyTopBar';


import {createMuiTheme,ThemeProvider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import IndexStyle from './IndexStyle';
import './index.css';

const theme = createMuiTheme({
});


const useStyles = makeStyles(IndexStyle);

export default function Layout(props){
  const { children, location } = props;
  const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }      
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname;
        const { langs, defaultLangKey } = data.site.siteMetadata.languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
        /*
        console.log("children",children);
        console.log("location",location);
        console.log("data",data);
        console.log("url",url);
        console.log("langs",langs);
        console.log("defaultLangKey",defaultLangKey);
        console.log("langKey",langKey);
        console.log("getCurrentLangKey",getCurrentLangKey);
        console.log("homeLink",homeLink);
        console.log("langsMenu",langsMenu);
        console.log("IntlProvider",IntlProvider);
        */
        return (
          <IntlProvider
            locale={langKey}
          >
            <ThemeProvider theme={theme}>
              <Helmet
                title="Gatsby Default Starter"
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              />
              {/*<Header langs={langsMenu} />*/}
              <MyTopBar langs={langsMenu}/>
              <div className={classes.TopBox}></div>
              {children}
            </ThemeProvider>
          </IntlProvider>
        )
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.func,
}

