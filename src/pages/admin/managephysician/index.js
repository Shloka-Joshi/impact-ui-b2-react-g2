import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@material-ui/core/Grid';
import InputBase from '@mui/material/InputBase';
import './managephysician.css'
import { Container } from '@material-ui/core';
import Addphysician from './add-physician/index';
import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const columns = [
    { id: 'PhysicianID', label: 'Physician ID', minWidth: 100, align: 'center' },
    { id: 'Name', label: 'Name', minWidth: 170, align: 'center' },
    {
        id: 'Email',
        label: 'Email',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'RegisterationDate',
        label: 'Registeration Date',
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

function createData(PhysicianID, Name, Email, RegisterationDate, Status, Action) {

    return { PhysicianID, Name, Email, RegisterationDate, Status, Action };
}

const rows = [
    createData('P1', 'Dr.Samuel', 'samuel@yopmail.com', '14/10/2021', 'Pending', 'Edit'),
    createData('P2', 'Dr.Sam', 'sam@yopmail.com', '13/10/2021', 'Active', 'Delete'),
    createData('P3', 'Dr.Ali', 'Ali@yopmail.com', '13/10/2021', 'Active', 'Edit'),
    createData('P4', 'Dr.Peter', 'Peter@yopmail.com', '13/10/2021', 'Active', 'Delete'),
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
export default function Managephysician() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                <Button  className='btn' variant="contained" onClick={handleOpen} >
                    <AddCircleIcon />Add
                </Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box className='model'>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Add Physician
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                               <Addphysician/>
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
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
