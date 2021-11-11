import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { getpatientdata, updateexistingpatientrecord, deletepatientrecord } from "../../../redux/actions/common-action-creator";
import SearchBar from "material-ui-search-bar";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import '../../../styles/common-style.css';
import { Container } from '@material-ui/core';
import BasicModal from '../../../components/modals';

const columns = [
    { id: 'sno', label: 'Serial No.', minWidth: 50, align: 'center' },
    { id: 'firstName', label: 'First Name', minWidth: 70, align: 'center' },
    { id: 'lastName', label: 'Last Name', minWidth: 70, align: 'center' },
    { id: 'contact', label: 'Contact', minWidth: 100, align: 'center' },
    { id: 'email', label: 'Email', minWidth: 100, align: 'center' },
    { id: 'action', label: 'Action', minWidth: 100, align: 'center' }
];

function AdminDashboard({ data, getpatientdata, updateexistingpatientrecord, deletepatientrecord }) {
    
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => {
        setOpen1(false);
    };

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => {
        setOpen2(false);
    };


    let user = data?.filter((item) => !item.approvedUser);

    const [userTableData, setUserTableData] = React.useState(user);


    useEffect(() => {
        getpatientdata("patient");
    }, []);


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [searched, setSearched] = React.useState("");

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const accept = (user) => {
        let approvedUser = { ...user, approvedUser: true };
        updateexistingpatientrecord(user.id, approvedUser)
        handleOpen1();
    }
    const reject = (id) => {
        deletepatientrecord(id);
        handleOpen2();
    }

    const requestSearch = (searchedVal) => {
        let filteredRows = data.filter((row) => {
            return row.firstName.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setUserTableData(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    return (
        <Grid>

            <Container component="main" maxWidth="sm">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Grid container>
                        <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
                            <h2 className="header-title" style={{ margin: '0' }}> New User Requests</h2>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container component="main" maxWidth="md">
                <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <div className='inside-page-cards' style={{ paddingRight: '25px', paddingLeft: '25px' }}>
                        <div className="top-toolbar">
                            <SearchBar
                                className="searchBar"
                                value={searched}
                                onChange={(searchVal) => requestSearch(searchVal)}
                                onCancelSearch={() => cancelSearch()}
                            />
                        </div>
                        <Paper className='root'>
                            <TableContainer className=' tabel-style'>
                                <Table stickyHeader aria-label="sticky table" style={{ border: '1px solid #000', borderRadius: '0' }}>
                                    <TableHead className='head'>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth, padding: '7px', background: '#d9edf3' }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {userTableData.map((row, rowIndex) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            column.id === 'sno' ? <TableCell key={column.id} align={column.align}>{rowIndex + 1}</TableCell> :
                                                                column.id != 'action' ? <TableCell key={column.id} align={column.align}>
                                                                    {value}
                                                                </TableCell>
                                                                    : <TableCell key={column.id} align={column.align} style={{ padding: '0' }}>
                                                                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                                                            <Fab className="actions" aria-label="edit" id="edit" onClick={() => accept(row)} style={{ backgroundColor: 'transparent', color: 'var(--solid-button-color)', boxShadow: 'none', padding: '5px' }}>
                                                                                <CheckIcon />
                                                                            </Fab>

                                                                            <Fab className="actions" aria-label="delete" id="delete" onClick={() => reject(row.id)} style={{ backgroundColor: 'transparent', color: 'var(--solid-button-color)', boxShadow: 'none', padding: '5px' }}>
                                                                                <ClearIcon />
                                                                            </Fab>
                                                                        </Box>
                                                                    </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {/* <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={userTableData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            /> */}
                        </Paper>
                    </div>
                </Box>
            </Container>
            <BasicModal state={open1} onClose={handleClose1}>
                User request Approved
            </BasicModal>
            <BasicModal state={open2} onClose={handleClose2}>
                User request Rejected
            </BasicModal>

        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.patientdata.patientData
    };
};
const mapdispatchToProps = (dispatch) => {
    return {
        getpatientdata: (data) => dispatch(getpatientdata(data)),
        updateexistingpatientrecord: (id, data) => dispatch(updateexistingpatientrecord(id, data)),
        deletepatientrecord: (id) => dispatch(deletepatientrecord(id))
    };
};

export default connect(mapStateToProps, mapdispatchToProps)(AdminDashboard);
