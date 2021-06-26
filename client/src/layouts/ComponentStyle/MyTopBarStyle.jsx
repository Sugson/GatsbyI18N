const MyTopBarStyle = (theme) => ({
  MyTopBar: {
    backgroundColor:"#1d2327",
    top:"0",
    left: "0",
    position: "fixed",
    width: "100%",
    height: "32px",
    zIndex: "99999",
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      height: "40px",
      minWidth: "375px",
    },
  },
  LeftPane:{
    display:"flex",
    flexGrow:"1",
    alignItems:"center",
    justifyContent:"flex-start",
  },
  CenterPane:{
    display:"flex",
    flexGrow:"1",
    alignItems:"center",
    justifyContent:"center",
  },
  RightPane:{
    display:"inline" ,
    justifyContent:"center",
    alignItems:"flex-end" ,
  }
})

export default MyTopBarStyle;