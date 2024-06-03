import { Typography,CssBaseline, Divider, Grid, Stack } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/system';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Margin } from '@mui/icons-material';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Toaster } from 'react-hot-toast';
// import { styled } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';

export default function Gender(props) {
  

  return (
    <FormContainer
    defaultValues={{ Gender: '' }}
    onSuccess={data => props.postRequest('/Gender',data)}
>
    <CssBaseline />


    <Grid container

      sx={{
        boxShadow: 5,
        width: '80%',
        height: '50vh',
        margin: '0 10%',
        borderRadius: 3,
        bgcolor: 'var(--bg-color)',
        padding: 4,
        color: 'var(--desc-color)'
        // '&:hover': {
        //   bgcolor: 'primary.dark',
        // },
      }}
    >





      <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
        <Typography style={{ color: 'var(--desc-color)',margin:'0 20%', widht: '100%' }} variant="h5" noWrap>
          Please insert the records for the Gender Resource.
        </Typography>
        

      </Grid>
      <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
      <TextFieldElement
                        sx={{
                            margin:'0 20%',
                            width:'60%',
                            border: '1px solid var(--desc-color)',
                            borderRadius:'5px',
                            input: {
                                color:'var(--desc-color)',
                                "&::placeholder": {  
                                    color:'var(--desc-color)',  // <----- Add this.
                                    opacity: 1,
                                },
                            '&:active':{
                                color: 'var(--desc-color)',
                            },
                            },
                            label: { color: 'var(--desc-color)' },
                        }}
          name="Gender" label="Please Enter Gender in here" required
        />

</Grid>
      <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
        <Stack sx={{ margin: '0 30%', width: '40%'}} direction="row" spacing={2}>
          <Button variant="outlined" sx={{ fontSize: '22px' }} color='success'>
            <AddBoxOutlinedIcon />
            Add</Button>
          <Button variant="outlined" color='error' href="#outlined-buttons" >
            <CancelPresentationOutlinedIcon />
            Cancel</Button>
        </Stack>
      </Grid>



    </Grid>

    <Toaster/>

</FormContainer>
  )
}
