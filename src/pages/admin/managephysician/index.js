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
import { getrolespecificuserdata, deletephysicianrecord, updateexistingphysicianrecord, registerUser } from '../../../redux/actions/common-action-creator';
import Addphysician from './add-physician/index';
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
import '../../../styles/common-style.css';
import { Container } from '@material-ui/core';
import BasicModal from '../../../components/modals';

const columns = [
    { id: 'sno', label: 'Serial No.', minWidth: 50, padding: '0',align: 'center' },
    { id: 'firstName', label: 'First Name', minWidth: 70, padding: '0',align: 'center' },
    { id: 'lastName', label: 'Last Name', minWidth: 70, align: 'center',padding: '0' },
    { id: 'contact', label: 'Contact',padding: '0', minWidth: 70, align: 'center' },
    { id: 'email', label: 'Email', minWidth: 100,padding: '0', align: 'center' },
    { id: 'action', label: 'Action', minWidth: 100,padding: '0', align: 'center' }
];

function Managephysician({ data, getrolespecificuserdata, deletephysicianrecord, registerUser, updateexistingphysicianrecord }) {
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => {
      setOpen1(false);
    };
   
    const tableData = data;
    const [userTableData, setUserTableData] = React.useState(tableData);


    useEffect(() => {
        getrolespecificuserdata("physician");
    }, [userTableData]);



    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [addFormValue, setFormValue] = React.useState({ formData: { firstName: "", lastName: "", dob: "", email: "", contact: "", password: "", retypePassword: "" } });
    const [open, setOpen] = React.useState(false);
    const [selectedActionState, getSelectedAction] = React.useState({ action: "", id: '' });

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
        getSelectedAction({ action: 'add', id: '' });
    };

    const handleClose = () => {
        setOpen(false)
        setFormValue({
            formData: { firstName: "", lastName: "", dob: "", email: "", contact: "", password: "", retypePassword: "" }
        });
    };

    const edituser = (id) => {
        getSelectedAction({ action: "edit", id: id });
        let user = userTableData.filter((item) => item.id == id);
        setFormValue(prevState => ({
            formData: { ...prevState.formData, ...user[0] }
        }))
        setOpen(true);

    }

    const deleteuser = (id) => {
        deletephysicianrecord(id);
        handleOpen1();
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
            formData: { ...prevState.formData },
        }));
        let body = { ...addFormValue.formData, role: 'physician', approvedUser: true, registrationDate: new Date() }
        if (selectedActionState.action == "add")
            registerUser(body);
        if (selectedActionState.action == "edit")
            updateexistingphysicianrecord(selectedActionState.id, body)
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
            <Container component="main" maxWidth="sm">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Grid container>
                        <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
                            <h2 className="header-title" style={{ margin: '0' }}>Physician Records</h2>
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
                            <Fab aria-label="add" onClick={handleOpen} style={{ float: 'right', backgroundColor: 'var(--solid-button-color)', color: 'white' }}>
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
                                <Table stickyHeader aria-label="sticky table" style={{border:'1px solid #000'}} >
                                    <TableHead className='head'>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth,padding:'6px',background: '#d9edf3' }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {userTableData.length > 0 ? userTableData.map((row, rowIndex) => {
                                            return (
                                                <TableRow hover tabIndex={-1} key={row.id}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            column.id === 'sno' ? <TableCell style={{padding:'0'}} key={column.id} align={column.align}>{rowIndex + 1}</TableCell> :
                                                                column.id != 'action' ? <TableCell style={{padding:'0'}} key={column.id} align={column.align}>
                                                                    {value}
                                                                </TableCell>
                                                                    : <TableCell key={column.id} align={column.align} style={{padding:'0'}}>
                                                                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                                                            <Fab className="actions" aria-label="edit" id="edit" onClick={() => edituser(row.id)} style={{ backgroundColor: 'transparent',color:'var(--solid-button-color)',boxShadow:'none',padding:'0' }} key="edit">
                                                                                <EditIcon />
                                                                            </Fab>
                                                                            <Fab className="actions" aria-label="delete" id="delete" onClick={() => deleteuser(row.id)} style={{backgroundColor: 'transparent',color:'var(--solid-button-color)',boxShadow:'none',padding:'0' }} key="delete">
                                                                                <DeleteIcon />
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
                    Deleted
                </BasicModal>
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
        registerUser: (data) => dispatch(registerUser(data)),
        updateexistingphysicianrecord: (id, data) => dispatch(updateexistingphysicianrecord(id, data))
    };
};

export default connect(mapStateToProps, mapdispatchToProps)(Managephysician);
