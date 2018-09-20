import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const styles = {
    userSettings: {
        // display: 'flex',
        // justifyContent: 'flex-end',
        // alignItems: 'center',

    },
}

class UserIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            auth: true,
            anchorEl: null
        }
    }

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    handleChange = event => {
        this.setState({auth: event.target.checked});
    };

    handleAnchorMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleAnchorClose = () => {
        this.setState({anchorEl: null});
    }

    render() {

        const {classes} = this.props;
        const {auth, anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.userSettings}>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleAnchorMenu}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleAnchorClose}
                >
                    <MenuItem onClick={this.handleAnchorClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleAnchorClose}>My account</MenuItem>
                </Menu>
            </div>
        );
    }
}

UserIcon.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UserIcon);