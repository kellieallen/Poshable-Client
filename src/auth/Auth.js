import React, { useState } from 'react';
// import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Auth = (props) => {  
   
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

    const handleSubmitLogin = (event) => {
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
        root: {
          height: '100vh',
        },
        image: {
          backgroundImage: 'url(./assets/signincloset2.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
        paper: {
          margin: theme.spacing(8, 4),
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
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));
      
      const classes = useStyles();
        
      
        return (
           
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={classes.paper}>
              <Login updateToken={props.updateToken}/>   
         
                
                  
              
              </div>
            </Grid>
          </Grid>
        );
      }

export default Auth




   /*  return(    
      <Container className="auth-container">      
        <Row>        
          <Col md="6">            
            <Signup updateToken={props.updateToken}/>    
          </Col>        
          <Col md="6" className="login-col">            
            <Login updateToken={props.updateToken}/>    
          </Col>      
        </Row>    
      </Container>  
    )
  }

export default Auth; */