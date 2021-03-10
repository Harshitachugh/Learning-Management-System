import React from 'react';
import { Grid , Paper , makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
  paper:{
    height: 120,
    width: 'auto',
    backgroundColor : 'ivory',
    textAlign : 'center',
    align :'center'
  }
}));

export const Home=()=>{
  const classes = useStyles()
  return (
    <Grid item xs={12}>
    <Grid container spacing ={3}>
    {['JavaScript','ReactJs','Web Development','App Development','Python','Java','Machine Learning','Data Science'].map((value)=>(
      <Grid key={value} item md={3}>
        <Paper className={classes.paper} >{value}</Paper>
      </Grid>

    ))}
    </Grid>
    </Grid>


  )
}