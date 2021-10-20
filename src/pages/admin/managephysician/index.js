import React, { useEffect } from 'react';
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
import { connect } from "react-redux";
import {getrolespecificuserdata} from '../../../redux/actions/physician-action-creator';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
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
    { id: 'sno', label: 'Serial No.', minWidth: 170, align: 'center' },
    { id: 'firstName', label: 'First Name', minWidth: 170, align: 'center' },
    { id: 'lastName', label: 'Last Name', minWidth: 170, align: 'center' },
    { id: 'contact', label: 'Contact', minWidth: 170, align: 'center' },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center'},
    { id: 'registerationDate', label: 'Registeration Date', minWidth: 170, align: 'center'},
    { id: 'action', label: 'Action', minWidth: 170, align: 'center'}
];

function Managephysician({data,getrolespecificuserdata}) {

    useEffect(()=>{
        getrolespecificuserdata("physician");
    },[]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [menuPopupState, setMenuState] = React.useState(null);
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

    const openactionmenu = (event) => setMenuState(event.currentTarget);
    const closemenupopup = () => setMenuState(null);

    const edituser = (id) => {
        console.log(id+"       edit");
    }
    const viewuser = (id) => {
        console.log(JSON.stringify(id)+" view");
    }

    const deleteuser = (id) => {
        console.log(JSON.stringify(id)+"  delete");
    }


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
                            {data.map((row,rowIndex) => {
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
                                                    <Button  variant="contained" id="edit" onClick={()=>edituser(row.id)} >Edit</Button>
                                                            <IconButton
                                                                aria-label="more"
                                                                id="long-button"
                                                                aria-controls="long-menu"
                                                                aria-expanded={Boolean(menuPopupState) ? 'true' : undefined}
                                                                aria-haspopup="true"
                                                                onClick={openactionmenu}
                                                            >
                                                                <MoreVertIcon />
                                                            </IconButton>
                                                                <Menu id="long-menu" MenuListProps={{ 'aria-labelledby': 'long-button' }}
                                                                    anchorEl={menuPopupState} open={Boolean(menuPopupState)} onClose={closemenupopup} PaperProps={{
                                                                        style: { maxHeight: 48 * 4.5, width: '20ch' },
                                                                    }}
                                                                >
                                                                     <MenuItem key={'view'}  onClick={() =>viewuser(row)}>
                                                                       View
                                                                    </MenuItem>
                                                                    <MenuItem key={'delete'}  onClick={() =>deleteuser(row)}>
                                                                       Delete
                                                                    </MenuItem> 
                                                                </Menu>
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
                    count={data.length}
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
      data: state.physiciandata.physicianData,
    };
  };
  const mapdispatchToProps = (dispatch) => {
    return {
        getrolespecificuserdata: (data) => dispatch(getrolespecificuserdata(data)),
    };
  };

  export default connect(mapStateToProps, mapdispatchToProps)(Managephysician);
