import { AppBar , Button, makeStyles , Toolbar, Typography } from '@material-ui/core';
import { Link} from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



const useStyles= makeStyles({
    iconStyle:{
        border: 'solid',
        marginRight: 30,
        backgroundColor : 'black',
        width: 125,
        textAlign: 'center'
    },

    inputstyle:{
        backgroundColor: 'white',
        width: 500,
        borderRadius: 10

    },

    textStyle:{
        marginLeft: 20,
        marginRight: 20,
        border:'brown',
        borderRadius: 10,
        backgroundColor: 'white',
        


    },

    loginbtn:{
        border:'brown',
        borderRadius: 10,
        backgroundColor: 'white',
        right: 0
        
    },

    main:{
        display: 'flex',
        justifyContent: 'space-between'


    }
})


export const Header=() => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes=useStyles();

    return(
        
        <AppBar position='static'>
            <div className={classes.main}>
            <Toolbar >
                <div className={classes.iconStyle} >SMAASH </div>
                <Typography >
                 Learn with Smaash
                
                <Link to='/'><Button className={classes.textStyle}><i > Home</i></Button> </Link>
                 
                 <InputBase className={classes.inputstyle}
              placeholder="   Search…" border='black'
              
            />
          
          <Button aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleClick}> Course Categories </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
                <MenuItem onClick={handleClose}>Software Development</MenuItem>
                <MenuItem onClick={handleClose}>Website Development</MenuItem>
                <MenuItem onClick={handleClose}>Programming Languages</MenuItem>
            </Menu>
          </Typography>
          <Link to='/login'> <Button color="inherit" className={classes.loginbtn}>Login</Button> </Link>
          
            </Toolbar>
            </div>
        </AppBar>
    )

}