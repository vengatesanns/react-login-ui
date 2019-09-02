import React, { Component } from "react";
import styles from './sign-in.module.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/vengatesanns">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'. Check '}
            <Link color="inherit" href="https://github.com/vengatesanns">
                Github
        </Link>
        </Typography>
    );
}


class SignIn extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    //Value Setting
    valueChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    //Form Submit
    submitForm = () => {
        //alert(`Username - ${this.state.username}   ,  Password - ${this.state.password} `)
        const params = new URLSearchParams();
        params.append('username', this.state.username);
        params.append('password', this.state.password);
        params.append('grant_type', 'password');
        const token_url = "http://localhost:7000/oauth/token";
        const headers = {
            'Authorization': 'Basic ' + btoa('hackpro_clients:Hack-Pro-Secret'),
            'Content-type': 'application/x-www-form-urlencoded'
        };
        axios.post(token_url, params, { headers: headers })
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };


    test = () => {
        axios.post("http://localhost:7000/test", {})
            .then(res => console.log(res));
    }

    // UI template
    render() {
        const { username, password } = this.state;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={styles.paper}>
                    <Avatar className={styles.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
              </Typography>
                    <form className={styles.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={this.valueChangeHandler}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={this.valueChangeHandler}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={styles.submit}
                            onClick={this.submitForm} >
                            Sign In
                </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                    </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>)
    }

}

export default SignIn