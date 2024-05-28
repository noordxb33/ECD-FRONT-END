import { Typography, CssBaseline, Divider, Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/system';
import { FormContainer, TextFieldElement, AutocompleteElement } from 'react-hook-form-mui';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { Toaster } from 'react-hot-toast';

export default function BatchesForm(props) {
    const [years,setYears]=useState([]);



    useEffect(()=>{
        props.getRequest('/Year',setYears)
    },[])
  return (
    <FormContainer
            defaultValues={{ year: '' }}
            onSuccess={data => props.postRequest('/Year',data)}
        >
            <CssBaseline />
            <Grid container
                sx={{
                    boxShadow: 5,
                    width: '80%',
                    height: '80%',
                    margin: '0 10%',
                    borderRadius: 3,
                    background: 'var(--bg-color)',
                    padding: 4,
                    color: 'var(--color)'
                    // '&:hover': {
                    //   bgcolor: 'primary.dark',
                    // },
                }}
            >


                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                    <Typography style={{ color: 'var(--desc-color)', widht: '100%' }} variant="h5" noWrap>
                        Please insert the records for the Gender Resource.
                    </Typography>
                    
                </Grid>
                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>


                <TextFieldElement
                        sx={{
                            margin:5,
                            width:'80%',
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
                        name="year" label="Please Enter Year Name in here" required 
                        />
                        </Grid>

                        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>


<TextFieldElement
        sx={{
            margin:5,
            width:'80%',
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
        name="year" label="Please Enter Year Name in here" required 
        />
        </Grid>

        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                <AutocompleteElement sx={{marginTop:'20%'}}
                        name="year_id"
                        options={years}
                        />
                   
                </Grid>

                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>


                    <Stack sx={{ marginTop: '8%' }} direction="row" spacing={2}>
                        <Button type="submit" variant="outlined" sx={{ fontSize: '22px' }} color="success">
                            <AddCircleOutlineIcon sx={{ marginRight: '2%' }} />
                            Add
                        </Button>
                        <Button variant="outlined" color="error">
                            <CancelIcon sx={{ marginRight: '2%' }} />
                            Error
                        </Button>
                    </Stack>
                </Grid>






            </Grid> 
            <Toaster/>

        </FormContainer>  )
}
