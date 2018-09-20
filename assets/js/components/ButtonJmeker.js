import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function ContainedButtons(props) {
    const {classes} = props;
    return (
        <div>
            <Button variant="contained" className={classes.button} onClick={() => clickMe()}>
                Click Me!
            </Button>
        </div>
    );
}

function clickMe() {
    document.body.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    console.log('you clicked me');
}

ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);