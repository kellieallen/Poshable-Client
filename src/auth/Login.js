import React, {useState} from 'react';
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Signup from './Signup';
import '../App.css';
// import {BrowswerRouter as Router, Link, Route} from "react-router-dom"





const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/user/login',{
      method: 'POST',
      body: JSON.stringify({user:{username: username, password: password}}),
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    }) .then(
        (response) => response.json()
    ) .then((data) => {
        props.updateToken(data.sessionToken);
    })
  }
  

  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
        fontfamily: 'Abril Fatface',
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },

   


  }));
  const classes = useStyles();
 
  return (
    <Container component="main" maxWidth="xs">
       <div className="poshableLogo">Poshable</div> 
      <CssBaseline />
      <div className={classes.paper}>
          
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)} name="username" value={username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)} name="password" value={password}
              />
            </Grid>
            <Grid item xs={12}>
           
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/Signup" variant="body2">
                Need an account? Sign up! 
              </Link>
             
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
  
      </Box>
  {/* <Route exact path="/Signup" component={Signup}/>*/}
    </Container>


  );
}



export default Login;