import React from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//import own library
import MyLink from '../MyLink/MyLink';
import MyDropdown from '../MyDropDown/MyDropDown';

// nodejs library that concatenates classes
import clsx from 'clsx';
import withStyles from "@material-ui/core/styles/withStyles";
import MyAppBarStyle from "../../layouts/ComponentStyle/MyAppBarStyle";

class MyAppBar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      leftDrawerOpen: false,
      rightDrawerOpen: false,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
    this.handleLeftDrawerOpen = this.handleLeftDrawerOpen.bind(this);
    this.handleLeftDrawerClose = this.handleLeftDrawerClose.bind(this);
    this.handleRightDrawerOpen = this.handleRightDrawerOpen.bind(this);
    this.handleRightDrawerClose = this.handleRightDrawerClose.bind(this);
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  handleLeftDrawerOpen() {
    this.setState({ leftDrawerOpen: true });
  }
  handleLeftDrawerClose() {
    this.setState({ leftDrawerOpen: false });
  }
  handleRightDrawerOpen() {
    this.setState({ rightDrawerOpen: true });
  }
  handleRightDrawerClose() {
    this.setState({ rightDrawerOpen: false });
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = typeof window !== 'undefined' && window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      typeof window !== 'undefined' && window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {
    const {
      classes,
      color,
      fixed,
      absolute,
      brand,
      leftLinks,
      rightLinks,
      socialLinks, 
      login, 
      lang      
    } = this.props;

    const appBarClasses = clsx({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });

    const brandComponent = <Button className={classes.title}>{brand}</Button>;

    const leftButtons = <Box display='flex' flexDirection="row">
      {
        leftLinks.list.map(menu=>(
          <Box>
            <MyDropdown
              noLiPadding
              typeHandle={leftLinks.type}
              buttonText={menu.BText}
              buttonProps={{
                className:classes.navLink,
                color:leftLinks.color
              }}
              hoverColor={leftLinks.hoverColor}
              dropdownList={
                menu.BSub.map(link=>(
                  <MyLink to={link.to} lang={leftLinks.lang?leftLinks.lang:lang} className={classes.dropdownLink}>{link.text}</MyLink>
                ))
              }
            />
          </Box>
        ))
      }
    </Box>

    const leftDrawer = <List className={classes.list}>
    {
      leftLinks.list.map(menu=>(
        <div>
          <ListItem className={classes.listItem}>
            <MyLink to={menu.BTo} lang={leftLinks.lang?leftLinks.lang:lang}  className={classes.navLink}>{menu.BText}</MyLink>
          </ListItem>
        </div>
      ))
    }
    </List>

    const getSocialButton=(link)=>(
      <Tooltip
        id={link.id}
        title={link.title}
        placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
        classes={{ tooltip: classes.tooltip }}
      >
        <IconButton
          color="transparent"
          href={link.href}
          target="_blank"
          className={classes.socialIcons}
        >
          {link.link}
        </IconButton>
      </Tooltip>
    )

    const socialButtons=<Box display="flex" flexDirection="row" justifyContent="flex-end">
      {
        socialLinks.filter(link=>link.alwaysShow===true).map(link=>(
          getSocialButton(link)
        ))
      }
      <Hidden  mdDown implementation="css">
        {socialLinks.filter(link=>link.alwaysShow===false).map(link=>(
          getSocialButton(link)
        ))}
      </Hidden>
    </Box>

    const socialDrawer=<Box width="100%" display="flex" flexDirection="row" className={classes.socialDrawer}>
    {socialLinks.map(link=>(
      <Box width={1/socialLinks.length} display="flex" justifyContent="center">
        {getSocialButton(link)}
      </Box>
    ))}
    </Box>



    return (
      <div>
        <AppBar className={appBarClasses}>
          <Toolbar className={classes.container}>
            <Box display="flex" flexDirection="row" style={{ width: '100%' }}>
              <Box>
                <Hidden lgUp implementation="css">
                  <IconButton
                    color="inherit"
                    aria-label="open menu drawer"
                    onClick={this.handleLeftDrawerOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>
              </Box>
              <Box>
                <Typography>
                  {brand}
                </Typography>              
              </Box>
              <Box flexGrow={1}>
                <Hidden mdDown implementation="css">
                  {leftButtons}
                </Hidden>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="flex-end">
                {rightLinks}
                {socialButtons}
                {login}
                <Hidden lgUp implementation="css">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleRightDrawerOpen}
                  >
                    <MoreVertIcon/>
                  </IconButton>        
                </Hidden>
              </Box>
            </Box>
          </Toolbar>
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={"left"}
              open={this.state.leftDrawerOpen}
              onClose={this.handleLeftDrawerClose}
              classes={{
                paper: classes.drawerPaperLeft
              }}
            >
              {leftDrawer}
              {socialDrawer}
            </Drawer>
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={this.state.rightDrawerOpen}
              onClose={this.handleRightDrawerClose}
              classes={{
                paper: classes.drawerPaperRight
              }}
            >
              {socialDrawer}
              {login}
            </Drawer>
          </Hidden>
        </AppBar>
      </div>
    );
  }
}

MyAppBar2.defaultProp = {
  color: "white"
};

MyAppBar2.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default withStyles(MyAppBarStyle)(MyAppBar2);
