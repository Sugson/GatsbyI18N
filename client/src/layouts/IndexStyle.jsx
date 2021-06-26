const IndexStyle = (theme) =>({
  Layout:{

  },
  TopBox:{
    width: "100%",
    height: "30px",
    [theme.breakpoints.down('sm')]: {
      height: "38px",
      minWidth: "375px",
    },
  }
});


export default IndexStyle;