import React from 'react';
import {connect} from 'react-redux';
import { Grid , Paper , makeStyles } from '@material-ui/core'
import { courseData } from '../../mockdata/courseData';


const useStyles = makeStyles((theme)=>({
  paper:{
    height: 120,
    width: 'auto',
    backgroundColor : 'ivory',
    textAlign : 'center',
    align :'center'
  }
}));

export const Home=(props)=>{
  
  const classes = useStyles()
  return (
    <Grid item xs={12}>
    <Grid container spacing ={3}>
    {courseData.map((value)=>(
      <Grid key={value.courseName} item md={3} xs={12}>
        <Paper className={classes.paper} >{value}</Paper>
      </Grid>

    ))}
    </Grid>
    </Grid>
  )
}

export default (Home)