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
import {getpatientdata,updateexistingpatientrecord,deletepatientrecord} from "../../../redux/actions/patient-action-creator";
import SearchBar from "material-ui-search-bar";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import '../../../styles/common-style.css';

const columns = [
    { id: 'sno', label: 'Serial No.', minWidth: 170, align: 'center' },
    { id: 'firstName', label: 'First Name', minWidth: 170, align: 'center' },
    { id: 'lastName', label: 'Last Name', minWidth: 170, align: 'center' },
    { id: 'contact', label: 'Contact', minWidth: 170, align: 'center' },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center'},
    { id: 'registerationDate', label: 'Registeration Date', minWidth: 170, align: 'center'},
    { id: 'action', label: 'Action', minWidth: 300,align: 'center'}
];

function AdminDashboard({data,getpatientdata,updateexistingpatientrecord,deletepatientrecord}) {

    let user = data?.filter((item) => !item.approvedUser);

    const [userTableData,setUserTableData] = React.useState(user);


    useEffect(()=>{
        getpatientdata("patient");
    },[]);

    
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
        let approvedUser = {...user,approvedUser:true};
        updateexistingpatientrecord(user.id,approvedUser)
    }
    const reject = (id) => {
        deletepatientrecord(id);
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
            <div className='title'>
                <h2 style={{ margin: '0' }}>New User Requests</h2>
            </div>

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
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead className='head'>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userTableData.map((row,rowIndex) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                            column.id === 'sno' ? <TableCell key={column.id} align={column.align}>{rowIndex+1}</TableCell> :
                                               column.id != 'action' ? <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell> 
                                                : <TableCell key={column.id} align={column.align}>
                                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                                    <Fab className="actions" aria-label="edit" id="edit" onClick={()=>accept(row)} style={{ backgroundColor: 'var(--solid-button-color)',color:'white' }}>
                                                        <CheckIcon />
                                                    </Fab>
                                                    <Fab className="actions" aria-label="delete" id="delete" onClick={()=>reject(row.id)} style={{ backgroundColor: 'var(--solid-button-color)',color:'white' }}>
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
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={userTableData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

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
        updateexistingpatientrecord: (id,data) => dispatch(updateexistingpatientrecord(id,data)),
        deletepatientrecord: (id) => dispatch(deletepatientrecord(id))
    };
  };

  export default connect(mapStateToProps, mapdispatchToProps)(AdminDashboard);
