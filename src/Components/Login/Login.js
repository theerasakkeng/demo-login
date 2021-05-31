import React,{useState,useContext} from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link,useHistory} from 'react-router-dom';
import {AutContext} from '../AutContext/AutContext.js'


const Login = (props) => {

    const history = useHistory();

    const [aut,setAut] = useContext(AutContext); console.log(aut)

    const [username,setUsername] =useState(''); console.log(username)
    const [password,setPassword]=useState('');  console.log(password)

    //Login Style
    const paperStyle = { padding: 20, height: '50vh', width: 300, margin: "20px auto" }
    const avatarStyle ={backgroundColor:"red"}
    const buttonStyle ={marginTop:"20px"}

    
    

    function loginSubmit(event){
        
            if(username == aut.username && password == aut.password)
            {
                history.push("/map")
            }

        event.preventDefault();
        setAut();
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} onSubmit={loginSubmit}>
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
                {/*error && <Grid className="error">{error}</Grid>*/}
                <Button style={buttonStyle} type="submit" color="primary" variant="contained" fullWidth onSubmit={loginSubmit}>Sign In</Button>
            </Paper>
        </Grid>
    );
};

export default Login;