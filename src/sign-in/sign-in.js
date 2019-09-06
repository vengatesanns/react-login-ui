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
import PopUpDialog from '../pop-up-dialog/pop-up-dialog';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/vengatesanns">
                HackPro
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
        this.popupDialogRef = React.createRef();
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
            .then(response => {
                sessionStorage.setItem("token", response.data.access_token);
                this.popupDialogRef.current.info("Login Successfully!!!");
            })
            .catch(err => {
                if (err.response.data.error === 'invalid_grant') {
                    this.popupDialogRef.current.error("User or Password is Incorrect");
                }
                else {
                    this.popupDialogRef.current.error(err.message);
                }
            });
    };


    test = () => {
        const headers = {
            'Authorization': `Bearer ${sessionStorage.getItem('token')} `,
            'Content-type': 'application/json'
        }
        axios.post("http://localhost:7000/test", { headers })
            .then(res => alert(res)).catch(err => alert(err));
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
                <PopUpDialog ref={this.popupDialogRef} />

                <Button
                    fullWidth
                    variant="contained"
                    color="warn"
                    className={styles.submit}
                    onClick={this.test} >
                    Test Services
                </Button>
            </Container>
        )
    }

}

export default SignIn