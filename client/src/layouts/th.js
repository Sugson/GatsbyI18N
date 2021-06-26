import React from 'react';
import Layout from './index';
import { addLocaleData } from 'react-intl';
import th from 'react-intl/locale-data/th';
import 'intl/locale-data/jsonp/th';

addLocaleData(th);

export default (props) => (
  <Layout
    {...props}
  />
);