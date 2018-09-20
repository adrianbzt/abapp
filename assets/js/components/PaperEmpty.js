import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { LineChart, PieChart, GeoChart, ColumnChart, BarChart} from 'react-chartkick';
// import ReactChartkick, { LineChart, PieChart, GeoChart, ColumnChart, BarChart } from 'react-chartkick';


// ReactChartkick.addAdapter(Highcharts)

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 10

    },
});

function PaperSheet(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="headline" component="h3">
                    This is a sheet of paper.
                </Typography>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                </Typography>
                <GeoChart data={[["United States", 44], ["Germany", 23], ["Brazil", 22]]} />
                <LineChart data={{"2017-01-01": 11, "2017-01-02": 6}} />
                <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
                <ColumnChart data={[["Sun", 32], ["Mon", 46], ["Tue", 28]]} />
                <BarChart data={[["Work", 32], ["Play", 1492]]} />
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
