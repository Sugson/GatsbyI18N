const MyLangPaneStyle = (theme) =>({
  LanguagePage: {
    textDecoration:"none",
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"center",
    marginTop:"4px",
    marginRight:"4px"
  },
  FlagsList:{
    paddingTop:"2px",
  },
  FlagItem:{
    display:"inline",
    padding:"4px 2px 0px 2px",
    marginLeft:"2px",
  },
  FlagSelected:{
    backgroundColor:"rgba(255,255,255,1)"
  },
  SelectedFlag:{
    marginTop:"1px",
    textDecoration:"none",
  },
  Modal:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  ModalPane:{
    top: `50%`,
    left: `50%`,
    width: "200px",
    transform: `translate(-50%, -50%)`,
    position: 'absolute',    
    backgroundColor: theme.palette.background.paper,
    padding: "10px",
    border:"0px",
  },
  ModalTitle:{ 
    marginBottom:"16px",
    fontSize:"1.5rem",
  },
  ModalDescription:{
    marginBottom:"1px",    
    textDecoration:"none",
  },
  LangBox:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    marginTop:"8px",
  },
  LangLink:{
    textDecoration:"none",
  }
});

export default MyLangPaneStyle;