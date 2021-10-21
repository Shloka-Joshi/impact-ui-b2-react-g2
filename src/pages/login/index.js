import * as React from "react";
import { Button } from "../../utils/mui";
import { CssBaseline } from "../../utils/mui";
import { TextField } from "../../utils/mui";
import { Link } from "react-router-dom";
import { Grid } from "../../utils/mui";
import { Box } from "../../utils/mui";
import { Container } from "../../utils/mui";
import { userLogin } from "../../redux/actions/auth-action-creator";
import { connect } from "react-redux";
import "../../styles/common-style.css";
import './login.css'
import { makeStyles } from "@material-ui/core";
import { color } from "@mui/system";
import Footer from '../../components/footer'
import BasicModal from "../../components/modals";
import { useHistory } from "react-router";
import { InputAdornment } from "@mui/material";
import Header from "./header/index";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createTheme , ThemeProvider } from "@mui/material/styles";



const textBoxStyle = makeStyles({
  textBox: {
    fontFamily: 'Nunito',
    color: '#0297b9'
  },
})
const theme = createTheme();


function SignIn({ data, userLogin }) {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    if (data.isLoggedIn) { history.push(`/dashboard/${data.id}/${data.role}`) }
  };

  const [email, setemail] = useState('');
  const validateEmail = (emailId) => {

    const ch = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = ch.test(String(emailId).toLowerCase());
    console.log(isValid)

    return isValid;
  }

  const classes = textBoxStyle()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let body = {};
    for (let entry of data.entries()) {
      body[entry[0]] = entry[1];
    }
    userLogin(body);
    handleOpen();
  };
  return (
    <>
      <Header />
      <Container component="main" maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Grid container>
            <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
              <h1 className="title-registration">Login Form</h1>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container className='section-form' maxWidth='md'>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Grid container>
            <Grid item sm={12} lg={6} md={6} xs={12} xl={6}>
              <div className='reg-left-col'>
                <center>
                  <AccountCircleIcon style={{ color: '#fff', fontSize: '50px' }} />
                </center>
                <h3>Heading Comes Here</h3>
                <p>
                  Some text comes here  Some text comes here Some text comes here Some text comes here
                  Some text comes here  Some text comes here Some text comes here Some text comes here
                  Some text comes here  Some text comes here Some text comes here Some text comes here
                  Some text comes here  Some text comes here Some text comes here Some text comes here
                </p>

              </div>
            </Grid>
            <Grid item sm={12} lg={6} md={6} xs={12} xl={6}>
              <div className='reg-right-col'>
                <div className='form'>
                  <ThemeProvider theme={theme}>
                    <div>
                      <Container style={{ marginBottom: '100px' }} component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                          sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                          >
                            <TextField className={classes.textBox}
                              margin="normal"
                              required
                              fullWidth
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                              id="email"
                              name="email"
                              label="Email Address"
                              placeholder='Email Address'
                              type="email"
                              InputProps={{
                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                              }}

                            />
                            {!validateEmail(email) && email != '' && (
                              <span>Invalid Email</span>)}
                            <TextField
                              margin="normal"
                              required
                              fullWidth
                              id="password"
                              name="password"
                              label="Password"
                              placeholder="Password"
                              type="password"
                              InputProps={{
                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                              }}
                            />

                            <Button style={{ margin: '0', padding: '0' }}
                              type="submit"
                              fullWidth
                              variant="text"
                              sx={{ mt: 3, mb: 2 }}
                            >
                              <div className='solid-button'>
                                Sign In
                              </div>
                            </Button>
                            <Grid container>
                              <Grid item xs>
                                <Link to="#" variant="body2" style={{textDecoration:'none'}}>
                                  Forgot password?
                                </Link>
                              </Grid>
                              <Grid item>
                                <Link to="/register" variant="body2" style={{textDecoration:'none'}}>
                                  {"Don't have an account? Sign Up"}
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                      </Container>

                      <BasicModal state={open} onClose={handleClose}>
                        {data?.message}
                      </BasicModal>
                    </div>
                  </ThemeProvider>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />

    </>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapdispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(userLogin(data)),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(SignIn);
