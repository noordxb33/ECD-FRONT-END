import { CssBaseline, Divider, Grid } from '@mui/material'
import React from 'react'
import {ThemeProvider} from '@mui/system';


export default function Gender() {
  return (
   
 <Grid container
        sx={{
          boxShadow:5,
          width: '100%',
          height: '40vh',
          borderRadius: 3,
          bgcolor: 'var(--bg-color)',
          padding:4,
          color:'var(--desc-color)'
          // '&:hover': {
          //   bgcolor: 'primary.dark',
          // },
        }}
      >
        
        
        Please insert the records for the Gender Resource.
       
       
    <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>
        
    </Grid>

    <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>

    </Grid>






</Grid>
  )
}
