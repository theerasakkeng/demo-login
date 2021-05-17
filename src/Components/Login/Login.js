import React,{useState,useContext} from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom';
import {AutContext} from '../AutContext/AutContext.js'

const Login = (props) => {

    const [aut,setAut] = useContext(AutContext); 

    const [username,setUsername] =useState('');
    const [password,setPassword]=useState('');
    const [error,setError] =useState(null);
    const [loading,setLoading] =useState(false);

    

    const paperStyle = { padding: 20, height: '50vh', width: 300, margin: "20px auto" }
    const avatarStyle ={backgroundColor:"red"}
    const buttonStyle ={marginTop:"20px"}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sing In</h2>
                </Grid>
                <TextField id="username" label="Username" placeholder="Username" type="text" fullWidth required
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <TextField id="password" label="Password" v placeholder="Password" type="password"  fullWidth required
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                {error&& <Grid className="error">{error}</Grid>}
                <Link to="/map" style={{textDecoration:"none"}}><Button style={buttonStyle} type="submit" color="primary" variant="contained" fullWidth
                value={loading ? "Loading..." :"Login"}
                disabled={loading}
                >Sign In</Button></Link>
            </Paper>
        </Grid>
    );
};

export default Login;