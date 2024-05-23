import { Divider, Grid, Paper, Skeleton } from '@mui/material'
import React from 'react'

export default function Gender() {
  return (
    <Paper>
        Please insert the records for the Gender Resource.
        <Divider/>
    <Grid container >
    <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>
    <Skeleton>
        
    </Skeleton>
    </Grid>

    <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>

    </Grid>
    </Grid>  



    </Paper>
  )
}
