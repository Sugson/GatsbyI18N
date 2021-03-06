import React from "react";
// nodejs library that concatenates classes
import clsx from "clsx";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Popper from "@material-ui/core/Popper";

// core components
import MyButton from "../MyButton/MyButton";

import withStyles from "@material-ui/core/styles/withStyles"
import MyDropDownStyle from "../../layouts/ComponentStyle/MyDropDownStyle";

class MyDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      onClick:false,
      onHover:false,
    };
    //console.log("typeHandle",this.props.typeHandle);
    switch(this.props.typeHandle){
      case 'onClick': this.state.onClick=true; this.state.onHover=false; break;
      case 'onHover': this.state.onClick=false; this.state.onHover=true; break;
      default:  this.state.onClick=false; this.state.onHover=true; break;
    }
  }
  handleOver=()=>{
    if(this.state.onHover){
      this.setState(() =>({ open: true}));
    }    
  }
  handleLeave=()=>{
    if(this.state.onHover){
      this.setState(() =>({ open: false}));
    }
  }
  handleClick = () => {
    if(this.state.onClick){
      this.setState(state => ({ open: !state.open }));
    }
  };
  handleClose = param => {
    this.setState({ open: false });
    if (this.props && this.props.onClick) {
      this.props.onClick(param);
    }
  };
  handleCloseAway = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const {
      classes,
      buttonText,
      buttonIcon,
      dropdownList,
      buttonProps,
      dropup,
      dropdownHeader,
      caret,
      hoverColor,
      left,
      rtlActive,
      noLiPadding
    } = this.props;
    const caretClasses = clsx({
      [classes.caret]: true,
      [classes.caretActive]: open,
      [classes.caretRTL]: rtlActive
    });
    const dropdownItem = clsx({
      [classes.dropdownItem]: true,
      [classes[hoverColor + "Hover"]]: true,
      [classes.noLiPadding]: noLiPadding,
      [classes.dropdownItemRTL]: rtlActive
    });

    let icon = null;
    switch (typeof buttonIcon) {
      case "function":
        icon = <this.props.buttonIcon className={classes.buttonIcon} />;
        break;
      case "string":
        icon = (
          <Icon className={classes.buttonIcon}>{this.props.buttonIcon}</Icon>
        );
        break;
      default:
        icon = null;
        break;
    }
    return (
      <div>
        <div>
          <MyButton
            aria-label="Notifications"
            aria-owns={open ? "menu-list" : null}
            aria-haspopup="true"
            {...buttonProps}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            onMouseEnter={this.handleOver}
            onMouseLeave={this.handleLeave}
            onClick={this.handleClick}
          >
            {icon}
            {buttonText !== undefined ? buttonText : null}
            {caret ? <b className={caretClasses} /> : null}
          </MyButton>
        </div>
        <Popper
          keepMounted
          open={open}
          onMouseEnter={this.handleOver}
          onMouseLeave={this.handleLeave}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          placement={
            dropup
              ? left
                ? "top-start"
                : "top"
              : left
              ? "bottom-start"
              : "bottom"
          }
          className={clsx({
            [classes.popperClose]: !open,
            [classes.popperResponsive]: true
          })}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              in={open}
              id="menu-list"
              style={
                dropup
                  ? { transformOrigin: "0 100% 0" }
                  : { transformOrigin: "0 0 0" }
              }
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={this.handleCloseAway}>
                  <MenuList role="menu" className={classes.menuList}>
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        onClick={() => this.handleClose(dropdownHeader)}
                        className={classes.dropdownHeader}
                      >
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop, key) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            key={key}
                            onClick={() => this.handleClose("divider")}
                            className={classes.dropdownDividerItem}
                          />
                        );
                      }
                      return (
                        <MenuItem
                          key={key}
                          onClick={() => this.handleClose(prop)}
                          className={dropdownItem}
                        >
                          {prop}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

MyDropDown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};

MyDropDown.propTypes = {
  classes: PropTypes.object.isRequired,
  hoverColor: PropTypes.oneOf([
    "black",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  // function that retuns the selected item
  onClick: PropTypes.func
};


export default withStyles(MyDropDownStyle)(MyDropDown);
