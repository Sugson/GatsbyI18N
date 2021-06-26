import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default function MyLink(props){
  const {lang,to,children}=props;
  const newDes=lang+to;
  //console.log("newDes",newDes);
  return(
    <Link {...props} to={newDes} >
      {children}
    </Link>
  );
}


MyLink.propTypes = {
  children: PropTypes.func,
}





