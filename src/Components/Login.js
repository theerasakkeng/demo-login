import React from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {
    const paperStyle = { padding: 20, height: '50vh', width: 300, margin: "20px auto" }
    const avatarStyle ={backgroundColor:"red"}
    const buttonStyle ={marginTop:"20px"}
    return (
        <Grid>
            <Paper elevation={15} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sing In</h2>
                </Grid>
                <TextField id="username" label="Username" placeholder="Username"  fullWidth required/>
                <TextField id="password" label="Password" v placeholder="Password"  fullWidth required/>
                <Button style={buttonStyle} type="submit" color="primary" variant="contained" fullWidth>Sign In</Button>
            </Paper>
        </Grid>
    );
};

export default Login;