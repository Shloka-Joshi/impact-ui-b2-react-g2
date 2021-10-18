import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@material-ui/core/Grid';
import InputBase from '@mui/material/InputBase';
import './managephysician.css'
import { Container } from '@material-ui/core';


const columns = [
    { id: 'PhysicianID', label: 'PhysicianID', minWidth: 100, align: 'center' },
    { id: 'Name', label: 'Name', minWidth: 170, align: 'center' },
    {
        id: 'Email',
        label: 'Email',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'RegisteredDate',
        label: 'RegisteredDate',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'Action',
        label: 'Action',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    }
];

function createData(PhysicianID, Name, Email, RegisteredDate, Status, Action) {

    return { PhysicianID, Name, Email, RegisteredDate, Status, Action };
}

const rows = [
    createData('P1', 'Dr.Samuel', 'samuel@yopmail.com', '14/10/2021', 'Pending', 'Edit'),
    createData('P2', 'Dr.Sam', 'sam@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P3', 'Dr.Ali', 'Ali@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P4', 'Dr.Peter', 'Peter@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P5', 'Dr.Jhon', 'Jhon@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P6', 'Dr.Misse', 'Misse@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P7', 'Dr.Nicolas', 'Nicolas@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P8', 'Dr.Nick', 'Nick@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P9', 'Dr.Sarath', 'sarath@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P10', 'Dr.Susanth', 'susanth@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P11', 'Dr.Rohan', 'Rohan@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P12', 'Dr.Karthick', 'Karthick@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P13', 'Dr.Ishan', 'Ishan@yopmail.com', '13/10/2021', 'Active', 'Edit'),

];


    //   searchbutton: {
    //       marginRight: theme.spacing(2),
    //       [theme.breakpoints.up("sm")]: {
    //           display: "none"
    //       }
    //   }


export default function Managephysician() {
    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Grid>
            <div className='title'>
                <h2 style={{ margin: '0' }}>Physician Records</h2>
            </div>

            <div className="top-toolbar">
            <div className='search'>
                <div className='searchIcon'>
                    <SearchIcon />
                </div>
                <InputBase placeholder="Search" className='search'
                    inputProps={{ 'aria-label': 'search' }} />
               
            </div>
            <Button className='button' variant="contained" color="" href="#contained-buttons">
                    <AddCircleIcon />Physician
                </Button>
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
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
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
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            

        </Grid>
    );
}
