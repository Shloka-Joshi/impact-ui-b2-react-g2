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
import './managephysician.css';
import { connect } from "react-redux";
import {getrolespecificuserdata,deletephysicianrecord,addnewphysicianrecord,updateexistingphysicianrecord} from '../../../redux/actions/physician-action-creator';
import Addphysician from './add-physician/index';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
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

function Managephysician({data,getrolespecificuserdata,deletephysicianrecord,addnewphysicianrecord,updateexistingphysicianrecord}) {
    
    const tableData = data;

    useEffect(()=>{
        getrolespecificuserdata("physician");
    },[]);

    
    const [userTableData,setUserTableData] = React.useState(tableData);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [addFormValue,setFormValue] = React.useState({formData:{firstName:"",lastName:"",dob:"",email:"",contact:"",password:"",retypepassword:""}});
    const [open, setOpen] = React.useState(false);
    const [selectedActionState, getSelectedAction] = React.useState({action:"",id:''});
    
    const [searched, setSearched] = React.useState("");

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleOpen = () => {
        setOpen(true);
        getSelectedAction({action:'add',id:''});
    };

    const handleClose = () => {
        setOpen(false)
        setFormValue({
            formData: {firstName:"",lastName:"",dob:"",email:"",contact:"",password:"",retypePassword:""}
        });
    };

    const edituser = (id) => {
        getSelectedAction({action:"edit",id:id});
        let user = userTableData.filter((item) => item.id == id);
        setFormValue(prevState => ({
            formData: { ...prevState.formData, ...user[0]}
        }))
        setOpen(true);

    }

    const viewuser = (id) => {

    }
    const deleteuser = (id) => {
        deletephysicianrecord(id);
    }

    const adduserformvaluechange = (e) => {
        const { id, value } = e.target;
        setFormValue(prevState => ({
            formData: { ...prevState.formData, [id]: value }
        }));
      };

    const adduserformvaluesubmit = e => {
        e.preventDefault();
        setFormValue(prevState => ({
            formData: {...prevState.formData},
        }));
        let body = {...addFormValue.formData,role:'physician',registrationDate:new Date()}
        if(selectedActionState.action == "add")
            addnewphysicianrecord(body);
        if(selectedActionState.action == "edit")
            updateexistingphysicianrecord(selectedActionState.id,body)
        handleClose();
    };

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
                <h2 style={{ margin: '0' }}>Physician Records</h2>
            </div>

            <div className="top-toolbar">
                <SearchBar
                    className="searchBar"
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                />
                <Fab aria-label="add" onClick={handleOpen} style={{ float: 'right', backgroundColor: 'var(--solid-button-color)',color:'white' }}>
                    <AddIcon />
                </Fab>
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
                               
                               <Addphysician
                               handleChange={adduserformvaluechange}
                               userData={addFormValue.formData}
                               handleSubmit={adduserformvaluesubmit}
                               
                               />
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
                            
                            { userTableData.length > 0 ? userTableData.map((row,rowIndex) => {
                                return (
                                    <TableRow hover  tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                            column.id === 'sno' ? <TableCell key={column.id} align={column.align}>{rowIndex+1}</TableCell> :
                                               column.id != 'action' ? <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell> 
                                                : <TableCell key={column.id} align={column.align}>
                                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                                    <Fab className="actions" aria-label="edit" id="edit" onClick={()=>edituser(row.id)} style={{ backgroundColor: 'var(--solid-button-color)',color:'white' }}>
                                                        <EditIcon />
                                                    </Fab>
                                                    <Fab className="actions" aria-label="delete" id="delete" onClick={()=>deleteuser(row.id)} style={{ backgroundColor: 'var(--solid-button-color)',color:'white' }}>
                                                        <DeleteIcon />
                                                    </Fab>
                                                    <Fab className="actions" aria-label="edit" onClick={()=>viewuser(row.id)} style={{ backgroundColor: 'var(--solid-button-color)',color:'white' }}>
                                                        <VisibilityIcon />
                                                    </Fab>
                                                    </Box>
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            }) 
                            : <TableRow>No Data Available</TableRow>
                            }
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
      data: state.physiciandata.physicianData,
    };
  };
  const mapdispatchToProps = (dispatch) => {
    return {
        getrolespecificuserdata: (data) => dispatch(getrolespecificuserdata(data)),
        deletephysicianrecord: (id) => dispatch(deletephysicianrecord(id)),
        addnewphysicianrecord: (data) => dispatch(addnewphysicianrecord(data)),
        updateexistingphysicianrecord: (id,data) => dispatch(updateexistingphysicianrecord(id,data))
    };
  };

  export default connect(mapStateToProps, mapdispatchToProps)(Managephysician);
