import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from "@material-ui/core/TableHead/TableHead";
import {GeoChart} from "react-chartkick";

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    };

    render() {
        const {classes, count, page, rowsPerPage, theme} = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
                </IconButton>
            </div>
        );
    }
}

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, {withTheme: true})(
    TablePaginationActions,
);

let counter = 0;

function createData(values) {
    let val = values.toString();
    counter += 1;
    return {id: counter, val};
}

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 500,

    },
    tableWrapper: {
        overflowX: 'auto',
        overflowY: 'auto',
        maxHeight: 800
    },
});

class CustomPaginationActionsTable extends React.Component {
    state = {
        rows: [],
        page: 0,
        rowsPerPage: 10,
    };

    handleChangePage = (event, page) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    componentDidMount() {
        // fetch("https://fbstat.mdc.gameloft.org/Odd/Api/Aria/gmd_beta.php?game=1036&kpi=2&zoom=daily&ua_options=&chart=table&platform=0&group_option=&start_date=2018-07-17&end_date=2018-07-30&country=&action=get_kpi_data")
        fetch("kpi")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    this.setState({
                        rows: result,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // this.setState({
                    //     isLoaded: true,
                    //     error
                    // });
                }
            )
    }

    makeMeCrazy() {
        let countriesOverall = this.state.rows.slice(0, -1).map((obj, key) => {
            const reducer = (accumulator, currentValue) => (accumulator + currentValue);
            let country = obj[0];
            let values = obj.slice(1).reduce(reducer);
            return [country, values]
        });

        return countriesOverall;
    }

    render() {
        const {classes} = this.props;
        const {rows, rowsPerPage, page} = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

        return (
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <GeoChart data={(rows.length) > 0 ? this.makeMeCrazy() : []}/>
                    <Table className={classes.table}>

                        {rows.map((row, rowNb) => {
                            if (rowNb === 0) {
                                return (
                                    <TableHead key="tableHead">
                                        <TableRow key={'header-' + rowNb}>
                                            {row.map((headerEntry, key) => {
                                                return (
                                                    <TableCell key={'headerColumn-' + key}> {headerEntry}</TableCell>

                                                )
                                            })}
                                        </TableRow>
                                    </TableHead>
                                )
                            } else {

                                return (
                                    <TableBody key={"tableBody" + rowNb}>
                                        <TableRow key={'row-' + rowNb}>
                                            {row.map((rowEntry, key) => {
                                                return (

                                                    <TableCell component="th" scope="row" key={rowNb + '-arow-' + key}>
                                                        {rowEntry}
                                                    </TableCell>

                                                );
                                            })}
                                        </TableRow>
                                        {emptyRows > 0 && (
                                            <TableRow style={{height: 48 * emptyRows}}>
                                                <TableCell colSpan={6}/>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                )

                            }
                        })}

                        <TableFooter>
                            <TableRow>
                                {/*<TablePagination*/}
                                {/*colSpan={3}*/}
                                {/*count={rows.length}*/}
                                {/*rowsPerPage={rowsPerPage}*/}
                                {/*page={page}*/}
                                {/*onChangePage={this.handleChangePage}*/}
                                {/*onChangeRowsPerPage={this.handleChangeRowsPerPage}*/}
                                {/*ActionsComponent={TablePaginationActionsWrapped}*/}
                                {/*/>*/}
                            </TableRow>
                        </TableFooter>
                    </Table>

                </div>
            </Paper>
        );
    }
}

CustomPaginationActionsTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomPaginationActionsTable);

